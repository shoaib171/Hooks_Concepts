import React from 'react'
import { useState } from 'react'
const ClickChange = () => {
    const [Name, SetName]=useState("Shoaib-Rasheed")
    const changeName=(e)=>{
       e.preventDefault();
       SetName("Eng.Shoaib Rasheed")
       let changeclick=Name;
       changeclick==="Shoaib-Rasheed"? SetName("Eng.Shoaib-Rasheed"):SetName("Shoaib-Rasheed")
    }
  return (
    <div style={{textAlign:"center"}}>
      <h2>{Name}</h2>
      <button onClick={changeName}>Click to change</button>
    </div>
  )
}

export default ClickChange
