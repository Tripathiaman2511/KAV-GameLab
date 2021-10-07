import React from'react';
import './App.css'
import Labpage from './components/LabPage/Labpage';
import Navbar from './components/Navbar/Navbar';
import Home from './components/HomePage/Home';
import{ BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Result from './components/LabPage/Result/Result';
import Footer from './components/HomePage/Footer'
const App=()=>{
    return(<>
    <Router>
        <Navbar/>
        <Switch>
            <Route exact path="/Home"><Home/></Route>
            <Route exact path="/labpage"><Labpage/></Route>
            <Route exact path="/labpage/Result"><Result/></Route>
        </Switch>
        <Footer/>
    </Router>
   
       
      
    </>);
}

export default App;