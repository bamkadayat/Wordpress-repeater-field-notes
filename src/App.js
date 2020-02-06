import React, { Component } from 'react'
import Faq from './Faq';
import Login from './loginForm';
import './main.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {      
    }
  }  
  render() {
    return (
      <div className="ui container comments">
        <Faq /> 
        <Login />       
      </div>
    );
  }
}
export default App
