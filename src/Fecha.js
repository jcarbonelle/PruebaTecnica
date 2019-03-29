import React, {Component} from 'react'
import {Input, Button, Row, Col} from 'reactstrap'
import moment from 'moment'
import './Fecha.css'

class Fecha extends Component {
    constructor(props){
        super(props)
        this.state={
            fecha: '',
            nombre: ''
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
    handleClick(e){
        var date= moment(this.state.fecha)
        //Asignar el nombre del día a los numeros que se obtienen con el moment.js
        if(date.day()==1){
            var day="Lunes"
        }else{
            if(date.day()==2){
                var day="Martes"
            }else{
                if(date.day()==3){
                    var day = "Miércoles"
                }else{
                    if(date.day()==4){
                        var day= "Jueves"
                    }else{
                        if(date.day()==5){
                            var day="Viernes"
                        }else{
                            if(date.day()==6){
                                var day="Sábado"
                            }else{
                                if(date.day()==0){
                                    var day ="Domingo"
                                }
                            }
                        }
                    }
                }
            }
        }
        this.setState({
            nombre: day
        })
    }
    render(){
        return (
            <div className="date-box">
            <Col>
                <Row>
                <h5>Digite la fecha deseada, para informar el día de la semana correspondiente</h5>
                </Row>
                <Row>
                <div>
                <Row>
                <Col>
                    Fecha: <Input type="date" name="fecha" onChange={this.handleChange}/><br />
                </Col>
                <Col>
                    <Button onClick={this.handleClick}>Enviar</Button>
                    <Button onClick={this.props.logout}>Salir</Button>
                </Col>
                </Row>
                </div>
                </Row>
                <Row>
                <p>El día de la semana de la fecha dada es:  {this.state.nombre}</p> 
                </Row>
            </Col>
            </div>
        )
    }
}

export default Fecha