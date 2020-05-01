import { createSlice } from "@reduxjs/toolkit";
import { DATA } from "../data";

export const dataSlice = createSlice({
  name: "data",
  initialState: {
    allPosts: [],
    bookedPosts: []
  },
  reducers: {
    loadData: (state) => {
      state.allPosts = DATA
      state.bookedPosts = DATA.filter(p => p.booked)
    },
    toggleBook: (state, action) => {
      state.allPosts = state.allPosts.map(p => {
        if (p.id === action.payload) {
          p.booked = !p.booked
        }
        return p
      })
      state.bookedPosts = state.allPosts.filter(p => p.booked)
    },
    removePost: (state, action) => {
      state.allPosts = state.allPosts.filter(p => p.id !== action.payload)
      state.bookedPosts = state.allPosts.filter(p => p.booked)
    },
    addPost: (state, action) => {
      state.allPosts = [{...action.payload}, ...state.allPosts]
    }
  },
});

export const {loadData, toggleBook, removePost, addPost} = dataSlice.actions

export default dataSlice.reducer