import React from 'react';
import ReactDOM from "react-dom";
import './App.css';
import {DefaultLayout} from './layouts/DefaultLayout';
import {Dashboard} from './pages/dashboard/Dashboard.page';
import { Entry} from './pages/entry/Entry.page';
import { Button} from 'react-bootstrap';
import { AddUser } from './pages/new-user/AddUser.page'
import { AddForm } from './components/userform/AddForm.comp';
function App() {
  return (
 <div className="App">

<DefaultLayout>
{/*<Dashboard />*/}
 {/*<Entry />*/}
<AddUser />


</DefaultLayout>

 </div>

 );
}

export default App;
