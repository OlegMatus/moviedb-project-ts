import {useState} from "react";

import {IStateResult} from "../types";


const useAppState = <T>(initialState: T): IStateResult<T> => useState<T>(initialState);

export {
    useAppState
}