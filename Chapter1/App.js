import {useState} from "react";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView, Button } from "react-native";
import {styles} from "./style";
import User from "./component/user/User";
import CourseList from "./component/courseList/CourseList";
import CourseInsert from "./component/courseInsert/courseInsert";
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
      <CourseInsert/>
      <CourseList/>
    </SafeAreaView>
    </ContextProvider>
  );
}
//===================================================================================================

