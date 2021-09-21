import React from 'react'
import Result from './Result/Result';
import Defined from './Userdata/DefinedData/Defined';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
const Labpage=()=>{
    return(
<>
<Router>
    <div><Switch>
            <Route exact path="/home">
                <Defined/> 
            </Route >
            <Route exact path="/result">
                <Result/> 
            </Route >
        </Switch>
        
        </div>
    
</Router>
     
</>
    )
}
export default Labpage
