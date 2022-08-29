import "./widget.scss";
import PeopleOutlineSharpIcon from '@mui/icons-material/PeopleOutlineSharp';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import { useGlobalContext } from "../Context";

const Widget = ({type})=>{
    const {users} = useGlobalContext();
    const {products}=useGlobalContext();
    const {orders}=useGlobalContext();
    let data;
    switch(type)
    {
        case users:
            data = {
                title:"USERS",
                count:users.length,
                link : "see all users",
                icon:<PeopleOutlineSharpIcon className="icon"/>
            };
            break;
        case products:
            data = {
                title:"PRODUCTS",
                count:products.length,
                link:"see all products",
                icon:<StorefrontSharpIcon className="icon"/>
            };
            break;
        case orders:
            data = {
                title:"ORDERS",
                count:orders.length,
                link:"see all order",
                icon:<ShoppingCartOutlinedIcon className="icon"/>
            } ;
            break;
            default :
            break;       
    }
    
    return (
        <div class="widget">
        <div className="left">
            <span className="title">{data.title}</span>
            <span className="user-count">{data.count}</span>
            {/* <span className="link">see all users</span> */}
        </div>
       <div className="right">
        {data.icon} 
        <span className="link">{data.link}</span>
       </div>
        </div>
       
    )
}
export default Widget;