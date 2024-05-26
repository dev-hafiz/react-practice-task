import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import FooterCustom from "../components/FooterCustom";

const MainLayout = () => {
  return (
    <div>
      <Navbar />
      <div>
        <Outlet />
      </div>
      <FooterCustom />
    </div>
  );
};

export default MainLayout;
