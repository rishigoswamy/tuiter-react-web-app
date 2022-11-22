
import TuitItem from "./tuit-item";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";

import {findTuitsThunk}
    from "../../services/tuits-thunks";


const TuitList = () => {
  const {tuits, loading} = useSelector(state => state.tuitsData)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findTuitsThunk())
    }, [])

    return(

   <ul className="list-group">
       {
           loading &&
           <li className="list-group-item">
               Loading...
           </li>
       }

       {
           tuits.map(t =>
         <TuitItem
           key={t._id} tuit={t}/> )
     }
   </ul>
 );
};
export default TuitList;