import {createStore} from 'redux'
import { rootReducer } from '../reducers/intex'

export const store = createStore(rootReducer)