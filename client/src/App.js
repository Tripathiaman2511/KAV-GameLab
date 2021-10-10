import React from'react';
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Home from './components/HomePage/Home';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Footer from './components/HomePage/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Labpage from './components/LabPage/Labpage';
import Game from './components/GamePage/Game';


const App=()=>{
    return(<>
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/Home"><Home/></Route>
            <Route exact path="/game"><Game/></Route>
            <Route exact path="/labpage"><Labpage/></Route>
        </Switch>
        <Footer/>
    </Router>
   
       
      
    </>);
}

export default App;