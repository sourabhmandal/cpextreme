import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardHeader, CardBody } from 'reactstrap';
import {Link, NavLink} from 'react-router-dom';

class CardHome extends Component {
  links(){
    return "/about";
  }
  render(){
    return (
        <Card inverse style={{ backgroundColor: '#49495f', borderColor: '#8382df', margin:"1em"}}>
            <CardHeader style={{ backgroundColor: '#8382df'}}>Header</CardHeader>
            <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <ul style={{ listStyleType: 'none'}}>
                    <li><Link to={this.links()}>1</Link></li>
                    <li><Link to={this.links()}>2</Link></li>
                    <li><Link to={this.links()}>3</Link></li>
                    <li><Link to={this.links()}>4</Link></li>
                </ul>
            </CardBody>
        </Card>
    );
  }
}

export default CardHome;