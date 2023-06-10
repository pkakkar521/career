import React, { useEffect } from "react";
import './Navbar.css';
import image from './t.png';
import logos from '../image/logos.jpg'
import {Link, useNavigate} from 'react-router-dom';
import car from '../image/car.jpg';
export default function Navbar(){
    const auth= localStorage.getItem('user');
    const navigate = useNavigate();
    const logout =()=>{
     localStorage.clear();
     navigate('/signup');
    }
    return(
        <div className="nav">
            {auth ? 
            <nav>
              <img src={car} alt="err"/>

                <ul className="kl">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/add'>Portfolio</Link></li>
                    <li><Link to='/update'>Team</Link></li>
                    <li><Link to='/profile'>Services</Link></li>
                    <li><Link to='/subject'>Subject</Link></li>
                    <li><Link onClick={logout} to='/signup'>Logout</Link></li>
                   
                    
                  
                </ul>
                <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
            </nav>
            : <ul className="ff">
                   <li><Link to='/signup'><h1>Signup</h1></Link></li>
                  
            </ul>
}
        </div>
    )
}