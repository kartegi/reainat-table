export enum DataConsts {
    ADD_DATA = "ADD_DATA",
    CHANGE_STEP = "CHANGE_STEP",
    CHANGE_SORT = "CHANGE_SORT",
    TURN_PAGE = "TURN_PAGE",
}

export interface DataState {
    data: any[],
    step: number,
    sort: string,
    page: number
}

export interface AddData {
    type: DataConsts.ADD_DATA,
    payload: any[]
}

export interface ChangeStep {
    type: DataConsts.CHANGE_STEP,
    payload: number
}

export interface ChangeSort {
    type: DataConsts.CHANGE_SORT,
    payload: string
}

export interface TurnPage {
    type: DataConsts.TURN_PAGE,
    payload: number
}

export type DataAction = AddData | ChangeStep | ChangeSort | TurnPage
