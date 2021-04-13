const initialState = {
    basket: [],

};

let BasketActions = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
};

const reducer = (state, action) => {
    switch (action.type) {
        case BasketActions.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        default:
            return state;

    }
};

export {
    initialState,
    BasketActions,
    reducer,
};