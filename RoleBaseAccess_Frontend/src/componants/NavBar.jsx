import React, { useEffect } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import service from "../service/Service";

function NavBar() {

  let navigate = useNavigate();

  useEffect(()=>{
    let data = {
      id:0,
    email:localStorage.getItem("email"),
    password:localStorage.getItem("password"),
    role:localStorage.getItem("role")
  }
  
    service.login(data).then((res)=>{
       console.log(res);
    }).catch((err)=>{
      console.log(err);
      navigate("/");
    });
  },[]);


let logout=()=>{
  localStorage.clear();
  navigate("/");
}

  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
    
    <NavLink className="navbar-brand fw-bold" to="/products">ProductApp</NavLink>

    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
      data-bs-target="#navbarNav">
      <span className="navbar-toggler-icon"></span>
    </button>

    <div className="collapse navbar-collapse" id="navbarNav">
      
      <ul className="navbar-nav me-auto">
        <li className="nav-item">
          <NavLink className="nav-link active" to="#">Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="#">About</NavLink>
        </li>
      </ul>

      

    </div>
    <button className='btn' onClick={logout}> logout</button>
  </div>
</nav>

    </>
  )
}

export default NavBar