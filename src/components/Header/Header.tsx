import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"

const Header = () => {

    return (
        <div className={css.Header}>
            <NavLink to={'movies'}/>
            <NavLink to={'genres'}/>
            <NavLink to={'searchMovie'}/>
        </div>
    );
};

export {Header};