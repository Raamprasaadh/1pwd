import React, { Component } from 'react'
import axios from 'axios';

import '../style.css';

export default class loginComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            password:""
        }
    
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    
    onChangePassword(e){
        this.setState({
            password:this.setState({
                password:e.target.value
            })
        })
    }
    onSubmit(e){
        e.preventDefault();

        //api call and windows.location
    }
    render() {
        return (
            <div>
            <div className="pageTitle">
                <h2>Login</h2>
            </div>
            <div className="loginForm">
                <form onSubmit={this.onSubmit}>
                    
                    <div className="formGroup">
                        <label className="formLabel">Password : </label>

                        <input type="password" onChange={this.onChangePassword} className="formInput"/>
                    </div>
                    <button type="submit">Login</button>
                </form>
            </div>
    
            </div>
        )
    }
}

