import React,{useContext , useEffect, useState} from 'react'
import userContext from '../../context/User/UserContext'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ReadBook = (props) => {
    const navigate = useNavigate()
    const [ books , setbooks] = useState({})
    const [ Reviews , setReviews] = useState([])
  const context  = useContext(userContext)
  const { User } = context
  const BookDetails = async ()=>{
   try{
    if(User){
    const book = await axios.get(`/books/${User}`,
   {headers: {"x-api-key" : `${localStorage.getItem('token')}`}})
   setbooks(book.data.data)
   setReviews(book.data.data.reviewsData)
   console.log(book.data.data.reviewsData)
   console.log("reviews",Reviews)
    }else{navigate('/LogIn')}
  }
   catch(err)
   {
    navigate('/LogIn')
   }
  }
  useEffect(() => {
    BookDetails();
  }, [])
  
  return (
    <div>
        <div className='col-4 ' style={{marginLeft : "30%" ,marginTop : "2%" }}>
      <div className="card" >
  <img src="https://wallpaper.dog/large/20539440.jpg" className="card-img-top" alt="..."/>
  <div className="card-title"><h1>Title - {books.title}</h1></div>
  <div className="card-title"><h3>category -{books.category}</h3>
    <p className="card-text">The definition of context is the setting within which a work of writing is situated. Context provides meaning and clarity to the intended message. Context clues in a literary work create a relationship between the writer and reader, giving a deeper understanding of the intent and direction of the writing.</p>
  </div>
</div>
    </div>
    <div>
    </div>
    <h1>Reviews</h1>
  {Reviews.length !==0 && Reviews.map((e)=><div class="card" >
  <div class="card-body">
    <h5 class="card-title">{e.reviewedBy}</h5>
    <h6 class="card-subtitle mb-2 text-muted">rating - {e.rating}</h6>
    <p class="card-text">Review - {e.review} A great book written</p>
  </div>
</div>)}
    </div>
  )
}

export default ReadBook
