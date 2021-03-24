import React,{useState, useEffect}from 'react';
import {Container, Row,Col, Button} from 'react-bootstrap';
import { SearchForm } from '../../components/searchform/SearchForm.comp';
import {ParentTable } from '../../components/tables/ParentTable.comp';
import { Breadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';

const list=require('../../assets/data/dummy-data.json').list

export const CrmList = () =>  {

  const [str, setStr] = useState('');
  const [displayList, setDisplayList,] = useState(list);
//  const [searchList, setSearchList] = useState('');

  useEffect(() => {}, [str,displayList]);

    const handleOnChange = (e) => {
        const {value} = e.target;
        console.log(value);
          setStr (value);
          searchList(value);
  };

// minute 22:38 for reference and 25:00
  const searchList = (str) => {
   const displayList = list.filter((row) =>
   {
   return row.name.toLowerCase().includes(str.toLowerCase())
   ||
          row.email.toLowerCase().includes(str.toLowerCase())

 } );

 setDisplayList(displayList);
 console.log(displayList);

 };

    return (
      <Container>
          <Row>
            <Col>
            <Breadcrumb page = 'Crm List' />
            </Col>
          </Row>
          <Row className = 'mt-4'>
            <Col>
            <Button variant = "dark"> Add New </Button>
            </Col>
            <Col className = 'text-right'>
              <SearchForm handleOnChange={handleOnChange} str={str}/>
            </Col>
          </Row>
          <hr />
          <Row>
            <Col>
            {/*importing dummy-data and displating it
              table component   */}
            <ParentTable list = {displayList} />
            </Col>
          </Row>

      </Container>
    );
  };
