import React from 'react'

const Contact = () => {
  return (
    <div>
          <div name='contact' className='w-full h-screen bg-gradient-to-b
     from-white to-gray-300 text-black '>
     <div className='flex flex-col p-4 justify-center 
      max-w-screen-lg mx-auto h-full '>
      <div className='pb-8'>
        <p className=' text-4xl font-bold inline border-b-4 border-gray-500 '>Contact</p>
        <p className='py-4'>Let's get in contact with each other</p>
        <div  className='flex justify-center'>
          <form action='https://getform.io/f/d9a4ece8-34e6-4c84-af88-8ccd1fd98997' method='POST' className=' flex flex-col w-full md:w-1/2 '>
            <input type="text" name="name" placeholder='Enter Your Name'
            className='p-2 bg-transparent border-2 rounded-md 
            text-black focus:outline-none
            '/>
            <input type="text" name="email" placeholder='Enter Your Email'
            className='my-4 p-2 bg-transparent border-2 rounded-md 
            text-white focus:outline-none
            '/>
            <input type="mobile" name="Number" placeholder='Enter Your Mobile Number'
            className='p-2 bg-transparent border-2 rounded-md 
            text-white focus:outline-none
            '/>
            <textarea
            placeholder='Enter Your Message' 
            name="message" row="10" className=' my-4 p-2
             bg-transparent border-2 rounded-md text-white
             focus:outline' />
             <button className=' text-white bg-gradient-to-b
              from-red-700 to-pink-600 px-6 py-3 my-8 mx-auto rounded-md hover:scale-110 duration-200'>Let's talk</button>
          </form>
          </div>
      </div>
     </div>
    </div>
    </div>
  )
}

export default Contact
