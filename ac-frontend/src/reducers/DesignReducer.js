const DesignReducer = (state = { designs: [] }, action) => {
    switch (action.type) {
        case 'ADD_DESIGN':
            return { ...state, designs: [...state.designs, action.payload]}
        default:
            return state
    }
}

export default DesignReducer