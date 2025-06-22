import React, { useEffect } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { FaBook, FaEdit, FaEye } from "react-icons/fa";
import '../Styles/DashBoard.css'

// Define just the data you need
const menu = [
  { name: "Add Book", path: "add-book", icon: <FaBook /> },
  { name: "View Books", path: "view-books", icon: <FaEye /> },
  { name: "Edit Book", path: "edit-book", icon: <FaEdit /> },
]
function Dashboard() {

  return (
<>
    <div className="arrange">
    <div className="navbar">
      <span>Admin Portal</span>
    <nav >
     <ul>
      {menu.map((item)=>(
          <li key={item.path}>
           <NavLink to={item.path} className="active">
            {item.icon} {item.name}
           </NavLink>
          </li>

       
      ))}
 

     </ul>


    </nav>
           
    </div>
    <Outlet/>
       </div>
    </>
  )
}

export default Dashboard;
