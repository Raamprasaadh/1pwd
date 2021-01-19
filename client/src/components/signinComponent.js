import React, { Component } from 'react';
import axios from 'axios';

import '../style.css';
export default class signinComponent extends Component {
    constructor(props){
        super(props);
        this.state={
            password:"",
            retypedPassword:"",
            error:""
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
        if(
            this.state.password === e.target.value
        )
        {
            this.setState({
                retypedPassword:e.target.value,
                error:""
            });
        }
        else{
            this.setState({
                error: "Password and retype password does not match"
            });
        }

        
    }
    onSubmit(e){
        e.preventDefault();

        const password = {
            "password":this.state.password
        }
        
        if(this.state.password === this.state.retypedPassword)
        {
            axios.post("http://localhost:3001/credential/signin",password)
            .then(()=>{window.alert("Only password has been set");
        window.location('/addpwd')})
            .catch(err=>{
                if(err.error ==="wrong password")
                {
                this.setState(
                    {
                        error:"wrong password"
                    }
                )
                }
                else{
                    this.setState(
                        {
                            error:"password and retyped password does not match"
                        }
                    );
            }
            })
        }
        
}

    render() {

        return (
            <div>
                <div className="pageTitle">
                    <h2>Sign in</h2>
                </div>
                <div className="signinForm">
                    <form onSubmit={this.onSubmit}>
                        <h1>Going forward this will be the only password you will have to remember, we suggest you bring the best</h1>
                        <div className="formGroup">
                            <label className="formLabel">Password : </label>
                            <input type="password" className="formInput"/>
                        </div>
                        <div className="formGroup">
                        <label className="formLabel">Retype Password : </label>
                        <input type="text" className="formInput"/>
                        </div>
                        <span style={{color:"red"}}>{this.state.error}</span>
                    <button type="submit">Sign-in</button>
                    </form>
                </div>
            </div>
        )
    }
}
