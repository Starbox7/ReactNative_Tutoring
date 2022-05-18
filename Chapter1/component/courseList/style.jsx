import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  courseList: {
    width: "100%",
    flex: 8,
    alignItems: "center",
  },

  // courseItem: {
  //   width: "100%",
  //   borderColor: "#ddd",
  //   borderBottomWidth: 1,
  //   height: 50,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  list: {
    width: "100%",
  },
  item: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
    width: "100%",
    flexDirection: "row",
    backgroundColor: "#ffffff",
  },
  text: {
    textAlign: "center",
    fontSize: 40,
  },
  hidden: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    alignItems:"center",
    justifyContent:"center",
    width: 70,
  }

});
