import {useState} from "react";

import {ISetState, IStateResult} from "../types/setStateType";

const useAppState = <T>(): IStateResult<T> => {
    const [state, setState] = useState<T>(null);
    return [state, setState]
}

export {
    useAppState
}