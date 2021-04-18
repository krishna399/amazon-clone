const initialState = {
    basket: [],
    user: null,
};

let BasketActions = {
    ADD_TO_BASKET: "ADD_TO_BASKET",
    REMOVE_FROM_BASKET: "REMOVE_FROM_BASKET"
};

let UserActions = {
    SET_USER: "SET_USER"
}

const getBasketTotal = (basket) =>
    basket?.reduce((accumulator, item) => {
        return accumulator + item.price;
    }, 0);

const reducer = (state, action) => {
    switch (action.type) {
        case BasketActions.ADD_TO_BASKET:
            return {
                ...state,
                basket: [...state.basket, action.item],
            };
        case BasketActions.REMOVE_FROM_BASKET: {
            const index = state.basket.findIndex((item) =>
                item.id === action.id)
            let newBasket = state.basket;
            if (index >= 0) {
                newBasket.splice(index, 1);
            }
            return {
                ...state,
                basket: newBasket,
            }
        }
        case UserActions.SET_USER: {
            return {
                ...state,
                user: action.user,
            };
        }
        default:
            return state;

    }
};

export {
    initialState,
    BasketActions,
    UserActions,
    reducer,
    getBasketTotal
};