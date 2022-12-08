import * as types from './action.type.js';

const INIT_STATE = {
    count_cart: 0,
}

const CartReducer = (state = INIT_STATE, action) => {

    switch (action.type) {

        case types.COUNTCART:
            return { ...state, count_cart: action.payload };

        default:
            return state;
    }
}

export default CartReducer;