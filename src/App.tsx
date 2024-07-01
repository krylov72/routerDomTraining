import React, { useState } from 'react';
import styles from "./components/Site.module.css";
import { PageOne } from './components/pages/Adidas';
import { PageTwo } from './components/pages/Puma';
import { PageThree } from './components/pages/Abibas';
import { Navigate, Route, Routes } from 'react-router-dom';
import { Error404 } from './components/pages/Error404';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import {s} from './components/pages/_styles'
import { Model } from './components/pages/Model';

export const PATH = {
    PAGE1: 'adidas',
    PAGE2: 'puma',
    PAGE3: 'abibas',
    PATH_ERROR:'error404',
    PATH_MODEL: 'adidas/:id'
}
function App() {
   
const classNameA = (isActive:any) => {
    return isActive ? styles.activeNavLink : styles.navLink
                             
}
    
    return (
        <div>
            <s.Header><h1>SHOES</h1></s.Header>
            <s.Body>
                <s.Nav>
                    <s.NavWrapper>
                        <NavLink
                            to={PATH.PAGE1}
                        >
                            ADIDAS
                        </NavLink>
                    </s.NavWrapper>
                    <s.NavWrapper>
                        <NavLink
                            to={PATH.PAGE2}
                        >
                            PUMA
                        </NavLink>
                    </s.NavWrapper>
                    <s.NavWrapper>
                        <NavLink
                            to={PATH.PAGE3}
                        >
                            ABIBAS
                        </NavLink>
                        
                    </s.NavWrapper>
                </s.Nav>
                <s.Content>
                    <Routes>
                        <Route path='/' element={<Navigate to={'/page1'} />} />
                        <Route path={PATH.PAGE1} element={<PageOne />} />
                        <Route path={PATH.PAGE2}  element={<PageTwo />} />
                        <Route path={PATH.PAGE3}  element={<PageThree />} />
                        <Route path={PATH.PATH_ERROR} element={<Error404 />} />
                        {/* <Route path={PATH.PATH_MODEL} element={<Model/>}/> */}
                        <Route path={PATH.PATH_MODEL} element={<Model />} />
                        <Route path='*' element={<Error404/>} />
                    </Routes>

                </s.Content>
            </s.Body>
            <s.Footer>abibas 2023</s.Footer>

        </div>
    );
}



export default App;
