import React, {useState, useEffect} from 'react'

const Marquee = () => {
    //variables
    const yesterday = (new Date(Date.now() - 86400000)).toISOString().split("T")[0];

const currency = 
    {
        current: 'X:BTCUSD'
    }

console.log(yesterday)
const EndPoint = `https://api.polygon.io/v2/aggs/ticker/${currency.current}/range/1/day/${yesterday}/${yesterday}?adjusted=true&sort=asc&limit=120&apiKey=GShYMdbBMQvrNjn131mabxw6NnenQcAR`
    //state
    const [data, setData] = useState()
    //utility
    const helper = async () => {
        try {
            const response = await fetch(EndPoint)
            const json = await response.json()
            return json, console.log(json)
            
        }catch (e) {
            console.error(e);
        }
    }
    //effects
    useEffect(() => {
        helper()

    },[])
    
  return (
    <div className='bg-black w-full h-7 flex justify-around marquee'>
        <h2 className='text-white'>Technology Reviews You Can Really On</h2>
      
        </div>
  )
}

export default Marquee