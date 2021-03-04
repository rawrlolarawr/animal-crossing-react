import { combineReducers } from "redux"
import FishReducer from './FishReducer'
import BugReducer from './BugReducer'
import SeaCritterReducer from './SeaCritterReducer'
import VillagerReducer from './VillagerReducer'

const CritterReducer = combineReducers({ fish: FishReducer,
                                         bugs: BugReducer,
                                         seaCritters: SeaCritterReducer,
                                         villagers: VillagerReducer})

export default CritterReducer