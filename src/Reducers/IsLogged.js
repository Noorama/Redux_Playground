const loggedReducer = (state = false, action ) => {
    if (action.type === 'SIGN_IN') return true;
    if (action.type === 'SIGN_OUT') return false;
    return state
}

export default loggedReducer
