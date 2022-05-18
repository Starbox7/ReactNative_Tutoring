import { View, TextInput, Pressable } from "react-native";
import { useState } from "react";
import { styles } from "./style";
import Icon from "react-native-vector-icons/AntDesign"

export default ({addCourses}) => {
    const [text, setText] = useState("");

    const onPress = () => {
        if("" !== text){
            addCourses(text);
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