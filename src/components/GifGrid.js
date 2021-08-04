import React, {useState, useEffect, Fragment} from 'react'
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({category}) => {
     const [images, setImages] = useState([])
     useEffect (()=>{
        getGif();
     },[])

    const getGif= async()=>{
        const url='http://api.giphy.com/v1/gifs/search?api_key=LXqBNAQHqGTnKKVxoMGDK1cajqVkOVjn&q=goku&limit=10'
        const resp = await fetch( url );
        const {data} = await resp.json()
        const gifs =data.map( img=>{ 
            return {
                id:img.id,
                title: img.title,                
                url: img.images?.downsized_medium.url,
            }
        })
        console.log(data);
        setImages(gifs);
    }
     

    return (
       <>
         <h3> { category }</h3>
        <div className="card-grid">
           
           
                {
                   /*  images.map( img=>(
                        <li key={img.id}>{img.title}</li>
                    )) */
                   /*  images.map( 
                        ({id, title})=>(
                        <li key={id}>{title}</li>
                    )) */
                    images.map( img=>(
                        <GifGridItem key={img.id} { ...img}/>
                    ))
                }
           
            <button></button>
        </div>
        </>
    )
}
