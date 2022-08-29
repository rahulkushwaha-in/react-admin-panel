import "./sidebar.scss";
import DashboardRoundedIcon from '@mui/icons-material/DashboardRounded';
import ViewListSharpIcon from '@mui/icons-material/ViewListSharp';
import GroupSharpIcon from '@mui/icons-material/GroupSharp';
import StorefrontSharpIcon from '@mui/icons-material/StorefrontSharp';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
const Sidebar = () =>{
    return (
        <div className="Sidebar">

            <div className="Logo-div">
                <span className="logo">DashBoard</span>
            </div>
                <hr></hr>
            <div className="Menu">
                <ul>
                    <li><DashboardRoundedIcon className="icon"/><span>Dashboard</span></li>
                    <li><ShoppingCartIcon className="icon"/><span>Orders</span></li>
                    <li><GroupSharpIcon className="icon"/><span>Custmers</span></li>
                    <li><StorefrontSharpIcon className="icon"/><span>Products</span></li>
                </ul>
            </div>

        </div>
    )
}
export default Sidebar;