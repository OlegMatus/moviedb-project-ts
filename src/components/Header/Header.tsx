import React from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {UserInfo} from "../UserContainer";

const Header = () => {

    return (
        <div className={css.Main}>
            <div className={css.Header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
                <NavLink to={'searchMovie'}>SEARCH</NavLink>
            </div>
            <div className={css.Switch}>
                <UserInfo/>
            </div>
        </div>
    );
};

export {Header};