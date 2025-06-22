import React from "react";
import { BrowserRouter , Routes, Route } from "react-router-dom";
import Signup from "./components/Signup"
import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import AddBook from "./components/AddBook";
import ViewBooks from "./components/ViewBooks";
import EditBook from "./EditBook";
import Shop from "./components/Shop";
import Genre from "./components/Genre";
function App() {
  return (
   
      <BrowserRouter>
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>} >
           <Route path="add-book" element={<AddBook />} />
          <Route path="view-books" element={<ViewBooks />} />
          <Route path="edit-book" element={<EditBook />} />
        </Route>
          <Route path="/Home" element={<PrivateRoute><Home/></PrivateRoute>} > 
          <Route path="Shop" element={<Shop />} />
           <Route path="Genre" element={<Genre />} />
          </Route>
        </Routes>
      </BrowserRouter>
    
  )
}

export default App;
