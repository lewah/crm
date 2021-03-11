import React from 'react';
import { Jumbotron, Form, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types';
import './addform.style.css';

export const AddForm = ({handleOnSubmit, handleOnChange, frmDt, frmDataErro }) => {

console.log(frmDt)

  return (
  <Jumbotron className = '  add-form mt-3 bg-light '>
      <h1 className = 'text-center' >Add Parent Details</h1>

    <Form autoComplete='off' onSubmit = {handleOnSubmit}   >
        <Form.Group as={Row}>
            <Form.Label column sm = {3}> Parents Name: </Form.Label>
          <Col sm= {9}>
            <Form.Control
            name = 'subject'
            value = {frmDt.subject}
            // minLength = '3' //forces you to have a val more than 3 char
            // maxLength = ''  // opp of minLength
            onChange = {handleOnChange}
            placeholder = 'Name'
            required
            />
            <Form.Text>
            {frmDataErro.subject && "subject required"}
            </Form.Text>

            </Col>
        </Form.Group>

        <Form.Group as={Row}>
              <Form.Label column sm = {3} > Email Address:</Form.Label>
            <Col sm= {9}>
              <Form.Control
              type='email'
              name = 'email'
              value = {frmDt.email}
              onChange = {handleOnChange}
              placeholder = 'Enter Email'
              required
              />
              </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Form.Label column sm = {3} > Phone Number: </Form.Label>
          <Col sm= {9}>
            <Form.Control
            name = 'number'
            value = {frmDt.number}
            onChange = {handleOnChange}
            placeholder = '07XXXXXXXX'
            required
            />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Form.Label column sm = {3}> Paying for: </Form.Label>
          <Col sm= {9}>
          <Form.Control
            name = 'course'
            value = {frmDt.course}
            onChange = {handleOnChange}
            placeholder = 'Android, Digital Marketing,Python'
            required
            />
            </Col>
        </Form.Group>

        <Form.Group as={Row}>
            <Form.Label column sm = {3}> Location: </Form.Label>
          <Col sm= {9}>
           <Form.Control
            name = 'location'
            value = {frmDt.location}
            onChange = {handleOnChange}

            />
            </Col>
        </Form.Group>

            <Form.Group as={Row}>
            <Form.Label  column sm = {3} > Date: </Form.Label>
            <Col sm = {9}>
              <Form.Control
              type='date'
              name = 'issueDate'
              value = {frmDt.issueDate}
              onChange = {handleOnChange}
              required
              />
            </Col>
        </Form.Group>

        <Form.Group as={Row} >
            <Form.Label column sm = {3} > Remarks: </Form.Label>
          <Col sm = {9}>
            <Form.Control
            as='textarea'
            name = 'detail'
            value = {frmDt.detail}
            rows = '3'
            onChange = {handleOnChange}

            />
            </Col>
        </Form.Group>
    </Form>
          <Button type="submit" variant="dark">ADD</Button>

  </Jumbotron>
  )
};

AddForm.propTypes = { //using propTypes to check static datatype
  handleOnSubmit: PropTypes.func.isRequired,  //prop value
  handleOnChange: PropTypes.func.isRequired,       // "
  frmDt: PropTypes.object.isRequired ,               // "
  frmDataErro:PropTypes.object.isRequired ,
}
