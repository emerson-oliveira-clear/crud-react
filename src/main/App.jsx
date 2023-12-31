
import 'font-awesome/css/font-awesome.min.css'
import "bootstrap/dist/css/bootstrap.min.css"

//---------------------------

import "./App.css"
import React from "react"

//---------------------------

import Logo from "../components/template/Logo"
import Nav from "../components/template/Nav"
import Routes from './Routes'
import Footer from "../components/template/Footer"

//---------------------------

import {BrowserRouter} from 'react-router-dom'

//---------------------------


export default props =>

    <BrowserRouter>

<div className="app">

        <Logo></Logo>

        <Nav></Nav>

        <Routes></Routes>

        <Footer></Footer>


    </div>



    </BrowserRouter>

    

