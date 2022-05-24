const Reducer = (state, action) => {
    switch (action.type){
        case "ADD":
            const addedtodos = [...state.todos, action.payload];
            return{
                ...state,
                todos:addedTodos,
            };
            case "DEL":
                const deletedCourses = state.todos.filter(todo=>todo.id !== action.payload);
                return{
                    ...state,
                    todos: deletedCourses,
                }

            default:
                return{
                    state,
                }
    }
}

export default Reducer;