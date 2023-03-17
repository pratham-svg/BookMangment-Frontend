import React from 'react'
import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagram,
    FaTwitterSquare,
  } from 'react-icons/fa';

const Footter = () => {
    const data = [
        { 
          r1 : "Solutions"  ,
          c1 : 'Analytics',
          c2 : 'Analytics',
          c3 : 'Analytics',
          c4 : 'Analytics',
        },
        { 
            r1 : "Support"  ,
            c1 : 'Pricing',
            c2 : 'Documentation',
            c3 : 'Guides',
            c4 : 'API Status',
          },
          { 
            r1 : "Company"  ,
            c1 : 'About',
            c2 : 'Blog',
            c3 : 'Jobs',
            c4 : 'Press',
          },
          { 
            r1 : "Legal"  ,
            c1 : 'Claim',
            c2 : 'Policy',
            c3 : 'Terms',
            c4 : 'xyz',
          },
          
    ]  
      return (
      <div className='max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-700'>
       <div>
      <h1 className='w-full text-3xl font-bold text-[#de7238]'>Pratham</h1>
      <p className='py-4'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id odit ullam iste repellat consequatur libero reiciendis, blanditiis accusantium.</p>
       <div className='flex justify-between md:w-[75%] my-6'>
       <FaFacebookSquare size={30} />
       <FaInstagram size={30} />
       <FaTwitterSquare size={30} />
       <FaGithubSquare size={30} />
       <FaDribbbleSquare size={30} />
       </div>
       </div>
       <div className='lg:col-span-2 flex justify-between mt-6'>
        {data.map(({r1 , c1 , c2 , c3 , c4}) => <div>
            <h6 className='font-medium text-gray-500'>{r1}</h6>
            <ul>
                <li className='py-2 text-sm'>{c1}</li>
                <li className='py-2 text-sm'>{c2}</li>
                <li className='py-2 text-sm'>{c3}</li>
                <li className='py-2 text-sm'>{c4}</li>
            </ul>  
        </div>)}
       </div>
      </div>
  )
}

export default Footter
