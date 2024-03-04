import ReactDOM from 'react-dom/client';
import './index.css';
import {RouterProvider} from "react-router-dom";

import {router} from "./routing";
import {ContextProvider} from "./hoc";
import {ContextThemeProvider} from "./hoc/ContextThemeProvider";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
    <ContextThemeProvider>
        <ContextProvider>
            <RouterProvider router={router}/>
        </ContextProvider>
    </ContextThemeProvider>
);
