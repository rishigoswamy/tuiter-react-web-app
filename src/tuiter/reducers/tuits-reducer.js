import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';
import {createTuitThunk, deleteTuitThunk, findTuitsThunk, updateTuitThunk}
    from "../../services/tuits-thunks";

const initialState = {
    tuits: [],
    loading: false
}

const currentUser = {
 "userName": "NASA",
 "handleName": "nasa",
 "image": "nasa.jpg",
};

const templateTuit = {
 ...currentUser,
 "topic": "Space",
 "time": "2h",
 "liked": false,
 "replies": 0,
 "tuits": 0,
 "handleName": "default",
 "userName": "default",
 "likes": 0,
 "comments": 0
}


const tuitsSlice = createSlice({
 name: 'tuits',
    initialState,
    extraReducers: {
        [deleteTuitThunk.fulfilled] :
            (state, { payload }) => {
                state.loading = false
                state.tuits = state.tuits
                    .filter(t => t._id !== payload)
            },
        [createTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits.push(payload)
            },
        [updateTuitThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                const tuitNdx = state.tuits
                    .findIndex((t) => t._id === payload._id)
                state.tuits[tuitNdx] = {
                    ...state.tuits[tuitNdx],
                    ...payload
                }
            },

        [findTuitsThunk.pending]:
            (state) => {
                state.loading = true
                state.tuits = []
            },
        [findTuitsThunk.fulfilled]:
            (state, { payload }) => {
                state.loading = false
                state.tuits = payload
            },
        [findTuitsThunk.rejected]:
            (state) => {
                state.loading = false
            }
    },

    reducers: {
   createTuit(state, action) {
     state.unshift({
       ...action.payload,
       ...templateTuit,
       _id: (new Date()).getTime(),
     })
   },
    deleteTuit(state, action) {
     const index = state
        .findIndex(tuit =>
           tuit._id === action.payload);
     state.splice(index, 1);
   },
   likeTuit(state, action) {
        const currentTuit = state.find((tuit) =>
           tuit._id === action.payload._id)
           
            if(currentTuit.liked === true) {
                currentTuit.liked = false;
                currentTuit.likes--;
            } else {
                currentTuit.liked = true;
                currentTuit.likes++;
            }
   }
 }
});

export const {createTuit, deleteTuit, likeTuit} = tuitsSlice.actions;
export default tuitsSlice.reducer;