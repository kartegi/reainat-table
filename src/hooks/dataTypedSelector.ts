import { TypedUseSelectorHook, useSelector } from "react-redux";
import { RootState } from "../redux/reducers/intex";

export const dataTypedSelector:TypedUseSelectorHook<RootState> = useSelector