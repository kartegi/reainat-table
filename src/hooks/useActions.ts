import { useDispatch } from "react-redux"
import { bindActionCreators } from "redux"
import * as DataActionCreators from "../redux/actions/dataActions"

export const useActions = () => {
    const dispatch = useDispatch()
    return bindActionCreators(DataActionCreators, dispatch)
}