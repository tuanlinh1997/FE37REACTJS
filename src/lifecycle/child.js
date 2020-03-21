import React, { Component } from 'react'

export default class Child extends Component {
    
    UNSAFE_componentWillReceiveProps(nextProps){
        console.log("UNSAFE_componentWillReceiveProps", nextProps)
    }

    render() {
        return (
            <div>
                <h3>*Child component</h3>
                <p> {this.props.username} </p>
            </div>
        )
    }
}
