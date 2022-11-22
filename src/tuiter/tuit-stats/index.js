import React from "react";
import ConditionalLike from "../conditional-like/conditional-like";
import {useDispatch} from "react-redux";

const TuitStats = (
 {
    post = {
        "_id": 123,
        "topic": "Tuiter",
        "userName": "Elon Musk",
        "time": "23h",
        "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
        "image": "elon.jpg",
        "handleName": "elonmusk",
        "likes": 2000,
        "liked" : true,
        "retuits": 1200,
        "comments":248,
        "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
    }
 }
) => {
return(
    <div className="container ps-5">
    <div className="row">
        <div className="col-sm">
        <i className="fa-regular fa-comment"></i>
          &nbsp;{post.comments}
        </div>
        <div className="col-sm">
        <i className="fa-solid fa-retweet"></i>
          &nbsp;{post.retuits}
        </div>
        <div className="col-sm">
            <ConditionalLike tuit={post}/>
        </div>

        <div className="col-sm">
        <i className="fa-solid fa-download"></i>
        </div>
    </div>
    </div>     
);
};
export default TuitStats;