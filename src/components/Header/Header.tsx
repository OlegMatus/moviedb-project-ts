import React, {FC, PropsWithChildren} from 'react';
import {NavLink} from "react-router-dom";

import css from "./Header.module.css"
import {UserInfo} from "../UserContainer";
import {useThemeContext} from "../../hooks";
import {alpha, styled, Switch} from "@mui/material";


    const SwitchTheme = styled(Switch)(({theme}) => ({
        '& .MuiSwitch-switchBase.Mui-checked': {
            color: '#303F9F',
            '&:hover': {
                backgroundColor: alpha('#E2EAF4', theme.palette.action.hoverOpacity),
            },
        },
    }));
    const label = {inputProps: {'aria-label': 'Color switch demo'}};

interface IProps extends PropsWithChildren {

}

const Header: FC<IProps> = () => {
    const {theme, switchTheme} = useThemeContext();
    // const theme = useTheme();


    return (

        <div className={css.Main}>
            <div className={css.Header}>
                <NavLink to={'movies'}>MOVIES</NavLink>
                <NavLink to={'genres'}>GENRES</NavLink>
                <NavLink to={'searchMovie'}>SEARCH</NavLink>
            </div>
            <div className={css.Switch}>
                <UserInfo/>
                <SwitchTheme {...label} checked={theme === 'dark'} onChange={switchTheme}/>
            </div>
        </div>
    );
};

export {Header};