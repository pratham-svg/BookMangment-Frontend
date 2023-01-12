import React,{ useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import BookDetails from './BookDetails'
import ReadBook from './ReadBook'
import userContext from '../../context/User/UserContext'

const BookCard = (props) => {
  const context = useContext(userContext)
  const {  BookDetails }  = context
  const navigate = useNavigate()
  const Readbook = (e)=>{
   e.preventDefault()
   BookDetails(props.book._id)
  }
  return (
    <div>
      <div className="card" >
     <img src="https://i.pinimg.com/originals/b6/40/5f/b6405f608edc124fcf29151099d8489e.jpg" className="card-img-top" alt="..."/>
     <div className="card-body">
     <h5 className="card-title">{props.book.title}</h5>
     <h5 className="card-title">{props.book.category}</h5>
     <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
     <a href="#" className="btn btn-primary" onClick={Readbook}>Read Book</a>
    </div>
</div>
    </div>
  )
}

export default BookCard
