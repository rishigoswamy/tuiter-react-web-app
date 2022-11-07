import React from "react";
import {Link} from "react-router-dom";
import HomeScreen from "./HomeScreen/HomeScreen";
import whoReducer
    from "./reducers/who-reducer";
import { configureStore }
    from '@reduxjs/toolkit';
import {Provider} from "react-redux";
import tuitsReducer from "./reducers/tuits-reducer";
const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer}});

const Tuiter = () => {
    return(
        <Provider store={store}>


                <HomeScreen/>
                <Link to="/hello">
                    Hello
                </Link> |
                <Link to="/">
                    Labs
                </Link>

        </Provider>


    )
};

export default Tuiter;
