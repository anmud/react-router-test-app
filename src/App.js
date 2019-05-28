import React from 'react';
import './App.css';
import {Route, Link, BrowserRouter as Router, Switch, Redirect} from 'react-router-dom'
import Home from './components/Home';
import Hello from './components/Hello'
import About from './components/About';
import Books from './components/books/Books';

/** Layouts **/ 
import LoginLayoutRoute from './layouts/LoginLayout'
import DashboardLayoutRoute from './layouts/DashboardLayout'

/** Components **/ 
import UserPage from './layouts/components/UserPage'
import LoginPage from './layouts/components/LoginPage'



 const App = () => {

  return (
    <div className="App">
   

<Router>
    <div>
        <ul>
            <li>
                <Link to="/hello">Hello</Link>
            </li>
            <li>
                <Link to="/about">About</Link>
            </li>
            <li>
                <Link to="/books">Books</Link>
            </li>
        </ul>
<Switch>
<Route path="/home" component={Home}/>
<Route path="/hello" component={Hello}/>
<Route path="/about" component={About}/>
<Route path="/books" component={Books}/>



<Route exact path="/">
    <Redirect to="/layout1"/>
</Route>
<LoginLayoutRoute path="/layout1" component={LoginPage}/>
<DashboardLayoutRoute path="/layout2" component={UserPage}/>
</Switch>

    </div>
</Router>


    </div>
  );
}

export default App;
