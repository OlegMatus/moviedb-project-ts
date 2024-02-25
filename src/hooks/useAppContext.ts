import {useContext} from "react";

import {Context} from "../hoc/ContextProvider";
import {IAppContext} from "../interfaces/myContextInterface";

const useAppContext = (): IAppContext => useContext<IAppContext>(Context);

export {
    useAppContext
}