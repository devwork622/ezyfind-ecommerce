import * as types from './action.type.js';

export const CountCart = (payload) => {
    return ({
        type: types.COUNTCART,
        payload
    });
}