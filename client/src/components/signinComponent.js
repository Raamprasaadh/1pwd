import React, { Component } from 'react';
import axios from 'axios';

import '../style.css';
export default class signinComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            password:"",
            retypedPassword:""
        }
        
        this.onChangePassword=this.onChangePassword.bind(this);
        this.onChangeRetypedPassword = this.onChangeRetypedPassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onChangePassword(e){
        this.setState({
            password:e.target.value
        });
    }
    onChangeRetypedPassword(e){
        //validation
        this.setState({
            retypedPassword:e.target.value
        });
    }
    onSubmit(e){
        e.preventDefault();
        //axios request
    }

    render() {

        return (
            <div>
                <div className="pageTitle">
                    <h2>Sign in</h2>
                </div>
                <div className="signinForm">
                    <form action={this.onSubmit}>
                        <h1>Going forward this will be the only password you will have to remember, we suggest you bring the best</h1>
                        <div className="formGroup">
                            <label className="formLabel">Password : </label>
                            <input type="password" className="formInput"/>
                        </div>
                        <div className="formGroup">
                        <label className="formLabel">Retype Password : </label>
                        <input type="text" className="formInput"/>
                        </div>

                    <button type="submit">Sign-in</button>
                    </form>
                </div>
            </div>
        )
    }
}
