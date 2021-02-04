import React, { Component } from 'react'
import { connect } from 'react-redux'

export class ChildComponent extends Component {
    render() {
        return (
            <div>
        <p> Nama username adalah {this.props.username}</p>
        <p> Nilainya adalah {this.props.nilai}</p> 
        <p> Tingginya adalah {this.props.tinggi}</p> 
        <p>{JSON.stringify(this.props.dataAPI)}</p>
            </div>
        )
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



export default connect(mapStateToProps)(ChildComponent)
