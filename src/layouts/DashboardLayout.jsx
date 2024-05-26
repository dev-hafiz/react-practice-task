import { Link, Outlet } from "react-router-dom";
import "../components/dashboard/Dashboard.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { IoHomeOutline } from "react-icons/io5";
import { LiaProductHunt } from "react-icons/lia";
import { IoIosAddCircleOutline } from "react-icons/io";
import { GrHomeOption } from "react-icons/gr";

const DashboardLayout = () => {
  return (
    <div className="grid grid-cols-12">
      <div className="col-span-3  dashbaord-left  min-h-screen px-12">
        <div className="dashboard-logo-wrapper">
          <LuLayoutDashboard className="dashboard-logo" />
          <h3 className="dashboard-title">Dashboard</h3>
        </div>
        <ul>
          <li>
            <button className="dashboard-link">
              <GrHomeOption className="link-icon" />
              <Link to={""}>Dashboard</Link>
            </button>
          </li>
          <li>
            <button className="dashboard-link">
              <LiaProductHunt className="link-icon" />
              <Link to={"all-products"}>All Products</Link>
            </button>
          </li>
          <li>
            <button className="dashboard-link">
              <IoIosAddCircleOutline className="link-icon" />
              <Link to={"add-products"}>Add Product</Link>
            </button>
          </li>

          <li>
            <button className="dashboard-link">
              <IoHomeOutline className="link-icon" />
              <Link to={"/"}>Home</Link>
            </button>
          </li>
        </ul>
      </div>
      <div className="col-span-9 dashbaord-right p-20">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
