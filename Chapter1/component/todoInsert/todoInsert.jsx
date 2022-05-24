import { View, TextInput, Pressable } from "react-native";
import { useState, useContext } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign"
import uuid from "uuid-random";
import {Context} from "../../context/Context"

export default ({}) => {
    const {state, dispatch}=useContext(Context);
    const [text, setText] = useState("");

    const onPress = () => {
        if("" !== text){
            const newCourse = {
                id : uuid(),
                text: text,
            }
           dispatch({type:"ADD", payload: newCourse});
            setText("");
        }
    }
    return(
        <View style={styles.container}>
            <TextInput
            style={styles.input}
            placeholder="호랑나비"
            onChangeText={setText}
            value={text}
            />
            <Pressable style={styles.press}
                onPress={onPress}>
                <Icon name="plus" size={30}/>
            </Pressable>
        </View>
    )
}