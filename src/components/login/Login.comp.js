import React from 'react';
import ProtoTypes from 'prop-types';
import {
  Container,
  Row,
  Col,
  Form,
  Button

} from 'react-bootstrap';

export const LoginForm = ({ handleOnChange,formSwitcher, handleOnSubmit, email, pass }) => { // here we are destructuring the props




return(
  <Container>
      <Row>
          <Col>
                <h1 className = 'text-info text-center'> User Login</h1>
              <hr/>
              <Form autoComplete='off' onSubmit = {handleOnSubmit}>
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

                  <Form.Group>
                        <Form.Label> Password </Form.Label>
                        <Form.Control
                        type='password'
                        name = 'password'
                        value = {pass}
                        onChange = {handleOnChange}
                        placeholder = 'password'
                        required
                        />
                  </Form.Group>
                    <Button type="submit">Login</Button>
                    </Form>
                  <hr />
                </Col>
              </Row>
              <Row>
              <Col>
              <a href = '#!'onClick ={ () => formSwitcher('reset')} > Forgot Password?</a>
              </Col>
              </Row>
  </Container>
  );
};
// makes sure the props come in the rightway
LoginForm.ProtoTypes = {
  handleOnChange: ProtoTypes.func.isRequired,
    handleOnSubmit: ProtoTypes.func.isRequired,
      formSwitcher: ProtoTypes.func.isRequired,
  email: ProtoTypes.string.isRequired,
  pass :ProtoTypes.string.isRequired,
};
