import './App.css';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Activity from './components/Activity';
import OneCountry from './components/OneCountry';
import Nav from './components/Nav';
import CountryList from './components/CountryList';


function App() {
  return (

    <>
    <Router>
        <Switch>
            
            <Route exact path="/home">
                
                 <Home/>
            </Route>
            <Route exact path="/activity">
                 <Activity/>
            </Route>
            <Route  path="/all">
                 <CountryList/>
            </Route>
            <Route exact path="/">                
                <div className="App">
                  <Inicio/>
                </div>
            </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
