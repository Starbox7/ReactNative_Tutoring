import { View, Image, Text, Pressable } from "react-native";
import { styles } from "./style";
import { SwipeListView } from "react-native-swipe-list-view";
import Icon from "react-native-vector-icons/AntDesign"

export default ({ courses, deleteCourses }) => {

  return (
    <View style={styles.courseList}>
      <SwipeListView style={styles.list}
        data={courses}
        renderItem={(data) => (
          <View style={styles.item}>
            <Text style={styles.text}>{data.item.text}</Text>
            <Pressable style={styles.button} onPress={deleteCourses(data.item.id)}>
              <Icon name="delete" size={40} color="red" />
            </Pressable>
          </View>
        )}
        renderHiddenItem={(data) => (
          <View style={styles.hidden}>
            <Pressable style={styles.button}>
              <Icon name="edit" size={40} color="blue" />
            </Pressable>

          </View>
        )}
        leftOpenValue={70}
        rightOpenValue={-70}
      />
    </View>
  );
};
