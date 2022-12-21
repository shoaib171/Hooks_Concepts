import React from 'react'
import { useContext } from 'react';
import { AppContext } from './Components/UseContext/userContext';
const ChildSecond = () => {
  const userData=useContext(AppContext)
  console.log(userData,"UserData")
    return (
    <div style={{textAlign:"center"}}>
         
    <table>
    <tr>
      <th>Name</th>
      <th>Age</th>
  </tr>

  <tr>
  <th>{userData.name}</th>
  <th>{userData.age}</th>
</tr>

   
            
        
  
   
  </table>
  
    </div>
  )
}

export default ChildSecond
