import AsyncStorage from "@react-native-async-storage/async-storage";

export const addData =  async(newTodo) => {
    try{
        const load = await AsyncStorage.getItem("todos");
        const data = JSON.parse(load || "{}"); //문자열로 저장된 데이터를 제이슨으로 변환
        let update;
        //load == null 보다는 null ==load 로 사용시 오류잡기 편리
        if(null!==load){
            update = [...data, newTodo];
        }
        else {
            update = [newTodo];
        }
        await AsyncStorage.setItem("todos", JSON.stringify(update));
    }catch(err){
        console.log(err);
    }
}
//export async function addData(newTodo){}

export const deleteData = async (id) => {
    try{
        const load = await AsyncStorage.getItem("todos");
        const data = JSON.parse(load || "{}");
        const deletedTodo = data.filter((todo)=>todo.id!==id);
        await AsyncStorage.setItem("todos", JSON.stringify(deletedTodo));
    }
    catch(err){
        console.log(err);
    }
}

export const updateData = async (updateTodo) => {
    try{
        const load = await AsyncStorage.getItem("todos");
        const data = JSON.parse(load || "{}");
        const index = data.findIndex((todo)=>todo.id===updatedTodo.id);
        const fa = [...data];
        const updateTodos = [
            ...fa.slice(0,index),
            updateTodo,
            ...fa.slice(index+1),
        ];
        await AsyncStorage.setItem("todos", JSON.stringify(updateTodo));
    }
    catch(err){
        console.log(err);
    }
}