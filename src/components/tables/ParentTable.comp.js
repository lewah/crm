import React from 'react';
import { Table } from "react-bootstrap";
import PropTypes from 'prop-types';
// import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";

export const ParentTable = ({list}) => {

  // const { searchTicketList, isLoading, error } = useSelector(
  //     (state) => state.tickets
  //   );
  //   if (isLoading) return <h3>Loading ...</h3>;
  //   if (error) return <h3>{error}</h3>;

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
                {
                  list.length ? (
                    list.map ((row) =>   //fetching data from json file   //looping element   // handles assigning each child with a unique 'key' prop in the list
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
                  ))
                ):(
                  <tr>
                    <td colSpan="4" className="text-center">
                    No ticket show{" "}
                  </td>
                </tr>
              )}


          </tbody>


  </Table>
  );
};
// export default  ParentTable.comp;
ParentTable.propTypes = {
  list: PropTypes.array.isRequired
};
