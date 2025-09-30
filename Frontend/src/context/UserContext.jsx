import React, { createContext } from 'react'

export const DataContext = createContext()

const UserContext = ({children}) => {


    const userData = {
        username: 'john',
        age: 20,
        city: 'Chanada'
    }

  return (
    <div>
        <DataContext.Provider value={userData} >
            {children}
        </DataContext.Provider>
    </div>
  )
}

export default UserContext