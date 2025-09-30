import React from 'react'

const Card = (props) => {
  return (
    <div className='mr-7 bg-white text-black inline-block p-6 text-center rounded'>
        <img className='w-22 h-22 rounded-[50%] m-auto mb-4 ' src={props.photu} alt="" />
        <h1 className='text-2xl font-semibold mb-2'>{props.username}</h1>
        <h4 className=' text-blue-400' >{props.profe}</h4>
        <h2>{props.city} ,{props.age}</h2>
        <button className='bg-emerald-500 p-2 rounded mt-5 text-gray-600 '>Add Friend</button>
    </div>
  )
}

export default Card