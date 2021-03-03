import { combineReducers } from "redux"
import FishReducer from './FishReducer'
import BugReducer from './BugReducer'

const CritterReducer = combineReducers({ fish: FishReducer,
                                         bugs: BugReducer})

export default CritterReducer