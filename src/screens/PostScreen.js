import React, { useCallback, useEffect } from "react";
import { StyleSheet, Text, View, Image, Button, Alert } from "react-native";
import { THEME } from "../theme";
import { ScrollView } from "react-native-gesture-handler";
import { useDispatch, useSelector } from "react-redux";
import { toggleBook, removePost } from "../slices/dataSlice";

export const PostScreen = ({ route, navigation }) => {
  const allPosts = useSelector((state) => state.data.allPosts);
  const id = route.params.postId;
  const post = allPosts.find((i) => i.id === id);

  const booked = useSelector((state) =>
    state.data.bookedPosts.some((p) => p.id === id)
  );
  const dispatch = useDispatch();

  const toggleHandler = useCallback(() => {
    dispatch(toggleBook(id));
  }, [dispatch, id]);

  useEffect(() => {
    navigation.setParams({ toggleHandler });
  }, [toggleHandler]);

  useEffect(() => {
    if (!post) {
      return
    }
    navigation.setParams({ booked });
  }, [booked]);

  const removeHandler = () => {
    Alert.alert(
      `Deleting post`,
      "Wanna delete this post?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => {
            navigation.navigate("Main");
            dispatch(removePost(id));

          },
        },
      ],
      { cancelable: false }
    );
  };

  if (!post) {
    return null;
  }
  return (
    <ScrollView style={styles.postWrap}>
      <Image source={{ uri: post.img }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button
        title="Delete"
        color={THEME.DANGER_COLOR}
        onPress={removeHandler}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  postWrap: {
   
  },
  image: {
    width: "100%",
    height: 350,
  },
  textWrap: {
    padding: 10,
  },
  text: {
    fontFamily: "regular",
  },
});
