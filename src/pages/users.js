import React from 'react';
import Table from 'react-bootstrap/Table';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import FormControl from 'react-bootstrap/FormControl';

import './styles.scss';

function Users() {
  return (
    <div className='content'>
        <h1>Climbers</h1>
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-lg-4"/>
            <Button variant="outline-dark">Add new climber</Button>
        </Form>
        <hr/>

        <div className="table">
            <Table striped bordered hover responsive size='sm'>
                <thead>
                    <tr>
                    <th>#</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Email</th>
                    <th>Date added</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                    <td>1</td>
                    <td>Mark</td>
                    <td>Otto</td>
                    <td>@mdo</td>
                    <td>May 21, 2020</td>
                    </tr>
                    <tr>
                    <td>2</td>
                    <td>Jacob</td>
                    <td>Thornton</td>
                    <td>@fat</td>
                    <td>May 21, 2020</td>
                    </tr>
                    <tr>
                    <td>3</td>
                    <td>Larry</td> 
                    <td>the Bird</td>
                    <td>@twitter</td>
                    <td>May 21, 2020</td>
                    </tr>
                </tbody>
            </Table>
        </div>
    </div> 
  );
}

export default Users;