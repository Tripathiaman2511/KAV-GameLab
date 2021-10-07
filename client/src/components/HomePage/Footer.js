import React from 'react';
import { Button } from './Button';
import './Footer.css';
import $ from 'jquery'
function Footer() {
  
      
 
    return (
        <div className='footer-container'>
            
            <section className="icon">
                <p>
                    Collaborate with us!!!
                </p>
            <a href="https://github.com/Tripathiaman2511/KAV-GameLab" target="_blank"><i className="fab fa-github-alt"></i></a>
            </section>
            <span className="block"></span>
            <section className="footer-subscription">
              <p className="footer-subscription-heading">
                  FOR ANY QUERY CONTACT US...
              </p>
               <div className="input-areas">
                   <form>
                       <input type="email" name="email" placeholder="Your Email" className="footer-input"/>
                       <Button buttonStyle='btn--outline'>Subscribe</Button>
                   </form>
               </div>
            </section>
            <span className="block"></span>
            <section className="icon2">
                    <div className="title">
                        <p id="kr" className="capital" style={{marginRight:"50px",padding:"10px"}}>K</p>  
                        <p  id="k" className="evaluate" style={{position:"absolute",marginLeft:"-30px"}} >KSHITIJ RAI</p>
                    </div>
                    <div className="title">
                        <p id="at" className="capital" style={{marginRight:"50px",padding:"10px"}}>A</p> 
                        <p id="a" className="evaluate" style={{position:"absolute" ,marginLeft:"-40px"}}>AMAN TRIPATHI</p>
                    </div>
                    <div className="title">
                        <p id="vc" className="capital" style={{padding:"10px"}}>V</p>  
                        <p id="v" className="evaluate" style={{position:"absolute",marginLeft:"-40px"}}>VIJESH CHAUDHARI</p>
                    </div>
                   
                    
                    
            </section>
           
        </div>
    )
}

export default Footer;
