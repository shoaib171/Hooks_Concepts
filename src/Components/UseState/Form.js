import React from 'react'
import { useState } from 'react'
const Form = (props) => {
    const [Name,SetName]=useState("")
    const [Email,SetEmail]=useState("")
    const [Password,SetPassword]=useState("")
    const [Gender,SetGender]=useState("Male")
    const[Entry,SetAllEntry]=useState([]);
   const handleAddrTypeChange=(e)=>{
    SetGender(e.target.value)
    console.log(Gender)
   }
   const submission=(e)=>{
       e.preventDefault();
       let Entries={Name:Name,Password:Password,Email:Email,Gender:Gender}
       SetAllEntry(...Entry,Entries)
       localStorage.setItem("Entries",JSON.stringify(Entries))
       SetName("");
       SetEmail("");
       SetPassword("");
       SetGender("");
       alert("Submitted")
   }
  return (
    <div style={{textAlign:"center",position:"relative",top:"50px"}}>
    <h2>{props.heading}</h2>
      <form onSubmit={submission}>
          <div>
           Name:
          <input type="text"
           placeholder='Enter Name'  
           value={Name}
           onChange={(e)=>SetName(e.target.value)}
           />
          </div>
          <br/>
          <div>
          Email:
         <input type="email" placeholder='Enter Email'
         value={Email}
         onChange={(e)=>SetEmail(e.target.value)}
         />
         </div>
         <br/>
         <div>
         Password
        <input type= "password" placeholder='Enter Password' 
        value={Password}
        onChange={(e)=>SetPassword(e.target.value)}
        />
        
        <div>
        Choose Gender:
            <select name="Gender" id="gender"  defaultValue={Gender}  onChange={handleAddrTypeChange} >
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Others">Others</option>
                
            </select>
        </div>
        <br/>
       <div>
       <button  className='btn' type='submit'>Submit</button>
       </div>
        </div>
      </form>
    </div>
  )
}

export default Form
