import React, { Component, PureComponent } from 'react'

export default class Pure extends PureComponent {
    render() {
        console.log("render_Pure")
        return (
            <div>
                <h3>*Pure Component</h3>
            </div>
        )
    }
}
