import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {Adidas} from "./components/pages/Adidas";
import {Puma} from "./components/pages/Puma";
import {Abibas} from "./components/pages/Abibas";
import {Navigate, NavLink, Outlet, Route, Routes, useNavigate} from 'react-router-dom';
import {Error404} from "./components/pages/Error404";
import styled from 'styled-components';
import {S} from './components/pages/_styles'
import {Model} from "./components/pages/Model";
import {Prices} from "./components/pages/Prices";
import { PATH } from './router/Router';




function App() {
    const navigate = useNavigate()
    const navigateHandler = () => {
        navigate(-1)
    }
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <S.NavWrapper><NavLink to={PATH.ADIDAS}>Adidas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PUMA}>Puma</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.ABIBAS}>Abibas</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PRICES}>Цены для оптовиков</NavLink></S.NavWrapper>
                    <S.NavWrapper><NavLink to={PATH.PROTECTED_PAGE}>Админ панель</NavLink></S.NavWrapper>
                </div>
                <div className={styles.content}>
                    <div className={styles.HorizontalNavigation}>
                        <a className={styles.LinkLikeButton} href={PATH.ADIDAS}>GO TO MAIN</a>
                        <button className={styles.ButtonLikeLink} onClick={navigateHandler}>Назад</button>
                    </div>  
                    <Outlet />

                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}

export default App;



