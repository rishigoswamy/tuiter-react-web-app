import React from 'react';
import NavigationSidebar from "./navigation-sidebar";
import WhoToFollowList from './who-to-follow-list';
import ExploreComponent from './explore';
import {Routes, Route} from "react-router";
import HomeComponent from './home';
import PostSummaryList from './post-summary-item';
import ProfileComponent from './profile';
import EditProfileComponent from './EditProfile';
import whoReducer
  from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";  
import { configureStore }
  from '@reduxjs/toolkit';
import {Provider} from "react-redux";
const store = configureStore(
  {reducer: {who: whoReducer, tuitsData: tuitsReducer}});

function Tuiter() {
    return(
      <Provider store={store}>
         <div>
            <div className="row mt-2">
            <div className="col-2 col-md-2 col-lg-1 col-xl-2">
               <NavigationSidebar/>
            </div>
            <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                  style={{"position": "relative"}}>
               <Routes>
                  <Route path="profile"    element={<ProfileComponent/>}/>
                  <Route path="edit-profile"    element={<EditProfileComponent/>}/>                  
                  <Route path="home"    element={<HomeComponent/>}/>
                  <Route path="explore" element={<ExploreComponent/>}/>
               </Routes>
            </div>
            <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
               <Routes>
                  <Route path="home"    element={<PostSummaryList/>}/>
                  <Route path="explore" element={<WhoToFollowList/>}/>
                  <Route path="profile"    element={<WhoToFollowList/>}/>
                  <Route path="edit-profile"    element={<WhoToFollowList/>}/>
               </Routes>
            </div>
            </div>    
         </div>
      </Provider>
    );
 }
 export default Tuiter