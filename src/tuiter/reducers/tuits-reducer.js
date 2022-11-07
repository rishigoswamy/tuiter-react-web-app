import { createSlice } from "@reduxjs/toolkit";
import tuits from '../data/tuits.json';

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
 "retuits": 0,
 "likes": 0,
 "comments": 0
}


const tuitsSlice = createSlice({
 name: 'tuits',
 initialState: tuits,
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