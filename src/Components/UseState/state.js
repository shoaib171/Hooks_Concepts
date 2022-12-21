import React from 'react'
import { useState } from 'react'
const State = (props) => {
    const [Text,SetText]=useState("Enter text to Convert UpperCase Letter");
    const onhandlechnage=()=>{
        let newText=Text.toUpperCase()
        SetText(newText)

    }
    const onLowerchnage =()=>{
        let newText=Text.toLowerCase()
        SetText(newText)
    }

  return (
    <div style={{textAlign:"center"}}>
                <h2>{props.heading}</h2>     
                <textarea 
                value={Text}
                rows="20"
                cols="100"
                onChange={(e)=>SetText(e.target.value)}
                
                >

                </textarea> 
                <br/> 
                <div style={{display:"flex",justifyContent:"center"}}>
                <button className='btn' onClick={onhandlechnage}>UpperCase</button>
                <button  className='btn' onClick={onLowerchnage}>LowerCase</button>
                </div>
    </div>
  )
}

export default State
