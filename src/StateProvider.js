import React, { createContext, useContext, useReducer } from "react";

//Prepare the dataLayer
export const StateContext = createContext();

//wrap the app and provide state to every component in app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//To Pull information from the state
export const useStateValue = () => useContext(StateContext);