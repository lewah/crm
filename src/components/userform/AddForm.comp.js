import React from 'react';
import { Jumbotron, Form, Button} from 'react-bootstrap';
import { Container, Row, Col } from 'react-bootstrap';
import PropTypes from 'prop-types'

export const AddForm = ({handleOnSubmit, handleOnChange, frmDt }) => {

console.log(frmDt)

  return (
  <Jumbotron>
  <Form autoComplete='off' onSubmit = {handleOnSubmit}  >
        <Form.Group >
            <Form.Label column sm = {3}> Parents Name: </Form.Label>
          <Col sm= {9}>
            <Form.Control
            name = 'subject'
            value = {frmDt.subject}
            onChange = {handleOnChange}
            required
            />
            </Col>
        </Form.Group>

        <Form.Group>
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

        <Form.Group>
            <Form.Label column sm = {3} > Phone Number: </Form.Label>
          <Col sm= {9}>
            <Form.Control
            name = 'number'
            value = {frmDt.number}
            onChange = {handleOnChange}
            required
            />
            </Col>
        </Form.Group>

        <Form.Group>
            <Form.Label column sm = {3}> Course paying for: </Form.Label>
          <Col sm= {9}>
          <Form.Control
            name = 'course'
            value = {frmDt.course}
            onChange = {handleOnChange}
            required
            />
            </Col>
        </Form.Group>

        <Form.Group>
            <Form.Label column sm = {3}> Location: </Form.Label>
          <Col sm= {9}>
           <Form.Control
            name = 'location'
            value = {frmDt.location}
            onChange = {handleOnChange}
            required
            />
            </Col>
        </Form.Group>

            <Form.Group>
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

        <Form.Group>
            <Form.Label column sm = {3} > Remarks: </Form.Label>
          <Col sm = {9}>
            <Form.Control
            as='textarea'
            name = 'detail'
            value = {frmDt.detail}
            rows = '3'
            onChange = {handleOnChange}
            required
            />
            </Col>
        </Form.Group>
</Form>
        <Button type="submit" variant="dark">ADD</Button>

  </Jumbotron>
  )
};

AddForm.propTypes = { //using propTypes to check static datatype
  handleOnSubmit: PropTypes.func.isRequired,
  handleOnChange: PropTypes.func.isRequired,
  frmDt: PropTypes.object.isRequired
}
