import React from "react";
import {useEffect, useState } from "react";
import axios from "axios";
import "../Styles/Viewbooks.css"
function ViewBooks(){
      const [error, setError] = useState("");
      const [books,setBooks] = useState([]);
      const[display,setDisplay] =useState([]);
      const[searchi,setSearchi]=useState();
      const[sortdata,setSortdata]=useState();
    useEffect(() =>{
        axios.get("http://localhost:3002/books")
        .then((response) =>{
            setBooks(response.data);
            setDisplay(response.data);
        })
         .catch((err) => {
        console.error(err);
        setError("Failed to load books");

       });
    },[]);

    const handlesearch =(e)=>{
      setSearchi(e.target.value);
    }

    const handledata =(e) =>{
        setSortdata(e.target.value);
    }
   

    useEffect(() =>{

      let currentBooks= [...books];
      if(searchi){
      currentBooks = currentBooks.filter((book)=> { return book.title.toLowerCase().includes(searchi.toLowerCase())})
     
      }
        
      if(sortdata){
        currentBooks.sort((a,b) =>{
           if(sortdata ==="LowtoHigh") return a.price - b.price;
           if(sortdata ==="HightoLow") return b.price - a.price;
           return 0;
        });
      }
        setDisplay(currentBooks);
    
    },[searchi,sortdata,books])
    return(
       <>
       <div className="viewhead">
        <div className="inputfil">
          <input
  type="text"
  placeholder="Search books..."
  value={searchi}
  onChange={handlesearch}
  style={{ padding: "8px", width: "150px", margin: "20px", borderRadius: "5px", border: "1px solid #ccc" }}
/>

<select id="sort" value={sortdata} onChange={handledata}>
  <option value="">-- Select --</option>
 <option value="LowtoHigh">Low to High</option>
 <option value="HightoLow">High to Low</option>
</select>
</div> 
       <div className="card-container">
  {books.length === 0 ? (
    <p>No Books Found</p>
  ) :(display.length===0) ?(<p>no matching books found</p>) : (
    display.map((book) => (
      <div className="card" key={book._id}>
        {book.imageUrl && <img src={book.imageUrl} alt={book.title} />}
        <span>{book.title}</span>
        <span>{book.author}</span>
        <span>₹ {book.price} </span> 
        <button>Buy</button>
      </div>
    ))
  )}
</div>
</div>
      
       
       </>
    )
}

export default ViewBooks;