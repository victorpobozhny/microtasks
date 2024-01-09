import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {
    NavLink,
    Navigate,
    Route,
    Routes
} from "react-router-dom";
import {Error404} from "./components/pages/Error404";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {s} from './components/pages/_styles'


//объект с путями
const PATH = {
    PAGE1: '/page1',
    PAGE2: '/page2',
    PAGE3: '/page3',
    ERROR: '/error404'
} as const


function App() {
    return (
        <div>
            <s.Header><h1>HEADER</h1></s.Header>
            <s.Body>
                <s.Nav>
                    Здесь будет навигация
                    {/*<div ><NavLink to={'/page1'} className={styles.navLink}>Page1</NavLink></div>*/}
                    {/*<div ><NavLink to={'/page2'} className={styles.navLink}>Page2</NavLink></div>*/}
                    {/*<div ><NavLink to={'/page3'} className={styles.navLink}>Page3</NavLink></div>*/}
                    {/*    стилизация через styled-components*/}
                    <s.NavWrapper ><NavLink to={PATH.PAGE1} className={styles.navLink}>Page1</NavLink></s.NavWrapper>
                    <s.NavWrapper ><NavLink to={PATH.PAGE2} className={styles.navLink}>Page2</NavLink></s.NavWrapper>
                    <s.NavWrapper ><NavLink to={PATH.PAGE3} className={styles.navLink}>Page3</NavLink></s.NavWrapper>
                </s.Nav>
                <s.Content>
                    <Routes>

                        <Route path="/" element={< Navigate to={PATH.PAGE1}/>}/>


                        <Route path={PATH.PAGE1} element={<PageOne/>}/>
                        <Route path={PATH.PAGE2} element={<PageTwo/>}/>
                        <Route path={PATH.PAGE3} element={<PageThree/>}/>

                        <Route path={'*'} element={<Error404/>}/>
                        <Route path='*' element={<Navigate to={PATH.ERROR}/>}/>

                        {/*<Route path={PATH.ERROR} element={<Error404/>}/>*/}
                        {/*<Route path='*' element={<Navigate to={PATH.ERROR}/>}/>*/}
                    </Routes>

                </s.Content>
            </s.Body>
            <s.Footer>abibas 2023</s.Footer>
        </div>
    );
}

export default App;

