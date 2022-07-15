import { DataAction, DataConsts } from "../../types/dataTypes"

export const addData = (payload: any[]):DataAction => ({type: DataConsts.ADD_DATA, payload})
export const changeStep = (payload: number):DataAction => ({type: DataConsts.CHANGE_STEP, payload})
export const changeSort = (payload: string):DataAction => ({type: DataConsts.CHANGE_SORT, payload})
export const turnPage = (payload: number):DataAction => ({type: DataConsts.TURN_PAGE, payload})
export const changeSearch = (payload: string):DataAction => ({type: DataConsts.CHANGE_SEARCH, payload})

