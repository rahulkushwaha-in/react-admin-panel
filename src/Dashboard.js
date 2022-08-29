import { useGlobalContext } from "./Context";
import React from "react";
import Sidebar from "./Components/sidebar";
import "./dashboard.scss";
import Widget from "./Components/Widget";
import Graph from "./Components/graph";
import userProfile from "./images/userProfile.jpg"
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import ProgressBar from "./Components/ProgressBar";
const DashBoard = () =>{
    const {users} = useGlobalContext();
    const {products}=useGlobalContext();
    const {orders}=useGlobalContext();
    // const userCount = users.length;
    // const productCount = products.length;
 
    return (
        
            <div className="Dashboard">
            <Sidebar/>
              <div className="Analytical-containter">
              <h3>Dash Board</h3>
              <div className="Widget-div">
              <Widget type={users} />
              <Widget type={products}/>
              <Widget type={orders}/>
              
              </div>
              
              <div className="graph">
                 <Graph/>
              </div>
                <div className="user-and-progressbar">
                  <div className="userList">
                <h3><PeopleOutlineSharpIcon/> TOP BUYER </h3>
                <div className="singleUser">
                  <ul>
                    {
                      users.map((user) =>
                        <li>
                      <img src={userProfile}/>
                      <span>{user.name}</span>
                    </li>
                      )
                    }
                  </ul>
                </div>
                
                  </div>
                  <div className="progressbar-container">
                  <h3>SELLS</h3>
                    <div className="progressbar">
                    <ProgressBar/>
                    </div>
                   </div>
                   </div>
              </div>
             

            </div>
           
      
    )
         
        
       
       
    
};
export default DashBoard;