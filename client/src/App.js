import './App.css';

import Navbar from './components/navBarComponent';
import AddPassword from './components/addPasswordComponent';
import ViewPassword from './components/viewPasswordComponent';
import Login from './components/loginComponent';
import Signin from './components/signinComponent';


import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {
  return (

    <Router>
      <div className="App">
      <Navbar />
      <Switch>
        <Route path="/viewpwd" component={ViewPassword}></Route>
        <Route path="/addpwd" component={AddPassword}></Route>
        <Route path="/login" component={Login}></Route>
        <Route path="/signin" component={Signin}></Route>

      </Switch>
        </div>

      </Router >
  );
}

export default App;
