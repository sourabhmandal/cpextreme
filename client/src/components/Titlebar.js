import React, { Component } from 'react';
import { Card, CardHeader } from 'reactstrap';

class Titlebar extends Component {
  render(){
    return (
        <div>
            <Card inverse style={{ backgroundColor: '#ffffff', borderColor: '#8382df', marginLeft:"1em", marginRight:"1em"}}>
                <CardHeader style={{ backgroundColor: '#8382df'}}>Blog</CardHeader>
            </Card>
        </div>
    );
  }
}

export default Titlebar;