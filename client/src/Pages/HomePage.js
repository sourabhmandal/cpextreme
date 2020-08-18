import React, {Component} from 'react';
import { Container, CardGroup } from 'reactstrap';
import Introcard from '../components/Introcard.js';
import Titlebar  from '../components/Titlebar.js';
import CardHome from '../components/CardHome';

class Homepage extends Component {
    render() {
      return (
        <>
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
        </>
      );
    }
}

export default Homepage;