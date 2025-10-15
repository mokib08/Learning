
import React from 'react'
import { useState } from 'react'
import Create from './components/Create'
import Read from './components/Read'

const App = () => {
  
 const [users, setUsers] = useState([
      {name: 'john', age: 12},
      {name: 'Alice', age: 22},
      {name: 'Cherli', age: 32},
 ])


  return (
    <div>
      <Create />
      <Read users={users}  setUsers={setUsers}/>
    </div>
  )
}

export default App