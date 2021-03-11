import React from 'react';
import {Table} from 'react-bootstrap';

export const ParentTable = ({list}) => {
return  (

  <Table striped bordered hover>
    <thead>
      <tr>
        <th> ID</th>
        <th> Parents Name </th>
        <th> Email address </th>
        <th> Phone number </th>
        <th> Location</th>
        <th> Course paying for</th>
        <th> Deal owner</th>
        <th> Date</th>
      </tr>
    </thead>

    <tbody>
    {list.length && list.map ((row) =>   //fetching data from json file   //looping element   // handles assigning each child with a unique 'key' prop in the list
      ( <tr key = {row.id}>
          <td> {row.id}</td>
          <td> {row.name}</td>
          <td> {row.email}</td>
          <td> {row.number}</td>
          <td> {row.location}</td>
          <td> {row.payed}</td>
          <td> {row.owner}</td>
          <td>{row.date}</td>
        </tr>
      )
    )
  }

    </tbody>


  </Table>
);
}
export default  ParentTable.comp;
