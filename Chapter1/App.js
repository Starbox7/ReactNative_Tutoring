import {useState} from "react";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView, Button } from "react-native";
import {styles} from "./style";
import User from "./component/user/User";
import CourseList from "./component/todoList/TodoList";
import CourseInsert from "./component/todoInsert/todoInsert";
import uuid from "uuid-random";
import { ContextProvider } from "./context/Context";

export default function App() {


//===================================================================================================
  return (
    <ContextProvider>
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <User/>
      <todoInsert/>
      <TodoList/>
    </SafeAreaView>
    </ContextProvider>
  );
}
//===================================================================================================

