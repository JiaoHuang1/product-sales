import { RECEIVE_SIDEBAR_INFO, RECEIVE_SALES_INFO, RECEIVE_OVERVIEW_INFO } from '../actions/product_action';

const reducer = (state = {}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_SIDEBAR_INFO:
            return Object.assign({}, state, action.sidebar)
        case RECEIVE_OVERVIEW_INFO:
            return Object.assign({}, state, action.overview)
        case RECEIVE_SALES_INFO:
            return Object.assign({}, state, action.sales)
        default:
            return state;
    }
};

export default reducer;