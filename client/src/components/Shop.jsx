import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "../Styles/home.css";
function Shop(){

   

    const [books,setBooks] = useState([]);
    const [error,setError] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
     const [searchsot, setSearchsot] = useState("");

    useEffect(()=>{
        axios.get("http://localhost:3002/books")
          .then((response =>{
            setBooks(response.data);
            setBooks(response.data);
          }))
          .catch((err)=>{
            console.log(err);
            setError("Error to load the books");
          })
    },[])

    const filterBooks = books.filter((book) =>{
       return  book.title.toLowerCase().includes(searchTerm.toLowerCase())
    });

    const handsot=(e) =>{
       const ch=e.target.value;
       setSearchsot(ch);

      const sortedBooks = [...books].sort((a, b) => {
      if (order === "lowToHigh") return a.price - b.price;
      if (order === "highToLow") return b.price - a.price;
      return 0;
    });

    setBooks(sortedBooks);
    }
return(
     <>

           <div><input
  type="text"
  placeholder="Search books..."
  value={searchTerm}
  onChange={(e) => setSearchTerm(e.target.value)}
  style={{ padding: "8px", width: "300px", margin: "20px", borderRadius: "5px", border: "1px solid #ccc" }}
/>

<select id="sort" value={searchsot} onChange={handsot}>
  <option value="">-- Select --</option>
 <option value="lowToHigh">Low to High</option>
 <option value="highToLow">High to Low</option>
</select>

</div>
         
          <div className="car-container-home" >
             { error && <p>{error}</p>}
             
                {books.length===0 ?( <p>no books found</p>) : (filterBooks.length===0) ? (<p style={{color:"red"}}>no matching books</p>)  : (filterBooks.map((book) => (
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

export default Shop;