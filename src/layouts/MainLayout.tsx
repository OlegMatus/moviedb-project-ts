import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from "./Main.module.css"

const MainLayout = () => {

    return (
        <div className={css.Main}>

            <Header/>
            <Outlet/>
        </div>
    );
};

export {MainLayout};