import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  Button

} from 'react-bootstrap';

export const PasswordReset = ({ handleOnChange, handleOnResetSubmit,formSwitcher, email }) => { // here we are destructuring the props




return(
  <Container>
      <Row>
          <Col>
                <h1 className = 'text-info text-center'> User Login</h1>
              <hr/>
              <Form autoComplete='off' onSubmit = {handleOnResetSubmit}>
                    <Form.Group>
                        <Form.Label> Email </Form.Label>
                        <Form.Control
                        type='email'
                        name = 'email'
                        value = {email}
                        onChange = {handleOnChange}

                        placeholder = 'Enter Email'
                        required
                        />

                    </Form.Group>
                    <Button type="submit">Reset password</Button>
                    </Form>
                  <hr />
                </Col>
              </Row>
              <Row>
              <Col>
              <a href = '#!' onClick ={ () => formSwitcher('login')} > Login </a>  //returns us back to user login
              </Col>
              </Row>
  </Container>
  );
};
// makes sure the props come in the rightway
PasswordReset.ProtoTypes = {
  handleOnChange: ProtoTypes.func.isRequired,
  handleOnResetSubmit: ProtoTypes.func.isRequired,
  formSwitcher: ProtoTypes.func.isRequired,
  email: ProtoTypes.string.isRequired,
};
