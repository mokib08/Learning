import React, { useContext, useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Ex from './components/Ex'
import Card from './card/Card'
import axios from 'axios'
import { DataContext } from './context/UserContext'
import Header from './pages/Header'


const App = () => {

  const [data, setData] = useState([])
  const [username, setUsername] = useState('')

 const submitHandler = (e) =>{
    e.preventDefault()

    setUsername('')
    

  }

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


    const getData = async() => {
      const response = await axios.get('https://picsum.photos/v2/list?page= 2&limit=10')

      setData(response.data)

      console.log(data[0].url);
      
    }


    useEffect(() => {
      getData()
    }, [])



    const userdata = useContext(DataContext)

  return (
    <div>
      <form onSubmit={(e) => {submitHandler(e)}} >
        <input 
          value={username}
          onChange={(e) => {setUsername(e.target.value)}}
          className='px-4 py-3 m-5 text-xl bg-gray-800' type="text" placeholder='enter your name' />
        <button className='px-4 py-3 font-semibold text-xl bg-emerald-600 rounded '>send</button>
      </form>


      <Navbar />

      <Ex name="Mukib" />
      
      <div className='m-10'>
        {users.map((elem, idx) => {
          return <Card username={elem.name} city={elem.city} age={elem.age} profe={elem.profession} photu={elem.profilePhoto}  />
        })}
      </div>

        {data.map((elem, idx) => {
          return <div key={idx} className='bg-gray-50 text-black flex items-center justify-between w-[50%] px-7 py-6 rounded mb-3'>
              <img className='h-40' src={elem.download_url} alt="" />
              <h2>{elem.author}</h2>

              
              <Header />
              
          </div>
        })}

        <h1>This is App {userdata.username}</h1>

      <Footer />
    </div>
  )
}

export default App