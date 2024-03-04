import React, {createContext, FC, PropsWithChildren, useEffect, useState} from 'react';

export type ThemeType = 'light' | 'dark';

interface IProps extends PropsWithChildren {
}

export interface ThemeContextProps {
    theme: ThemeType;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

const ContextThemeProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState<ThemeType>(
        () => (localStorage.getItem('theme') as ThemeType) || 'light');

    useEffect(() => {
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <div>
            <ThemeContext.Provider value={{theme, toggleTheme}}>
                {children}
            </ThemeContext.Provider>
        </div>
    );
}

export {
    ContextThemeProvider,
    ThemeContext
};

