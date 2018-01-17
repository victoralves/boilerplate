const appReducer = (state = {}, action) => {
    switch (action.type) {
        case 'POPULATE_APP':
            return {
                ...state,
            }
    }
}

export default appReducer