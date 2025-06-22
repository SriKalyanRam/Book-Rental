import React from "react";
import axios from "axios";
import { useState,useEffect } from "react";
import "../Styles/home.css";
import { Outlet } from "react-router-dom";
import { NavLink } from "react-router-dom";
function Home(){

    const menu = [
        {name : "home" , path : "" },
        {name : "Shop" , path : "Shop" },
        {name : "Genre" , path : "Genre" },
        {name : "Cart" , path : "Cart" },
    ]

return(
     <>

            <div className="nav-div">
            <h1>Book Rental</h1>
        <ul>
          {menu.map((item) =>(
            
            <li key={item.path} ><NavLink className="navl" to={item.path} >
            {item.name}
           </NavLink>  </li>
          ))} 
          </ul>

          <button>LogOut</button>
          </div>
       
          

   
      
     <Outlet/>
    </>
)
}

export default Home;