import React, {useState, useEffect} from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { AddForm } from '../../components/userform/AddForm.comp';
import {shortText} from '../../utilities/validation';

const initialFrmDt = {
  subject : '',
  issueDate: '',
  detail: '',
  number: '',
  course:'',
  location: ''
};

const initialFrmError = {
  subject : false,
  issueDate: false,
  detail: false,
  number: false,
  course:false,
  location: false,
};

export const AddUser = () => {

      const [frmData, setFrmData] = useState(initialFrmDt);   //setFrmData = variable frmData = function
      const [frmDataErro, setFrmDataErro] = useState(initialFrmError);

      useEffect(() => {}, [frmData, frmDataErro]); //handles updating the component of the changed value of frmData

        const handleOnChange = e =>{
              const {name,value} = e.target; //name is subject(AddForm) value is what we type

                setFrmData({          //state
                  ...frmData,
                  [name]: value,
                })

              console.log(name,value);
        };

        const handleOnSubmit = async (e) =>{
              e.preventDefault();

              setFrmDataErro(initialFrmError)

              const isSubjectValid = await shortText(frmData.subject);
              setFrmDataErro({
                ...initialFrmError,
                subject: !isSubjectValid,
              });

      };

        return (
          <div className= "add-user" >
          <Container >
            <Row>
              <Col>
              {/* handleOnChange,handleOnSubmit,frmDt, frmDataErro are passed as a prop*/}
                <AddForm
                handleOnChange={handleOnChange}
                handleOnSubmit={handleOnSubmit}
                frmDt = {frmData}
                frmDataErro = {frmDataErro}
                />
              </Col>
            </Row>

          </Container>
          </div>
        )
};
