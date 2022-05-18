import {useState} from "react";
import React from "react";
import { StyleSheet, Text, SafeAreaView, View, ScrollView, Button } from "react-native";
import {styles} from "./style";
import User from "./component/user/User";
import CourseList from "./component/courseList/CourseList";
import CourseInsert from "./component/courseInsert/courseInsert";
import uuid from "uuid-random";

export default function App() {


  const [courses, setCourses] = useState([]); //Hook 사용
  const[num, setNum] = useState(1);

  const addCourses = (text) => {
    const newCourse = {
      id: uuid(),
      text: text,
    };
    const newCourses = [...courses, newCourse];
    setCourses(newCourses);
  }

  const deleteCourses = (id) => (e) => {
    const deletedCourses = courses.filter(course=>course.id !==id)
    setCourses(deletedCourses);
  }

//===================================================================================================
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
      </View>
      <User/>
      <CourseInsert addCourses={addCourses}/>
      <CourseList courses={courses} deleteCourses={deleteCourses}/>
      

    </SafeAreaView>
  );
}
//===================================================================================================

