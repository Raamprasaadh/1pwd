import React, { Component } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import '../style.css';

var ctr=0;

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
        ctr =0;
        axios.get("http://localhost:3001/password")
        .then(res=>this.setState({passwords:res.data}));
    }
    render() {
        return (
            <div>
{            (this.props.logged)?<div>                
                <div className="pageTitle">
                    View Password page
                </div>
                <div className="displayPasswords">
                    <table>
                        <thead>
                            <th>Name</th>
                            <th>Url</th>
                            <th>User Name</th>
                            <th>Password</th>
                            <th>Type</th>
                        </thead>
                        <tbody>
                            {
                                 
                                this.state.passwords.map(password=>{
                                    ctr++;
                                    var style ="";
                                    if(ctr%2 === 0)
                                    {
                                        style = "trTypeA";
                                    }
                                    else
                                    {
                                        style = "trTypeB";
                                    }
                                    return <tr className={style} key={password.id}>
                                        <td>{password.name}</td>
                                        <td>{password.url}</td>
                                        <td>{password.userName}</td>
                                        <td><input type={this.state.showPassword?"password":"text"} value={password.password} readonly /></td>
                                        <td>{password.type}</td>
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