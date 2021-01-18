import React, { Component } from 'react'
import {Link} from 'react-router-dom';

export default class navBarComponent extends Component {
    render() {
        return (
            <div>
                <div className="navBar">
                    <div className="navLogo">
                        <h2>(OP) One-Password</h2>
                    </div>
                    <div className="navLinks">
                    <Link to="/viewpwd">View Password</Link>
                    <Link to="/addpwd">Add Password</Link>
                    </div>
                </div>
                
            </div>
        )
    }
}
