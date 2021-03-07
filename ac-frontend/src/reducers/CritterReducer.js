import { combineReducers } from "redux"
import FishReducer from './FishReducer'
import BugReducer from './BugReducer'
import SeaCritterReducer from './SeaCritterReducer'
import VillagerReducer from './VillagerReducer'
import DesignReducer from './DesignReducer'

const CritterReducer = combineReducers({ fish: FishReducer,
                                         bugs: BugReducer,
                                         seaCritters: SeaCritterReducer,
                                         villagers: VillagerReducer,
                                         designs: DesignReducer})

export default CritterReducer