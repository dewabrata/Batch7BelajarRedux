import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

export class ParentComponent extends Component {
    render() {
        return (
            <div>
                <ChildComponent/>
            </div>
        )
    }
}


export default ParentComponent
