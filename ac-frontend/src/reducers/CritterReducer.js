import { combineReducers } from "redux"
import FishReducer from './FishReducer'

const CritterReducer = combineReducers({ fish: FishReducer })

export default CritterReducer