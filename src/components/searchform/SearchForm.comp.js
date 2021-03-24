import React from 'react';
import {Form, Row, Col} from 'react-bootstrap';
import PropTypes from 'prop-types';

export const SearchForm = ({handleOnChange, str}) => {
  console.log(str);
  return (
    <div>
      <Form>
        <Form.Group as = {Row}>
            <Form.Label column sm = '2'>        {/*ms or sm*/}
               Search:
              </Form.Label>
            <Col sm = '6'>
              <Form.Control
                name = 'searchStr'
                placeholder = 'Search ...'
                onChange = {handleOnChange}
                defaultValue = {str}
                />
            </Col>
        </Form.Group>
      </Form>
  </div>
  );
};

SearchForm.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  str: PropTypes.string.isRequired
}
