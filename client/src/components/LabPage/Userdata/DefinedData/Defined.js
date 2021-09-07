import React from 'react'
import './Style.css'

const Defined=()=>{
    return(
        <>
       <div className="containerD">
            <div className="Mini">
                <h4>Minimum Requirment</h4>
                <div className="mini">
                <input className="dupli" type="text" id="country" name="country" value="Operating System"readonly></input>
                <input type="text" id="country" name="country" value="RAM" readonly></input>
                <input type="text" id="country" name="country" value="Processor" readonly></input>
                <input type="text" id="country" name="country" value="Graphic Card" readonly></input>
                </div>
                
            </div>
            <div className="User"><h4>User Provided</h4><div><select name="cars" id="cars">
                    <option value="volvo">Volvo</option>
                    <option value="saab">Saab</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    </select></div></div>
       </div>
        </>

    );
}
export default Defined;