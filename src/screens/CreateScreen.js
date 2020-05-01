import React, { useState, useRef } from "react";
import { StyleSheet, Text, View, Keyboard, Image, Button } from "react-native";
import {
  ScrollView,
  TouchableWithoutFeedback,
  TextInput,
} from "react-native-gesture-handler";
import { THEME } from '../theme'
import { addPost } from "../slices/dataSlice";
import { useDispatch } from "react-redux";
import { PhotoPicker } from "../components/PhotoPicker";

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch()

  const [text, setText] = useState("")
  const pickRef = useRef()

  const createHandler = () => {
    const post = {
      date: new Date().toJSON(),
      id: new Date().toString(),
      text: text,
      img: pickRef.current,
      booked: false
    }
    dispatch(addPost(post))
    navigation.navigate("Main")
  }

  const onPick = uri => {
    pickRef.current = uri
  }

  return (
    <ScrollView style={styles.wrap}>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.center}>
          <Text style={styles.title}t>Create new post</Text>
          <TextInput style={styles.input} value={text} placeholder="Text your post" onChangeText={setText} multiline/>
          <PhotoPicker onPick={onPick} />
        <Button style={styles.btn} title="Create post" color={THEME.MAIN_COLOR} onPress={createHandler} disabled={!text} />
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  wrap: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10
  },
  input: {
    paddingVertical: 10,
    borderStyle: "solid",
    borderBottomWidth: 2,
    borderBottomColor: THEME.MAIN_COLOR,
  },
  btn: {
    margin: 10
  }
});
