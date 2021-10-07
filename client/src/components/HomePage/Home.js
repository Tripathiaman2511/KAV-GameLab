import React from 'react'
import HeroSection from './HeroSection';
import{ BrowserRouter as Router,Route} from 'react-router-dom';
import Cards from './Cards';
import './Home.css'

const Home=()=>{
    return(
<>
<Router>
    
        <Route exact path="/Home" component={HeroSection}>
        <HeroSection/>
        <Cards/>
        </Route>
        
</Router>
     
</>
    )
}
export default Home