import React, { Component } from 'react';
import axios from 'axios';

export default class addPasswordComponent extends Component {
    constructor(props)
        {
            super(props);

            this.state={
             name:"",
             url:"",
             userName:"",
             pwd:"",
             type:"",
             types:[]
            }
            this.onChangeName = this.onChangeName.bind(this);
            this.onChangeUrl = this.onChangeUrl.bind(this);
            this.onChangeuserName = this.onChangeuserName.bind(this);
            this.onChangePwd = this.onChangePwd.bind(this);
            this.onChangeType = this.onChangeType.bind(this);
            this.onSubmit = this.onSubmit.bind(this);
}

onChangeName(e){
this.setState({
    name:e.target.value
});
}
onChangePwd(e){
this.setState({pwd:e.target.value});
}
onChangeType(e){
this.setState({type:e.target.value});
}
onChangeUrl(e){
this.setState({url:e.target.value});
}
onChangeuserName(e){
this.setState({userName:e.target.value});
}
onSubmit(e){
e.preventDefault();
    const password = {
    name: this.state.name,
    url: this.state.url,
    userName:this.state.userName,
    pwd:this.state.pwd,
    type:this.state.type
}

axios.post('http://localhost:3001/password/add',password)
.then(res=>console.log(res.data))
.catch(err=>console.error(err));
}

componentDidMount(){
            axios.get('http://localhost:3001/type')
            .then(res=>{
                if(res.data.length >0)
                {
                this.setState({
                    types: res.data.map(type=>type.name)
                });
            }
            })
}

    render() {
               return (
            <div>
                <div className="pageTitle">
                    Add Password page
                </div>
                <form onSubmit={this.onSubmit}>
                <div className="formGroup">
                    <div className="formLabel">
                        <label>Name :</label>
                    </div>
                    <div >
                        <input required className="formInput" type="text" onChange = {this.onChangeName}placeholder="eg. office mail" />
                    </div>
                    </div>
                    <div className="formGroup">
                    <div className="formLabel">
                        <label>Url :</label>
                    </div>
                    <div >
                        <input required className="formInput" type="text" onChange = {this.onChangeUrl} placeholder="eg. www.gmail.com" />
                    </div>
                   </div>
                   <div className="formGroup">
                    <div className="formLabel">
                        <label>Username :</label>
                    </div>
                    <div >
                        <input required className="formInput" type="text" onChange={this.onChangeuserName} placeholder="eg. example@gmail.com" />
                    </div>
                </div>
                   <div className="formGroup">
                    <div className="formLabel">
                        <label>Password :</label>
                    </div>
                    <div >
                        <input required  className="formInput" type="password" onChange={this.onChangePwd}  />
                    </div>
                </div>
                <div className="formGroup">
                    <div className="formLabel">
                        <label>Type :</label>
                    </div>
                    <div >
                        <select required className="formInput" onChange={this.onChangeType} >
                            <option>select</option>
                            {
                                this.state.types.map(type=>{
                                    return <option key={type}
                                    value={type}>{type}</option>
                                })
                            }
                        </select>
                    </div>
                </div>
                <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
