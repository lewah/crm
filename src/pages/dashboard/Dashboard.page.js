import React from 'react';
import {Container, Row, Col, Button } from 'react-bootstrap';
import {ParentTable }from '../../components/tables/ParentTable.comp';
const list=require('../../assets/data/dummy-data.json').list

export const Dashboard = () => {
  return (
    <Container>
      <Row>
        <Col className="text-center mt-5 mb-2 ">
        <Button
        variant = "outline-primary" style = {{fontSize:"2rem", padding: "10px 30px"}}>
        Add New</Button>
        </Col>
      </Row>

      <Row>
      <Col className = "mt-2"> Reacently added Contacts </Col>
      </Row>
      <Row>
      <Col className = "recent-ticket">
      <ParentTable list = {list} />
      </Col>
      </Row>
    </Container>
  );
}
