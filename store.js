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

export const initStore = (initialState = startState) => {
    return createStore(reducer, initialState, composeWithDevTools(applyMiddleware(thunkMiddleware)));
}
