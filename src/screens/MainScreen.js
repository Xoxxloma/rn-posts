import React, { useEffect } from "react";
import { PostList } from "../components/PostList";
import { loadData } from "../slices/dataSlice";
import { useDispatch, useSelector } from "react-redux";

export const MainScreen = ({ navigation }) => {
  const allPosts = useSelector(state => state.data.allPosts)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(loadData())
  }, [dispatch])

  const onOpen = (post) => {
    navigation.navigate("Post", {
      postId: post.id,
      date: post.date,
    });
  };

  return <PostList onOpen={onOpen} data={allPosts} />;
};
