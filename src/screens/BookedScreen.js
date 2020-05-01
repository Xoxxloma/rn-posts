import React from "react";
import { PostList } from "../components/PostList";
import { useSelector } from "react-redux";

export const BookedScreen = ({ navigation }) => {
  const onOpen = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
    });
  };

  const bookedPosts = useSelector(state => state.data.bookedPosts)

  return <PostList onOpen={onOpen} data={bookedPosts} />;
};
