const Reducer = (state, action) => {
    switch (action.type){
        case "ADD":
            const addedTodos = [...state.todos, action.payload];
            return{
                ...state,
                todos:addedTodos,
            };
        case "DEL":
            const deletedTodo = state.todos.filter(todo=>todo.id !== action.payload);
            return{
                ...state,
                todos: deletedTodo,
            }

        default:
            return{
                ...state,
            }
    }
}

export default Reducer;