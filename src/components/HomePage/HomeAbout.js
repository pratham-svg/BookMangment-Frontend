import React from 'react'
import lap from '../../Image/laptop.png'

const HomeAbout = () => {
  return (
    <div className='w-full bg-white px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
       <img className='w-[400px] h-[300px] mx-auto py-2' src={lap} alt='/' />
      <div className='flex flex-col justify-center'>
       <p className='text-black font-bold '>Data Analytics </p>
       <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold
        py-2'>Book Managment</h1>
       <p>
       Soon after you wake up, you usually navigate through large amounts of textual data in the form of text messages, emails, social media updates, and blog posts before you make it to your first cup of coffee.
Deriving information from such large volumes of text data is challenging. Businesses deal with massive quantities of text data generated from several data sources, including apps, web pages, social media, customer reviews, support tickets, and call transcripts
       </p>
       <button className='bg-gradient-to-tr from-red-500 to-orange-500 w-[200px] font-bold my-6 mx-auto py-3 rounded-md text-black hover:scale-105 duration-150 '>Get Started</button>
       </div>
      </div>
    </div>
  )
}

export default HomeAbout
