import { View, Image, Text } from "react-native";
import { styles } from "./style";
import ProfileIMG from "./김범준.jpg";

export default () => {
  const student = {
    name: "김범준",
    msg: "다스케테",
    music: "IU - 라일락",
  };

  return (
    <View style={styles.user}>
      <View style={styles.userPicture}>
        <Image source={ProfileIMG} resizeMode="contain" style={{width: "100%", height:"100%"}}/>
      </View>
      <View style={styles.userInfo}>
        <Text style={styles.userName}>{student.name}</Text>
        <Text>{student.msg}</Text>
      </View>
      <View style={styles.userMusic}>
        <Text style={styles.melon}>{student.music}</Text>
      </View>
    </View>
  );
};
