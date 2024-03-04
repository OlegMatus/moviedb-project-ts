import React from 'react';
import {Outlet} from "react-router-dom";

import {Header} from "../components";
import {ThemeContextProps} from "../hoc/ContextThemeProvider";
import {useThemeContext} from "../hooks";
import css from "./MainLayout.module.css"

const MainLayout = () => {
    const {theme, toggleTheme}: ThemeContextProps = useThemeContext();

    return (
        <div className={theme === 'light' ? css.lightMode : css.darkMode}>
            <div className={css.Main}>
                <Header toggleTheme={toggleTheme}/>
                <Outlet/>
            </div>
        </div>
    );
};

export {MainLayout};