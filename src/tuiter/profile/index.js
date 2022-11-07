import React, {}  from 'react';
import ProfileItem from "./profile-info";
import {useSelector} from "react-redux";
import profile from "./profile-reducer";
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
let store = configureStore({
    reducer: {profile}
});
const ProfileComponent = () => {
    let itemsArray = useSelector(state => state.profile)
    console.log(itemsArray);
 return(
     <Provider store={store}>
         <ProfileItem/>
     </Provider>
 );
};
export default ProfileComponent;