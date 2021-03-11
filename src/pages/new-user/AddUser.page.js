import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AddForm } from '../../components/userform/AddForm.comp';

const initialFrmDt = {
  subject : '',
  issueDate: '',
  detail: '',
  number: '',
  course:'',
  location: ''
};

export const AddUser = () => {

  const [frmData, setFrmData] = useState(initialFrmDt);   //setFrmData = variable frmData = function

  useEffect(() => {}, [frmData]); //handles updating the component of the changed value of frmData

    const handleOnChange = e =>{
      const {name,value} = e.target; //name is subject(AddForm) value is what we type

  setFrmData({          //state
    ...frmData,
    [name]: value,
  })

      console.log(name,value);
    };

    const handleOnSubmit = e =>{
      e.preventDefault();
    console.log('request received', frmData);

  }

    return (
      <div className= "add-user" >
      <Container >
        <Row>
          <Col>
            <AddForm
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
            frmDt = {frmData}/>                             {/* handleOnChange is passed as a prop*/}
          </Col>
        </Row>

      </Container>
      </div>
    )
};
