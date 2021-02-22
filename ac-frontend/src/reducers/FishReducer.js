const FishReducer = (state = { fish: [] }, action) => {
    switch (action.type) {
        case 'ADD_FISH':
            return { ...state, fish: [...state.fish, action.payload]}
        default:
            return state
    }
}

export default FishReducer