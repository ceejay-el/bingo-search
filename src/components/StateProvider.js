/**
 * @author Sonny Sangha
 * 
 * StateProvider allows us to share data across our components. This allows us to track user's
 * input and use it to query the api for search results
 */
 import React, {createContext, useContext, useReducer} from "react";

 /**
  * define reducer hook
  */
 export const initialState = {
     term: null
 }
 export const actionTypes = {
     SET_SEARCH_TERM: "SET_SEARCH_TERM"
 }
 export function reducer(state, action){
     console.log(action);    // TODO: Remember to remove this
     switch (action.type){
         case actionTypes.SET_SEARCH_TERM:
             return {
                 ...state,
                 term: action.term
             }
         default: return state;
     }
 }
 
 
 // initializing the data layer
 export const StateContext = createContext();
 
 export const StateProvider = ({reducer, initialState, children}) => (
     <StateContext.Provider value={useReducer(reducer, initialState)}>
         {children}
     </StateContext.Provider>
 );
 
 // TODO: Write description here
 export const useStateValue = () => useContext(StateContext);