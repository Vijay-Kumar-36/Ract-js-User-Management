import React from 'react'
import {useState} from 'react'
import {useDispatch} from 'react-redux'
import { adduser } from '../Store/Action/user'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Home1 from './Home1.css'
export const Home = () => {
    const [user, setuser] = useState({
        name:'',
        contact:'',
        email:'',
        address:'',
    });
    const dispatch=useDispatch();
    const handlechange = (e) =>
    {
        const {name,value}=e.target;
        setuser((prev)=>{
            return {
                ...prev,[name]: value,
            }
        })
    }
    const handle =(e)=>{
        e.preventDefault();
       dispatch(adduser(user));
       setuser({
        name:'',
        contact:'',
        email:'',
        address:'',
       })
    }
    
  return (
    <div>
         <div className='myForm col-5'> 
 {/* <form>
 <h1>User Info</h1>
     <label>Enter Name</label>
     <input type='text' name='name'  value={user.name} placeholder='Enter name' onChange={handlechange}/>
     <label>Enter Mobile No</label>
     <input type='text' name='contact' value={user.contact} placeholder='Enter mobile no'  onChange={handlechange} />
     <label>Enter Mail-ID</label>
     <input type='text' name='email' value={user.email} placeholder='abc123@gmail.com'  onChange={handlechange} />
     <label>Message</label>
     <textarea name='address' placeholder='Message...'  value={user.address} onChange={handlechange} />
     <br/>
     <button onClick={handle} >Submit</button>
 </form>
 <TextField id="standard-basic" label="Standard" variant="standard" /> */}

 <div className="login-box">
  <h2>Login</h2>
  <form>
    <div className="user-box">
    <input type='text' name='name'  value={user.name} placeholder='Enter name' onChange={handlechange}/>
      <label>Username</label>
    </div>
    <div className="user-box">
    <input type='text' name='contact' value={user.contact} placeholder='Enter mobile no'  onChange={handlechange} />
      <label>Mobile No</label>
    </div>
    <div className="user-box">
    <input type='text' name='email' value={user.email} placeholder='abc123@gmail.com'  onChange={handlechange} />
      <label>Email-ID</label>
    </div>
    <div className="user-box">
    <textarea name='address' placeholder='Message...'  value={user.address} onChange={handlechange} />
      <label></label>
    </div>
    <a href="#" onClick={handle}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
      Submit
    </a>
  </form>
</div>
    
 </div>;
    </div>
  )
}





    
 