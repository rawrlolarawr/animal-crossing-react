const SeaCritterReducer = (state = { seaCritters: [] }, action) => {
    switch (action.type) {
        case 'ADD_SEA_CRITTER':
            return { ...state, seaCritters: [...state.seaCritters, action.payload]}
        default:
            return state
    }
}

export default SeaCritterReducer