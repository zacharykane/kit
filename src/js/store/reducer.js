function reducer(state, action) {
    switch (action.type) {
        case 'CHANGE_NAME':
            return {
                name: action.payload.name,
            };
        default:
            return state;
    }
}

export default reducer;
