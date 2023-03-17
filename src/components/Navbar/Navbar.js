import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { FaBars , FaTimes } from 'react-icons/fa'

const Navbar = () => {
  const [ nav , setNav ] = useState(false)
    const links =[
        {
            id : 1,
            link : "home"
        },
        {
            id : 2,
            link : "About"
        },
        {
            id : 3,
            link : "Books"
        },
        {
            id : 4,
            link : "contact"
        },
        {
            id : 5,
            link : "LogIn"
        },
    ]
  return (
    <div className=' flex justify-between items-center w-full
    h-20 px-4 text-white bg-black'>
        <div className='text-4xl font-signature'>
            Book Mangment
        </div>
        <ul className='hidden md:flex'>
        {links.map(({id , link})=> <li key={id} className='px-4 cursor-pointer capitalize text-gray-500
            hover:scale-105 duration-200'><Link to={link} className='text-white' smooth duration={500}>{link}</Link> </li>)}    
        </ul>
        <div onClick={()=> setNav(!nav) } className=' cursor-pointer text-gray-400 pr-2 z-10 hover:scale-105 duration-200 md:hidden'>
            {nav ?  <FaTimes size={30}
              /> :<FaBars size={30} />}
        </div>
       {nav && (<ul className='flex flex-col justify-center items-center
        absolute top-0 left-0 w-full h-screen bg-gradient-to-b
        from-black to-gray-800 text-gray-500'>
         {links.map(({id , link})=> <li id={id} className='px-4
         cursor-pointer capitalize py-6 text-4xl 
         hover:scale-105 duration-200'><Link to={link} onClick={()=>setNav(false)} smooth duration={500}>{link}</Link></li>)} 
        </ul>)}
    </div>
  )
}

export default Navbar
