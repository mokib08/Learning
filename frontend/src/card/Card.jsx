import React from 'react'

const Card = (props) => {
  return (

        <div className='w-[15vw] bg-gray-800 p-5 text-center rounded '>
            <img className='w-20 h-20 rounded-full m-auto mb-3 ' src={props.photo} alt="" />
            <h1 className='text-2xl mb-1'>{props.username}</h1>
            <h3 className=''>{props.city}, {props.age}</h3>
            <h4 className='text-blue-500 my-1'>{props.profe}</h4>
            <button className='bg-orange-400 px-5 py-2 rounded-[50px] mt-3'>Add Friend</button>
        </div>

  )
}

export default Card