import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {
    const navigate = useNavigate()
    const [ Data , UseData ] =useState({ "title" : "" , "name" : "" , "email" : "" , "phone" : "" , "password" : ""})
  const ChangeHandler = (e)=>{
    e.preventDefault()
    const name = e.target.name
    const value = e.target.value
    UseData({ ...Data , [name] : value})
    console.log(Data)
  }
  const DataBase = async (e)=>{
    e.preventDefault()
    try{const user = await axios.post('/register',Data)
     if(user.status == false)
     {
        window.alert("invalid data")
     }
     else{  window.alert("register successfully")
    navigate('/LogIn')}}
    catch(err){
       window.alert("please enter valid data")
    }
  }
    return (
    <div style={{marginTop : "4%"}}>
      <form className='col-4'>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Title</label>
    <input type="name" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
      value={Data.title} onChange={ChangeHandler} name={'title'}   />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Name</label>
    <input type="name" className="form-control" id="exampleInputPassword1"  
    value={Data.name} onChange={ChangeHandler} name={"name"}   />
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">E-mail</label>
    <input type="name" className="form-control" id="exampleInputPassword1"
     value={Data.email} onChange={ChangeHandler} name={"email"}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Phone</label>
    <input type="name" className="form-control" id="exampleInputPassword1"
    value={Data.phone} onChange={ChangeHandler} name={"phone"}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1"
    value={Data.password} onChange={ChangeHandler} name={"password"}/>
  </div>
  <button type="submit" className="btn btn-primary" onClick={DataBase}>Submit</button>
</form>
    </div>
  )
}

export default SignUp
