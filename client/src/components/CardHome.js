import React, { Component } from 'react';
import { Card, CardTitle, CardText, CardHeader, CardBody } from 'reactstrap';

class CardHome extends Component {
  render(){
    return (
        <Card inverse style={{ backgroundColor: '#49495f', borderColor: '#8382df', margin:"1em"}}>
            <CardHeader style={{ backgroundColor: '#8382df'}}>Header</CardHeader>
            <CardBody>
                <CardTitle>Special Title Treatment</CardTitle>
                <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                <ul style={{ listStyleType: 'none'}}>
                    <li>1</li>
                    <li>2</li>
                    <li>3</li>
                    <li>4</li>
                </ul>
            </CardBody>
        </Card>
    );
  }
}

export default CardHome;