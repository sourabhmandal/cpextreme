import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import TopNavbar from './components/Navbar';
import Footer from './components/Footer.js';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Homepage from './Pages/HomePage.js';
import TableListPage from './Pages/TableListPage.js';


class App extends Component {
  render() {
    return (
      <div className="App  p-0 m-0">
        <BrowserRouter>
          <TopNavbar/>
          <Switch>
            <Route path="/home" component={Homepage}/>
            <Route path="/table" component={TableListPage}/>
          </Switch>
          <Footer/>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
