import React from "react";
import { useParams } from "react-router-dom";
const UserPannel = () =>{
    const {id}=useParams();
    return <>
        <div>User Pannel</div>
        <div>userid  {id}</div>
    </>
};
export default UserPannel;