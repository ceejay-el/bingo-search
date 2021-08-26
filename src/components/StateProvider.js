/**
 * @author Sonny Sangha
 * 
 * Here, we're adding the functionality that will allow us to push and pull data from
 * the interface so user input interacts with the api and displays results on the 
 * results page...
 * 
 * ...I assume, because that was what I was looking for.
 */

import React, {createContext, useContext, useReducer} from "react";

// Preparing the data layer
export const StateContext = createContext();

export const StateProvider = ({reducer, initialState, children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

// Hook that allows us to pull information from the data layer
export const useStateValue = () => useContext(StateContext);