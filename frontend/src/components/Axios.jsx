import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Axios = () => {


    const [data, setData] = useState([])

    const getData = async() => {

        const response = await axios.get('https://picsum.photos/v2/list?page=2&limit=5')


        setData(response.data)

        console.log(data[0]);
        
    }

    useEffect(() =>{
        getData()
    }, [])

  return (
    <div className='flex gap-10'>
        {data.map((elem, idx) => {
            return <div key={idx} className='w-[15vw] bg-gray-600 py-10 text-center ' >
                <img className='w-15 h-15 rounded-full m-auto' src={elem.download_url} alt="" />
                <h1>{elem.author}</h1>
            </div>
        })}
    </div>
  )
}

export default Axios