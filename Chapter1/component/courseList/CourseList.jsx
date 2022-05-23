import { View, Image, Text, Pressable } from "react-native";
import { styles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/AntDesign";
import {useContext} from "react";
import { Context } from "../../context/Context";

export default ({}) => {

  const {state, dispatch} = useContext(Context);
  const onPress = (course) => {
    dispatch({type: "DEL",payload: course.id});
  }
  return (
    <View style={styles.courseList}>
      <SwipeListView style={styles.list}
        data={state.courses}
        renderItem={(data) => (
          <View style={styles.item}>
            <Text style={styles.text}>{data.item.text}</Text>
          </View>
        )}
        renderHiddenItem={(data) => (
          <View style={styles.hidden}>
            <Pressable style={styles.button}>
              <Icon name="edit" size={40} color="blue" />
            </Pressable>
            <Pressable style={styles.button}  onPress={()=> onPress(data.item)}>
              <Icon name="delete" size={40} color="red" />
            </Pressable>
          </View>
        )}
        leftOpenValue={70}
        rightOpenValue={-70}
      />
    </View>
  );
};
