import React from "react";
import video from '../../VideoPreview/Pubg.mp4';
import './Gamevideo.css';
function Pubgvideo (){
    return(
        <div className="gamecontainer">
        <video autoPlay className="video">
            <source src={video}/>
        </video>
        </div>
    );
};
export default Pubgvideo;