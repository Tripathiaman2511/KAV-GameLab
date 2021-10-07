import React from 'react';
import { Button } from './Button';
import './Footer.css';

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
            {/* <section className="icon2">
                    <div className="title">
                        <p className="capital">K</p>  <p className="evaluate" style={{paddingRight:"50px"}} >KSHITIJ RAI</p>
                    </div>
                    <div className="title">
                        <p className="capital">A</p> <p className="evaluate">AMAN TRIPATHI</p>
                    </div>
                    <div className="title">
                        <p className="capital">V</p>  <p className="evaluate">VIJESH CHAUDHARI</p>
                    </div>
                   
                    
                    
            </section> */}
           
        </div>
    )
}

export default Footer;
