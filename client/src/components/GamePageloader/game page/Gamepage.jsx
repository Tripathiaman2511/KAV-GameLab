import React, { Component } from "react";
import Valorantvideo from '../GamecardPage/GamecardPage-comp/Gamevideo/Valorantvideo.jsx';
import Gta5video from '../GamecardPage/GamecardPage-comp/Gamevideo/Gta5video.jsx';
import Pubgvideo from '../GamecardPage/GamecardPage-comp/Gamevideo/Pubgvideo.jsx';
import Fortnitevideo from '../GamecardPage/GamecardPage-comp/Gamevideo/Fortnitevideo.jsx';
import Valorant from "../GamecardPage/GamecardPage-comp/Gamedetails/Valorant.jsx";
import Pubg from "../GamecardPage/GamecardPage-comp/Gamedetails/Pubg.jsx";
import Fortnite from "../GamecardPage/GamecardPage-comp/Gamedetails/Fortnite.jsx";
import GtaV from "../GamecardPage/GamecardPage-comp/Gamedetails/Gta5.jsx";

import Carousel from './gamepage-comp/Carousel'
import Gamecards from "./gamepage-comp/Gamecards";

import { BrowserRouter, Route, Switch } from "react-router-dom";

class Gamepage extends Component {
    render() {
        return (
            <div>

                <BrowserRouter>
                    <Switch>
                        <Route exact path="/game/Valorant">
                            <Valorantvideo muted />
                            <Valorant />
                        </Route>

                        <Route exact path="/game/Gta-V">
                           
                           <Gta5video />
                           <GtaV />
                       </Route>

                       <Route exact path="/game/Pubg">
                           
                           <Pubgvideo />
                           <Pubg />
                       </Route>

                       <Route exact path="/game/Fortnite">
                           
                           <Fortnitevideo />
                           <Fortnite />
                       </Route>

                       <Route exact path="/game">
                            <Carousel />
                            <Gamecards />
                        </Route>

                    </Switch>
                    
                    
                </BrowserRouter>
            </div>
        )
    }
}

export default Gamepage