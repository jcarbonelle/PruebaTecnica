import React, {Component} from 'react'
import {Input, Button, Container, Row, Col, Alert} from 'reactstrap'
import './Login.css'
import firebase from './firebase'

//Componente para el inicio de sesion

class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            usuario: '',
            contraseña:'',
            email: '',
            error: false
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleClick=this.handleClick.bind(this)
    }
    //Actualizacion del state al cambiar los inputs
    handleChange(e){
        this.setState({
          [e.target.name]: e.target.value
        })
    }
    //Inicio de sesion
    handleClick(e){
        e.preventDefault()
        var username= this.state.usuario
        //Obtener de la base de datos el email asociado al nombre de usuario
        firebase.database().ref('/usuarios/' + username).once('value', (snapshot)=>{
            if(typeof snapshot.val() == 'string'){
                this.setState({
                    email: snapshot.val()
                })
            }
        }).then(()=>{
            //Realizar el inicio de sesion en firebase
            firebase.auth().signInWithEmailAndPassword(this.state.email, this.state.contraseña).then(()=>{
                this.props.submit()
            }).catch(()=> {
                this.setState({error: true})
            })
        })

    }
    render(){
        return(
        <div>
            <div className="login-box">
            {
                this.state.error ? (<Alert color="danger">Usuario y/o contraseña incorrectos</Alert>) : (<div></div>)
            }
              Usuario:
              <Input type="text" name="usuario" onChange={this.handleChange} /><br />
              Contraseña: 
              <Input type="password" name="contraseña" onChange={this.handleChange}/><br />
              <Button onClick={this.handleClick}>Ingresar</Button>
            </div>

          </div>)
    }
}

export default Login