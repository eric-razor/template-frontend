import React, {Component} from 'react';
import './styles/App.css';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import Login from './components/Login'

class App extends Component {
  render(){
    return(
      <div className="App">
        <header className="App-header"> app header</header>
        <Router>
          <Route exact path="/login" component={Login}/>
        </Router>
      </div>
    )
  }
}

export default App;
