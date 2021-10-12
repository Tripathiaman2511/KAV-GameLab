import React, { Component } from "react";
import card1 from '../Card-images/valorant-point.jpg';
import card2 from '../Card-images/pubg-card.jpeg';
import card3 from '../Card-images/fortnite.jpg';
import card4 from '../Card-images/gta.jpg';
import './Gamecards.css';
import Searchbar from "./Searchbar.js";
import Pagination from "./pagination.js";
import {Link} from'react-router-dom';

class Gamecards extends Component {
    render() {
        return (
            <div className="container">

                {/* Trending game cards */}
                <section className="type" id="trending">
                    <h3 className="type-name">Trending Games &rsaquo;</h3>
                    <div className="cardrow1">
                        <Link className="gamelink" to="/game/Valorant">
                            <div className="cards" id="card1">
                                <img src={card1} className="card-image" alt="valorant" />
                                <h5 className="gamename">Valorant</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#1</h5>
                            </div></Link>
                        <Link className="gamelink" to="/game/Pubg">
                            <div className="cards" id="card2">
                                <img src={card2} className="card-image" alt="pubg" />
                                <h5 className="gamename">Pubg</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#2</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/FORTNITE">
                            <div className="cards" id="card3">
                                <img src={card3} className="card-image" alt="fornite" />
                                <h5 className="gamename">Fortnite</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#3</h5>

                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Gta-V">
                            <div className="cards" id="card4">
                                <img src={card4} className="card-image" alt="gta-v" />
                                <h5 className="gamename">Gta-V</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#4</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Valorant">
                            <div className="cards" id="card5">
                                <img src={card1} className="card-image" alt="valorant" />
                                <h5 className="gamename">Valorant</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#1</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Pubg">
                            <div className="cards" id="card6">
                                <img src={card2} className="card-image" alt="pubg" />
                                <h5 className="gamename">Pubg</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#2</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/FORTNITE">
                            <div className="cards" id="card7">
                                <img src={card3} className="card-image" alt="fornite" />
                                <h5 className="gamename">Fortnite</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#3</h5>

                            </div>
                        </Link>
                    </div>
                </section>
                {/* All game cards  */}
                <section className="type" id="Allgames">
                    <h3 className="type-name">All Games &rsaquo;</h3>
                  
                    <div className="cardrow2">
                        <Link className="gamelink" to="/game/Valorant">
                            <div className="cards" id="card1">
                                <img src={card1} className="card-image" alt="valorant" />
                                <h5 className="gamename">Valorant</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#1</h5>
                            </div></Link>
                        <Link className="gamelink" to="/game/Pubg">
                            <div className="cards" id="card2">
                                <img src={card2} className="card-image" alt="pubg" />
                                <h5 className="gamename">Pubg</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#2</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/FORTNITE">
                            <div className="cards" id="card3">
                                <img src={card3} className="card-image" alt="fornite" />
                                <h5 className="gamename">Fortnite</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#3</h5>

                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Gta-V">
                            <div className="cards" id="card4">
                                <img src={card4} className="card-image" alt="gta-v" />
                                <h5 className="gamename">Gta-V</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#4</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Valorant">
                            <div className="cards" id="card5">
                                <img src={card1} className="card-image" alt="valorant" />
                                <h5 className="gamename">Valorant</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#1</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Pubg">
                            <div className="cards" id="card6">
                                <img src={card2} className="card-image" alt="pubg" />
                                <h5 className="gamename">Pubg</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#2</h5>
                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/FORTNITE">
                            <div className="cards" id="card7">
                                <img src={card3} className="card-image" alt="fornite" />
                                <h5 className="gamename">Fortnite</h5>
                                <h5 className="price">Free</h5>
                                <h5 className="rank">#3</h5>

                            </div>
                        </Link>
                        <Link className="gamelink" to="/game/Gta-V">
                            <div className="cards" id="card8">
                                <img src={card4} className="card-image" alt="gta-v" />
                                <h5 className="gamename">Gta-V</h5>
                                <h5 className="price">Paid</h5>
                                <h5 className="rank">#4</h5>
                            </div>
                        </Link>
                    </div>

                    {/* Pagination for all game cards */}
                    <div id="paginationbar">
                        <Pagination/>
                    </div> 
                </section>

                {/* Searchbar section */}
                <div className="searchdiv">
               <Searchbar/>
                </div>
                
                
            </div>
        )
    }
}

export default Gamecards