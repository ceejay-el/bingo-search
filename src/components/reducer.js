/**
 * @author Sonny Sangha
 * 
 * This is not a component, the hook is used by `StateProvider`
 */

export const initialState = {
    term: null
}

export const actionTypes = {
    SET_SEARCH_TERM: "SET_SEARCH_TERM"
}

const reducer = (state, action) => {
    console.log(action); // TODO: Remember to remove this
    switch (action.type){
        case actionTypes.SET_SEARCH_TERM:
            return {
                ...state,
                term: action.term
            };
        default: return state;
    }
}

export default reducer;