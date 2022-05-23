const Reducer = (state, action) => {
    switch (action.type){
        case "ADD":
            const addedCourses = [...state.courses, action.payload];
            return{
                ...state,
                courses:addedCourses,
            };
            case "DEL":
                const deletedCourses = state.courses.filter(course=>course.id !== action.payload);
                return{
                    ...state,
                    courses: deletedCourses,
                }

            default:
                return{
                    state,
                }
    }
}

export default Reducer;