import React from "react";
import video from '../../VideoPreview/Valo.mp4';
import './Gamevideo.css';

function Valorantvideo (){
    return(
        <div className="gamecontainer">
        <video autoPlay className="video">
            <source src={video}/>
        </video>
        </div>
    );
}; 
export default Valorantvideo;