import React, { Component } from "react";
  
import './Carousel.css';
import slide1 from '../Slides-images/slide1.jpg';
import slide2 from '../Slides-images/slide2.jpeg';
import slide3 from '../Slides-images/sllide3.jpeg';
import slide4 from '../Slides-images/slide4.jpg';
import Carousel from 'react-bootstrap/Carousel'

export class BootstrapCarousel extends Component {
    render() {
        return (
            <div>
                <div>
                    <Carousel interval={3000} slide={true}>
                        <Carousel.Item style={{ 'height': "674px" ,"width":"100%" }} >
                            <img style={{ 'height': "674px","width":"100%" }}
                                className="d-block w-100"
                                src={slide1}
                                alt="game" />
                             <div className="caption">
                                <h3 className="heading" id="head1">VALORANT </h3>
                                <h4 className="introduction"> valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>
                                <button className="play"> Play Now</button>
                            </div>
                        </Carousel.Item  >
                        <Carousel.Item style={{ 'height': "674px" }}>
                            <img style={{ 'height': "674px" }}
                                className="d-block w-100"
                                src={slide2}  
                                alt="game" />
                            <div className="caption">
                                <h3 className="heading" id="head2">FORTNITE</h3>
                                <h4 className="introduction">valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>

                                <button className="play"> Play Now</button>
                            </div>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "674px" }}>
                            <img style={{ 'height': "674" }}
                                className="d-block w-100"
                                src={slide3} 
                                alt="game" />
                            <div className="caption">
                            <h3 className="heading" id="head3">PUBG</h3>
                                <h4 className="introduction">valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>
                                <button className="play"> Play Now</button>
                                </div>
                        </Carousel.Item>
                        <Carousel.Item style={{ 'height': "674px" }}>
                            <img style={{ 'height': "674" }}
                                className="d-block w-100"
                                src={slide4} 
                                alt="game"/>
                           <div className="caption">
                            <h3 className="heading" id="head4">GTA-V</h3>
                                <h4 className="introduction">valorant is free-to-play first-person hero shooter. A 5v5 character-based tactical FPS.</h4>
                                <button className="play"> Play Now</button>
                                </div>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        )
    }
}
export default BootstrapCarousel