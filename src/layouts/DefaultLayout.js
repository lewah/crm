import React from "react";
// import {Navbar, Nav} from 'react-bootstrap';
import {Header} from "../layouts/partials/Header.comp";
import Dashboard from '../pages/dashboard/Dashboard.page';
import {Footer} from "../layouts/partials/Footer.comp";


export const  DefaultLayout = ({children}) => {
    return (
      <div className='default-layout'>
        <header className='header'>
        <Header />
        </header>

        <main className='main'> {children} </main>

        <footer className='footer'>
        <Footer />
        </footer>

      </div>
   )
 };
