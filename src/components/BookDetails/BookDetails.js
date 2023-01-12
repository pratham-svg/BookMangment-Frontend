import React, { useEffect, useState } from "react";
import axios from "axios";
import BookCard from "./BookCard";
import { useNavigate } from "react-router-dom";

const BookDetails = () => {
    let navigate = useNavigate()
  const [Book, Usebook] = useState([]);
  const BookData = async () => {
    try {
      const data = await axios.get("/books",
      { headers: {"x-api-key" : `${localStorage.getItem('token')}`} });
      Usebook(data.data.data);
    } catch (e) {
      window.alert("Please log-in");
      navigate('/LogIn')
    }
  };
  useEffect(() => {
    BookData();
  }, []);

  return (
    <div>
      <div className="row">
        {Book.map((e) => {
          return (
            <div className="col-4 md-4 my-4">
              {" "}
              <BookCard book={e} />{" "}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default BookDetails;
