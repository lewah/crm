import React,{useState, useEffect}from 'react';
import {Container, Row,Col, Button} from 'react-bootstrap';
// import { PageBreadcrumb } from '../../components/breadcrumb/Breadcrumb.comp';
import { SearchForm } from '../../components/searchform/SearchForm.comp';
import {ParentTable } from '../../components/tables/ParentTable.comp';
const list=require('../../assets/data/dummy-data.json').list

export const CrmList = () =>  {

  const [str, setStr] = useState('');
  const [displayList, setDisplayList,] = useState(list);
  // const [searchList, setSearchList] = useState('');

  useEffect(() => {}, [str,displayList]);

    const handleOnChange = (e) => {
        const {value} = e.target;
          setStr (value);
          searchList(value);
  };

// minute 22:45 for reference
  const searchList = (sttr) => {
   const displayList = list.filter((row) =>
   row.subject.toLowerCase().includes(sttr.toLowerCase())
   // sttr.toLowerCase().includes(str)
 );

 setDisplayList(displayList);
 console.log(displayList);

 };

    return (
      <Container>
          <Row>
            <Col>
            {/*<PageBreadcrumb page = 'Crm List' /> */}
            </Col>
          </Row>
          <Row>
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
            <ParentTable list = {list} />
            </Col>
          </Row>

      </Container>
    );
  };
