import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import 'bootstrap/dist/css/bootstrap.min.css' ;
import Quiz from './Quiz' ;
// import { render } from "react-dom";
// import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
 import { Route, Switch } from 'react-router-dom/cjs/react-router-dom';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';
import Home from './components/Home';
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Switch>
    <Route exact path='/quiz'>
          <Header/>
          <Quiz/>
        </Route>
        <Route exact path='/'>
          <Header/>
          <Home/>
        </Route>
    </Switch>
   
     
    </BrowserRouter>
      
    </div>
  );
}

export default App;
