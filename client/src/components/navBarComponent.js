import React, { Component } from 'react'
import {Link} from 'react-router-dom';

import '../style.css';

export default class navBarComponent extends Component {
    render() {
        return (
            <div>
                <div className="navBar">
                    <div className="navLogo">
                        <h2>(OP) One-Password</h2>
                    </div>
                    <div className="">
                    <Link className="navLinks" to="/viewpwd">View Password</Link>
                    <Link className="navLinks" to="/addpwd">Add Password</Link>
                    
                       {
                        <Link className="navLinks" to="/signin">Signin</Link>
                        }                       
                        {
                        <Link className="navLinks" to="/login">Log in</Link>
                        }
                    
                    </div>
                </div>
                
            </div>
        )
    }
}
