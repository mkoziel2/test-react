import { combineReducers } from 'redux'

const counterReducer = (state = [], action) => {
    switch (action.type) {
        case 'ADD_COUNTER':
            let id = Math.random().toString(36).substr(2, 9);
            return [...state, { id: id, v: 0 }];

        case 'DEL_COUNTER':
            let arr = state;
            return arr.filter(x => x.id !== action.payload.id);

        case 'INC_COUNTER':
            let arr1 = state;
            let indx = arr1.findIndex(x => x.id === action.payload.id);
            arr1[indx].v += action.payload.int;
            return [...arr1];

        default:
            return state;
    };
};

const rootReducer = combineReducers(
    {
        counter: counterReducer
    }
);

export default rootReducer;