import {Dispatch, SetStateAction} from "react";

type ISetState<T> = Dispatch<SetStateAction<T>>;
type IStateResult<T> = [T, ISetState<T>];

export type {
    ISetState,
    IStateResult
}