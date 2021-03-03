const BugReducer = (state = { bugs: [] }, action) => {
    switch (action.type) {
        case 'ADD_BUG':
            return { ...state, bugs: [...state.bugs, action.payload]}
        default:
            return state
    }
}

export default BugReducer