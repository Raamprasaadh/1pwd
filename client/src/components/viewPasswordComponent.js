import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../style.css';



 class viewPasswordComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            passwords:[],
            showPassword:"false"
        }
        this.showPasswords =this.showPasswords.bind(this);
    }

    showPasswords(e){
        this.setState({
            showPassword:!this.state.showPassword
        });
    }

    componentDidMount(){
        axios.get("http://localhost:3001/password")
        .then(res=>this.setState({passwords:res.data}));
    }
    render() {
        return (
            <div className="body">
{            (this.props.logged)?<div>                
                <div className="pageTitle">
                    View Password page
                </div>
                <div className="displayPasswords">
                    <table>
                        <thead>
                            <tr>
                            <th>Name</th>
                            <th>Url</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Type</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                 
                                this.state.passwords.map(password=>{
                                    
                                    return <tr className={"passwordRow"} key={password.id}>
                                        <td key={password.id+"name"}>{password.name}</td>
                                        <td key={password.id+"url"}>{password.url}</td>
                                        <td key={password.id+"uName"}>{password.userName}</td>
                                        <td key={password.id+"pwd"}><input style={{border:0,background:"none"}} type={this.state.showPassword?"password":"text"} value={password.password} readOnly /></td>
                                        <td key={password.id+"type"}>{password.type}</td>
                                    </tr>
                                    
                                })
                            }
                        </tbody>
                    </table>
                    <button onClick={this.showPasswords}>Show/hide Passwords</button>
                </div>
                </div>:<div> Please Login to view passwords</div>
                }
            </div>
        )
    }
}

function mapStateToProps(state){
    return({
        logged:state.AppDetails.logged
    })
}

export default connect (mapStateToProps)(viewPasswordComponent);