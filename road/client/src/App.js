import React, { Component } from 'react';
// import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './components/layouts/Dashboard'
import Home from './components/layouts/Home'
import Form from './components/layouts/Form'
class App extends Component {
  constructor(){
    super();
    this.state = {
      loggedInStatus : "NOT_LOGGED_IN",
      user : "",
      userdata : "",
    }
  }
  render(){
  return (
    <div>
      <BrowserRouter>
      <Switch>
        <Route exact path ={'/'}
        render = {
          props=>(
            <Home {...props} loggedInStatus = {this.state.loggedInStatus}/>
          )}/>
        <Route exact path ={'/dashboard'} component = {Dashboard}/>  
        <Route exact path ={'/form'} component = {Form}/>  
      </Switch>
      </BrowserRouter>

    </div>
  );
}
}
export default App;
