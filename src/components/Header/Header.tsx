import * as React from 'react';
import {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import Switch from '@mui/material/Switch';

import css from "./Header.module.css"
import {UserInfo} from "../UserContainer";
import {useThemeContext} from "../../hooks";

interface IProps extends PropsWithChildren {
    toggleTheme: () => void
}

const Header: FC<IProps> = ({toggleTheme}) => {
    const {theme} = useThemeContext();

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log('Current Theme:', theme);
        toggleTheme()
    };

    return (
        <div className={css.Main}>
            <div className={css.Header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
                <NavLink to={'searchMovie'}>SEARCH</NavLink>
            </div>
            <div className={css.Switch}>
                <UserInfo/>
                <Switch
                    checked={theme === 'dark'}
                    onChange={handleChange}
                    inputProps={{'aria-label': 'controlled'}}
                />
            </div>
        </div>
    );
};

export {
    Header
};