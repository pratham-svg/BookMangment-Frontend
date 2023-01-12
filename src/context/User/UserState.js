import React,{useState} from 'react'
import userContext from './UserContext'
import { useNavigate } from 'react-router-dom'

const UserState = (props) => {
    const navigate = useNavigate()
    const [User , setUser] = useState('')
    const BookDetails = (id)=>{
      setUser(id)
     console.log(User)
     navigate("/ReadBook")
    } 
  return(
        <userContext.Provider value={{BookDetails , User }}>
            {props.children}
        </userContext.Provider>
    )
}

export default UserState
