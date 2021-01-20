import React, { Component } from 'react'
import axios from 'axios';
import {connect} from 'react-redux';
import {Redirect} from 'react-router';
import {login} from '../actions/'

import '../style.css';

 class LoginComponent extends Component {
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
            
                password:e.target.value
        })
    }
    
    onSubmit(e){
        e.preventDefault();
        
        const password={
            password:this.state.password
        }

        if(password!==""){
        axios.post("http://localhost:3001/credential/login", password)
        .then(()=>{
            this.props.dispatchLogin();
        window.alert("Login success");          
        })
        .catch((err)=>{window.alert(err)})
        }
    }
    render() {
        return (
            <div className="login">
            <div className="body">
                {
                    (this.props.logged)?<Redirect to="/addpwd" />:""
                }
            <div className="pageTitle">
                Login
            </div>
            
                <form className="loginForm" onSubmit={this.onSubmit}>
                    
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

function mapDispatchToProps(dispatch){
    return{
        dispatchLogin:()=>{dispatch(login())}
    }
}

function mapStateToProps(state){
    
    return(
        {
        logged:state.AppDetails.logged
    })
}

export default connect(mapStateToProps,mapDispatchToProps)(LoginComponent);