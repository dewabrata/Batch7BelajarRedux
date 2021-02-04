import React, { Component } from 'react';
import {connect} from 'react-redux';
import {setUsername,setNilai,setTinggi,getAPI} from './action/action'
import ParentComponent from './component/ParentComponent';
class App extends Component {

  eventHandler = (handler) => {
  
     switch(handler.target.name){
       case "username":
       this.props.setUsername(handler.target.value);
       break
       
       case "nilai":
        this.props.setNilai(handler.target.value);
       break
       
       case "tinggi":
        this.props.setTinggi(handler.target.value);
       break
     
     }
  
  }
  
  
  render() {
    return (
      <div>
        <ParentComponent/>
        
        <p>Username : <input type="text" name="username" onChange={this.eventHandler} /> </p>
        <p>Nilai : <input type="text" name="nilai" onChange={this.eventHandler} /> </p>
        <p>Tinggi :<input type="text" name="tinggi" onChange={this.eventHandler} /> </p>
        <p><button name="api" onClick={this.props.getAPI}>API</button></p>
       
        
        
      </div>
    );
  }
}
 
 const mapStateToProps = (state)=>{
 
    return {
      nilai : state.users.nilai,
      username :state.users.username,
      tinggi : state.matematika.tinggi,
      dataAPI : state.reducerAPI.data
    }
 
 }
 
 const mapDispatchToProps = (dispatch) =>{
 
     return {
       setUsername : (user) =>{
       dispatch(setUsername(user))
       },
       setNilai : (nilai) =>{
       dispatch(setNilai(nilai))
       },
       setTinggi : (tinggi) =>{
        dispatch(setTinggi(tinggi))
        },
        getAPI : ()=>{
          fetch('https://jsonplaceholder.typicode.com/todos/1')
          .then(response => response.json())
          .then((json) => {
             dispatch(getAPI(json))
          
          })
        }
    }
 }
 


export default connect(mapStateToProps,mapDispatchToProps)(App);
 
