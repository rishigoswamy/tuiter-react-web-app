import React, {}  from 'react';
import profile from "../profile/profile-reducer";
import {Provider} from "react-redux";
import { configureStore }
    from '@reduxjs/toolkit';
import EditProfileItem from "./edit-profile";
const store = configureStore({
    reducer: {profile}
});

const EditProfileComponent = () => {
    return(
        <Provider store={store}>
            <div>
                <EditProfileItem/>
            </div>
        </Provider>
    );
};
export default EditProfileComponent;