import './App.css';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';
import Activity from './components/Activity';



function App() {
  return (

    <>
    <Router>
        <Switch>
            <Route exact path="/">                
                <div className="App">
                  <Inicio/>
                </div>
            </Route>
            <Route exact path="/home">
                 <Home/>
            </Route>
            <Route exact path="/activity">
                 <Activity/>
            </Route>
      </Switch>
    </Router>
  </>
  );
}

export default App;
