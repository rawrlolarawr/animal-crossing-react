const VillagerReducer = (state = { villagers: [] }, action) => {
    switch (action.type) {
        case 'ADD_VILLAGER':
            return { ...state, villagers: [...state.villagers, action.payload]}
        default:
            return state
    }
}

export default VillagerReducer