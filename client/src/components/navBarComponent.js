import React, { Component } from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';
import {connect} from 'react-redux';
import {logout} from '../actions';

import '../style.css';

 class navBarComponent extends Component {
    constructor(props){
        super(props);

        this.state={
            length:100
        }
        this.logout = this.logout.bind(this);
    }

    logout(){
        this.props.dispatchLogout();        
    }

    componentDidMount(){
        axios.get("http://localhost:3001/credential")
        .then((res)=>{
            this.setState({
                length:res.data.length
            })
        })
    }
    render() {
        return (
            <div>
                <div className="navBar">
                    <div className="navLogo">
                        <h2>(OP) One-Password</h2>
                    </div>
                    <div className="">
                    
                    

                       { this.state.length === 0 ?
                        <Link className="navLinks" to="/signin">Signup</Link>:()=>{}
                       }
                       {
                           this.state.length !== 0 && !this.props.logged ?
                           
                        <Link className="navLinks" to="/login">Log in</Link> :
                        <div> 
                            <Link className="navLinks" to="/Login" onClick={this.logout}>Log out</Link>
                            <Link className="navLinks" to="/viewpwd">View Password</Link>
                            <Link className="navLinks" to="/addpwd">Add Password</Link>
                        </div>
                        }
                    
                    </div>
                </div>
                
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        logged:state.AppDetails.logged
    })
}
function mapDispatchToProps(dispatch){
    return({
        dispatchLogout:()=>{dispatch(logout())}
    })
}

export default connect (mapStateToProps,mapDispatchToProps)(navBarComponent);