import React from "react";
import {useSelector} from "react-redux";

import PostSummaryItem from "./PostSummaryItem";

const PostSummaryList = () => {
    const posts = useSelector(state => state.tuits)
    return(
        <div className="ms-1 me-1">
            <ul className="list-group">
                    {

                    posts.map(post => {
                        return(
                            <PostSummaryItem post={post} />
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default PostSummaryList;

