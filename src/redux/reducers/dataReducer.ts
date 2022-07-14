import { DataAction, DataConsts, DataState } from "../../types/dataTypes"
import data from '../../gererated.json'

const initState: DataState = {
    data: data,
    step: 10,
    sort: "",
    page: 0
}

export const dataReducer = (state:DataState = initState, {type, payload}: DataAction): DataState => {
    switch(type) {
        case DataConsts.ADD_DATA:
            return {...state, data: payload}
        case DataConsts.CHANGE_STEP:
            return {...state, step: payload}
        case DataConsts.CHANGE_SORT:
            return {...state, sort: payload}
        case DataConsts.TURN_PAGE:
            return {...state, page: payload}
        default:
            return state
    }
}