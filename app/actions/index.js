export let setSearchTerm = (searchTerm) => {
    return {
        type: "SET_SEARCH_TERM",
        searchTerm
    }
};

export let addTodo = (todo) => {
    return {
        type: "ADD_TODO",
        todo
    }
};

export let removeTodo = (id) => {
    return {
        type: "REMOVE_TODO",
        id
    }
};