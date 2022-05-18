import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  user: {
    width: "100%",
    flex: 1,
    flexDirection: "row",
    borderColor: "#ddd",
    borderBottomWidth: 1,
  },
  userPicture: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  userInfo: {
    flex: 2,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  userName: {
    fontWeight: "bold",
  },
  userMusic: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },

  melon: {
    borderColor: "green",
    borderWidth: 1,
    padding: 10,
    borderRadius: 30,
  },
});
