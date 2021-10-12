import React from 'react'
 
import{ BrowserRouter as Router,Route} from 'react-router-dom';
import Gamepage from './game page/Gamepage'
export default function Game() {
    return (
        <div>
            <Router>
                <Route><Gamepage/></Route>
            </Router>
        </div>
    )
}
