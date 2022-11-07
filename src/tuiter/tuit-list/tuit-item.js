import React from "react";
import TuitStats from "../tuit-stats";
import {useDispatch} from "react-redux";
import {deleteTuit} from "../reducers/tuits-reducer";

const TuitItem = (
 {
   tuit = {}
 }
) => {
  const imageBorder = {
    "border-radius": "3%"
  }
  const dispatch = useDispatch();
  const deleteTuitHandler = (id) => {
    dispatch(deleteTuit(id));
  }
return(
  <li className="list-group-item">
      <div className="row">
        <div className="col-1 mt-1 mb-1 me-2">
          <img className="rounded-circle" height={48} width={48} src={`/images/${tuit.image}`} alt="side-icon"/>
        </div>
        <div className="col-8 mt-1 mb-1">
          <div className="fw-bold">{tuit.userName}</div>
          <div>@{tuit.handleName} . {tuit.time}</div>
          <div>
            <i className="bi bi-x-lg float-end"
                onClick={() => deleteTuitHandler(tuit._id)}></i>
          </div>          
        </div>
        <div className="col-12 ps-5">
          <div>{tuit.tuit}</div>
        </div>
        <TuitStats
           key={tuit._id} post={tuit}/>
      </div>
  </li>
);
};
export default TuitItem;