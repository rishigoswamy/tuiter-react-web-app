import React from "react";
import {useSelector} from "react-redux";

import WhoToFollowListItem from "./WhoToFollowListItem";

const WhoToFollowList = () => {
    const who = useSelector(
        (state) => state.who);

    return(

            <div className="ms-1 me-1">
                <ul className="list-group">
                {
                    who.map(w => {
                        return(
                            <WhoToFollowListItem w={w}/>
                    );
                    })
        }
                </ul>
         </div>
    );
}
export default WhoToFollowList;