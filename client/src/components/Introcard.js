import React, { Component } from 'react';
import { Card, CardText, CardHeader, CardBody, CardGroup } from 'reactstrap';

class Introcard extends Component {
  render(){
    return (
        <div>
            <CardGroup>
                <Card inverse style={{ backgroundColor: '#ffffff', borderColor: '#8382df', marginTop:"1em", textAlign:"center"}}>
                    <CardHeader style={{ backgroundColor: '#8382df', textAlign:"center"}}>About Me</CardHeader>
                    <CardBody style={{margin:"0px"}}>
                        <CardText style={{textAlign:"center"}}>

                        <div class="LI-profile-badge"  data-version="v1" data-size="medium" data-locale="en_US" data-type="vertical" data-theme="light" data-vanity="sourabh-mandal-ait"><a class="LI-simple-link" href='https://in.linkedin.com/in/sourabh-mandal-ait?trk=profile-badge'>Sourabh Mandal</a></div>
                            <br/>
                                <a href="http://github.com/sourabhmandal">Github</a>
                            <hr/>
                                <a href="https://docs.google.com/document/d/1qZ9BHvvfF00o16wRtF2V4OoRU85OkRGU6pdLD_omDZ8/edit?usp=sharing">Resume</a>
                            <hr/>
                                <a href="https://sourabhmandal.github.io/">Blog</a>
                                                    
                        </CardText>
                    </CardBody>
                </Card>
            </CardGroup>
        </div>
    );
  }
}

export default Introcard;