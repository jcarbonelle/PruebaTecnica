import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fecha from './Fecha'
import Login from './Login'
import firebase from './firebase'

class App extends Component {
  constructor(props){
    super(props)
    this.state={
      auth: false,
      usuario: '',
      contraseña: ''
    }
    this.login=this.login.bind(this)
    this.logoUt=this.logoUt.bind(this)
  }
  login(e){
      this.setState({
        auth: true
      })
  }
  logoUt(e){
    this.setState({
      auth: false
    })
    firebase.auth().signOut()
  }
  render() {
    //Si el auth es true mostrara el componente fecha, si es false mostrara el componente de login
    return (
      <div>
          <div className="title">
            <h2>Prueba técnica</h2>
          </div>
        {
          this.state.auth ? (
              <Fecha logout={this.logoUt}/>
            ) : 
            (
              <Login submit={this.login}/>
            )
        }
        

      </div> 
    );
  }
}

export default App;
