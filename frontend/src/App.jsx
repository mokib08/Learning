import React, { useState } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Card from './card/card'
import Axios from './components/Axios'
const App = () => {

    const users = [
                  {
                    "name": "Rahim Uddin",
                    "city": "Dhaka",
                    "age": 28,
                    "profession": "Software Engineer",
                    "profilePhoto": "https://randomuser.me/api/portraits/men/1.jpg"
                  },
                  {
                    "name": "Sadia Akter",
                    "city": "Chittagong",
                    "age": 24,
                    "profession": "Graphic Designer",
                    "profilePhoto": "https://randomuser.me/api/portraits/women/2.jpg"
                  },
                  {
                    "name": "Mehedi Hasan",
                    "city": "Sylhet",
                    "age": 30,
                    "profession": "Doctor",
                    "profilePhoto": "https://randomuser.me/api/portraits/men/3.jpg"
                  },
                  {
                    "name": "Nusrat Jahan",
                    "city": "Rajshahi",
                    "age": 26,
                    "profession": "Teacher",
                    "profilePhoto": "https://randomuser.me/api/portraits/women/4.jpg"
                  },
                  {
                    "name": "Tanvir Alam",
                    "city": "Khulna",
                    "age": 32,
                    "profession": "Entrepreneur",
                    "profilePhoto": "https://randomuser.me/api/portraits/men/5.jpg"
                  }
            ]
    


  return (
    <div className=''>
      <Navbar name='Mokib' />

      <div className='mt-10 flex items-center justify-center gap-10 '>
          {users.map((elem, idx) => {
            return <Card username={elem.name} city={elem.city} age={elem.age} profe={elem.profession} photo={elem.profilePhoto} />
        })}
      </div>

      <div className='mt-20 flex items-center justify-center'>
        <Axios />
      </div>



      <Footer />
    </div>
  )
}

export default App