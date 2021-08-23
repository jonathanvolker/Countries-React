import './App.css';
import Inicio from './components/Inicio';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './components/Home';



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
            <Route path="/home">
                <Home/>
            </Route>

      </Switch>
    </Router>
  </>
  );
}

export default App;
