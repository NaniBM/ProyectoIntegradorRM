import { ADD_FAV, FILTER, ORDER, REMOVE_FAV } from "../actions/types";

const initialState = {
    myFavorites: [],
    allCaracters: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_FAV:
            return { ...state, myFavorites: payload, allCharacters: payload };
        case REMOVE_FAV:
            return { ...state, myFavorites: payload };
        case FILTER:
            return {
                ...state,
                myFavorites: payload === "All" ? state.allCaracters : state.allCaracters.filter(char => char.gender === payload)
            }
        case ORDER:
            return {
                ...state,
                myFavorites: state.allCaracters.sort((a, b) => {
                    if (a.id > b.id) {
                        return payload === 'A' ? 1 : -1;
                    }
                    if (a.id < b.id) {
                        return payload === 'A' ? -1 : 1;
                    }
                    return 0;
                })
            }
        default:
            return { ...state }
    }
}

export default rootReducer;

