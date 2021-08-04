import React, {useState, useEffect} from 'react'

export const GifGrid = ({category}) => {
     const [count, setCount] = useState(0)
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
    }
     

    return (
        <div>
            <h3> { category }</h3>
            <button></button>
        </div>
    )
}
