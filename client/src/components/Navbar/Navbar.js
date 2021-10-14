import React from 'react'
import {Link } from 'react-router-dom';
import './Navbar.css';
import $ from 'jquery';

function Navbar() {
  


    $(function () {
        $(document).scroll(function () {
          var $nav = $(".navbarerie");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

    return (
      
          <nav className="navbarerie">
           <div className="navbarcont">
              <Link to="/Home" className="navblogi">
                  
                     <h1>KAV</h1>
                    <p>GAMELAB</p>   
              </Link> 
             
              <ul className='navmen'>
                  <li className='navit'>
                      <Link to='/Home' className='navlin'>
                          HOME
                      </Link>
                  </li>
                  <li className='navit'>
                      <Link to='/game'  className='navlin' >
                          GAME
                      </Link>
                  </li>
                  <li className='navit'>
                      <Link to='/labpage' className='navlin' >
                          LABS
                      </Link>
                   </li>  
                
                   
              </ul>
        
             
           </div>
           </nav>
        
          
    )
}

export default Navbar
