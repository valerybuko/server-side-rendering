import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';
import data from './data/data.json';


const startState = {
    cards: []
}

const INITIALCARDS = "INITIALCARDS";
const ADDCARD = "ADDCARD";

export const initialCards = () => {
    return {
        type: INITIALCARDS,
        cards: data
    }
}

export const addItem = (item) => {
    return {
        type: ADDCARD,
        item
    }
}

export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'INITIALCARDS':
            return {
                cards: action.cards,
            }
        case 'ADD':
            return {
                ...state,
                cards: [...state.cards, action.item]
            }
        default: return state
    }
}

export const initStore = (initialState = startState) => {
    return createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
