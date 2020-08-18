import React, { Component } from 'react';
import { Table, Container } from 'reactstrap';

class ContentTable extends Component {
  render(){
    return (
        <Container>
            <Table bordered hover size="sm" className="tableList">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Tags</th>
                        <th>Topic</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td>Larry</td>
                        <td>the Bird</td>
                    </tr>
                </tbody>
            </Table>
        </Container>
    );
  }
}

export default ContentTable;