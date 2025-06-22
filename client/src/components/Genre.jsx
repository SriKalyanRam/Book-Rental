import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "../Styles/home.css";
function Genre(){
const[gen,setGen]= useState("");
const[books,setBooks] = useState([]);
const[filterd,setfiltered] = useState([]);
const[error,setError] = useState();

useEffect(()=>{
   axios.get("http://localhost:3002/books")
   .then((response)=>{
      setBooks(response.data);
      setfiltered(response.data);
   })
   .catch((err)=>{
    console.log(err);
    setError("books not available")
   })
},[])

const handgen=(e)=>{
    const selectedgen = e.target.value;
    setGen(selectedgen);

    if(selectedgen === ""){
        setfiltered(books);
    }else{
        const filt = books.filter((book)=> 
            book.genre.toLowerCase() === selectedgen.toLowerCase()
        );
        setfiltered(filt);
    }
};
  
return(
     <>

        <label htmlFor="gen">Choose a Genre:</label>

<select name="gen" id="gen" value={gen} onChange={handgen}>
   <option value="">All</option>
    <option value="Thriller">Thriller</option>
    <option value="History">History</option>
    <option value="Action">Action</option>
    <option value="Law">Law</option>
</select>
 
       <div className="car-container-home" >
             { error && <p>{error}</p>}
             
                {filterd.length===0 ?( <p>no books found</p>) :  (filterd.map((book) => (
                    <div className="card-home" key={book._id}>
                        {book.imageUrl && (
                            <img src={book.imageUrl} alt={book.title}/>
                        )}
                        <span>{book.title}</span>
                        <span>{book.author}</span>
                        <span>&#8377;{book.price}</span>
                        <button>Buy</button>
                        </div>
                  )))
                }
              </div>  
    </>
)
}

export default Genre;

