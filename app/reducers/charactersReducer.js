import { GET_CHARACTERS } from '../constants';

const initialState = {
    characters: []
}
const charactersReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHARACTERS:
            return { ...state, characters: action.payload }
    }
    return state;
}

export default charactersReducer;