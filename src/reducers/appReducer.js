const appReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULATE_APP':
            return {
                ...state,
            }
        // no default
    }
}

export default appReducer