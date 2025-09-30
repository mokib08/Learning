import React from 'react'
import Ex2 from './Ex2'

const Ex = (props) => {
  return (
    <div className=''>
        <div>Mai hun Example {props.name}</div>
        <Ex2 user={props.name} />
    </div>
  )
}

export default Ex