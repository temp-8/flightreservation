import React, { useState } from 'react'

function Registration() {
    // const [user,setuser]=useState({Name:"",
    //         email:"",
    //         phone:0,
    //         address:"",
    //         password:""})
    const [flag,setflag]=useState(0)
    return (
    <div>
       <div class="backgroundimage2">
        <div class="registration-container">
            <form class="registration-form">
                <h2>Register</h2>

              
                <label for="username">Username</label>
                <input type="text" id="username" name="username" required onBlur={(e)=>setuser({...user,Name:e.target.value})}/>

                <label for="email">Email</label>
                <input type="email" id="email" name="email" required  onBlur={(e)=>setuser({...user,email:e.target.value})}/>

                <label for="phone">Phone Number</label>
                <input type="tel" id="phone" name="phone" required  onBlur={(e)=>setuser({...user,phone:e.target.value})}/>

                <label for="address">Address</label>
                <input type="text" id="address" name="address" required  onBlur={(e)=>setuser({...user,address:e.target.value})}/>

                <label for="password">Password</label>
                <input type="password" id="password" name="password" required onBlur={(e)=>setuser({...user,password:e.target.value})}/>

                <label for="confirm-password">Confirm Password</label>
                <input type="password" id="confirm-password" name="confirm-password" required/>

               

                <button type="button" onClick={()=>setflag(1)}>Register</button>
                {flag==1 && (
                  <div>
                    
                  </div>
                )}
            </form>
        </div>
    </div>
    {/* <h1>{user}</h1> */}
    {/* <h1>{JSON.stringify(user)}</h1> */}

    </div>
  )
}

export default Registration
