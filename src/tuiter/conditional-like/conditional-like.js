import React from "react";
import {useDispatch} from "react-redux";
import {likeTuit} from "../reducers/tuits-reducer";

const ConditionalLike = ({tuit}) => {
    const dispatch = useDispatch();
    const likeTuitHandler = (tuit) => {
        dispatch(likeTuit(tuit));
    };
    return (
    <span onClick={() => likeTuitHandler(tuit)}>
        {
            tuit.liked &&
            <i className="fa fa-heart" style={{color: 'red'}}></i>
        }
        {
            !tuit.liked &&
            <i className="fa-regular fa-heart"></i>
        }

        &nbsp;{tuit.likes}
    </span>
);
}
export default ConditionalLike;