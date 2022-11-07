import React from "react";
import {useSelector} from "react-redux";
import TuitItem from "./tuit-item";

const TuitList = () => {
  const itemsArray = useSelector(state => state.tuits)
 return(
   <ul className="list-group">
     {
       itemsArray.map(t =>
         <TuitItem
           key={t._id} tuit={t}/> )
     }
   </ul>
 );
};
export default TuitList;