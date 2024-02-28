import {useContext} from "react";
import {Context, ContextState} from "../hoc";
import {IContextProps} from "../interfaces";

const useAppContext = (): IContextProps => {

    const context = useContext(Context);
    if (!context) {
        throw new Error('useAppContext must be used within a YourHigherOrderComponent');
    }

    return context;
};

const useStateContext = () => {
    const context = useContext(ContextState);
    if (!context) {
        throw new Error('useAppContext must be used within a YourHigherOrderComponent');
    }

    return context;
}
export {
    useAppContext,
    useStateContext
}