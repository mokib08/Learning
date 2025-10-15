import React from 'react'
import { useState } from 'react'

const Create = () => {

    const [fullname, setFullname] = useState("")
    const [age, setAge] = useState(0)

    const submitHandler = (e) => {
        e.preventDefault();

        const newUser = {fullname, age};
        console.log(newUser);
        setAge("");
        setFullname("")
        
    }

  return (
    <div>
        <h1>Register User</h1>
        <form onSubmit={submitHandler}>


            <input
                onChange={(e) => setFullname(e.target.value)}
                value={fullname}
                type="text" placeholder='Full Name' />

            <input 
                onChange={(e) => setAge(e.target.value)}
                value={age}
                type="number" placeholder='Age'
            />

            <button>Submit</button>
        </form>
        <hr />
    </div>
  )
}

export default Create