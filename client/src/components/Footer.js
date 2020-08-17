import React, { Component } from 'react';
import { Table } from 'reactstrap';

class Footer extends Component {
    render(){
      return (
          <div className=" p-0 m-0">
            <hr className="mb-0"/>
            <h3 className="px-2 pt-2">HackerNautics</h3>
            <hr className="mt-0"/>
                <div  style={{margin:"1em 15em"}}>
                    <Table borderless size="sm">
                        <thead>
                            <tr>
                            <th><u>About</u></th>
                            <th><u>Contest</u></th>
                            <th><u>Contact</u></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td>Mark</td>
                            <td>Otto</td>
                            <td>@mdo</td>
                            </tr>
                            <tr>
                            <td>Jacob</td>
                            <td>Thornton</td>
                            <td>@fat</td>
                            </tr>
                            <tr> 
                            <td>Larry</td>
                            <td>the Bird</td>
                            <td>@twitter</td>
                            </tr>
                        </tbody>
                    </Table>
              </div>
          </div>
      );
    }
};

export default Footer;