import React from "react";
import video from '../../VideoPreview/Fortnite.mp4';
import './Gamevideo.css';

function Fortnitevideo (){
    return(
        <div className="gamecontainer">
        <video autoPlay className="video"  >
            <source src={video}/>
        </video>
        </div>
    );
};
export default Fortnitevideo; 