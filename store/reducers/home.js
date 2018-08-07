const initstate = {
    yuan: null,
    id: 0,
    big: null
};
export default (state = initstate, action) => {
    // console.log(action, 'action');
    switch (action.type) {
    case 'YUAN_SHUJU':
        return Object.assign({}, state, {yuan: action.yuan});
    case 'YUAN_ID':
        return Object.assign({}, state, {id: action.id});
    case 'YUAN_GAI':
        return Object.assign({}, state, {big: action.big});
    default:
        return state;
    }
};
