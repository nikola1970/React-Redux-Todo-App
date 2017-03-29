import uuidV4 from 'uuid/v4';

export let searchTermReducer = (state = "", action) => {
    switch(action.type) {
        case "SET_SEARCH_TERM":
            return action.searchTerm;
        default:
            return state;
    }
};

export let todoReducer = (state = [], action) => {
    switch(action.type) {
        case "ADD_TODO":
            return [
                ...state,
                {
                    id: uuidV4(),
                    task: action.todo,
                    done: false
                }
            ];
        case "REMOVE_TODO":
            return state.filter(todo => todo.id !== action.id);
        default:
            return state;
    }
};