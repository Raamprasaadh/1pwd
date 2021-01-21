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

        
        
        if(this.state.retypedPassword!=="")
        {
            const password = {
                "password":this.state.password
            }

            axios.post("http://localhost:3001/credential/signin",password)
            .then(()=>{window.alert("Only password has been set");
        window.location.assign('/login')})
            .catch(err=>{
                
            })
        }
        
}

    render() {

        return (
            <div className="body">
                <div className="pageTitle">
                    Sign up
                </div>
                <div >
                    <form className="smallForm" onSubmit={this.onSubmit}>
                    <div className="pageHeading"> Going forward this will be the only password you will have to remember !</div>
                        <div className="formGroup">
                            <label className="formLabel">Password : </label>
                            <input type="password" onChange={this.onChangePassword} className="formInput"/>
                        </div>
                        <div className="formGroup">
                        <label className="formLabel">Retype Password : </label>
                        <input type="text" onChange={this.onChangeRetypedPassword} className="formInput"/>
                        </div>
                        <span style={{color:"red"}}>{this.state.error}</span>
                        <br/>
                    <button type="submit">Sign-up</button>
                    </form>
                </div>
            </div>
        )
    }
}
