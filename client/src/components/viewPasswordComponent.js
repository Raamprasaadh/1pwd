import React, { Component } from 'react';
import axios from 'axios';

export default class viewPasswordComponent extends Component {
    constructor(props){
        super(props);

        this.state ={
            passwords:[]
        }
    }
    componentDidMount(){
        axios.get("http://localhost:3001/password")
        .then(res=>this.setState({passwords:res.data}));
    }
    render() {
        return (
            <div>
                <div className="pageTitle">
                    View Password page
                </div>
                <div className="displayPasswords">
                    <table>
                        <thead>
                            <td>Name</td>
                            <td>Url</td>
                            <td>User Name</td>
                            <td>Password</td>
                            <td>Type</td>
                        </thead>
                        <tbody>
                            {
                                this.state.passwords.map(password=>{
                                    return <tr>
                                        <td>{password.name}</td>
                                        <td>{password.url}</td>
                                        <td>{password.userName}</td>
                                        <td>{password.password}</td>
                                        <td>{password.type}</td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
