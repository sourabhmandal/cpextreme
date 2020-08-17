import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CardHome from './components/CardHome';
import TopNavbar from './components/Navbar';
import Footer from './components/Footer.js';
import { Container, CardGroup } from 'reactstrap';
import Introcard from './components/Introcard.js'
import Titlebar  from './components/Titlebar.js'
class App extends Component {
  render() {
    return (
      <div className="App  p-0 m-0">
        <TopNavbar/>
        <Titlebar/>
        <Container fluid={true}>
          <div className="row">
            <div className="col-md-9">  
              <CardGroup>
                  <CardHome />
                  <CardHome />
              </CardGroup>

              <CardGroup>
                  <CardHome />
                  <CardHome />
              </CardGroup>
            </div>
            <div className="col-md-3">
              <Introcard />
            </div>
          </div>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
