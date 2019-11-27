const INITIAL_STATE = {};

export default (state = INITIAL_STATE, action) => {

    switch(action.type) {
        case 'ACTION_TYPE':
            return {...state, key: '1'};
        default:
            return state;
    }
}
