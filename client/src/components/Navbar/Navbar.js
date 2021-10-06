import React from 'react'
import { Router,Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from '../HomePage/Button';
import $ from 'jquery';

function Navbar() {
  


    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbar");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

    return (
      
          <nav className="navbar">
           <div className="navbar-container">
              <Link to="/Home" className="navbar-logo">
                  
                     <h1>KAV</h1>
                    <p className="gamelab">GAMELAB</p>   
              </Link> 
             
              <ul className='nav-menu'>
                  <li className='nav-item'>
                      <Link to='/Home' className='nav-links'>
                          HOME
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/Game' className='nav-links' >
                          GAME
                      </Link>
                  </li>
                  <li className='nav-item'>
                      <Link to='/labpage' className='nav-links' >
                          LABS
                      </Link>
                   </li>  
                  {/*  <li>
                   <Button buttonStyle='btn--outline'>Sign Up</Button>    
                   </li> */}
                   
              </ul>
        
             
           </div>
           /</nav>
        
          
    )
}

export default Navbar
