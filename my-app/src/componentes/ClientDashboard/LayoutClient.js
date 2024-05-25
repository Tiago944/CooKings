import { Outlet } from "react-router-dom";
import SideBar from "./SideBar";
import TopNavBar from "../AdminDashboard/TopNavBar";
import './ClienteDashboard.css';

const LayoutClient = () => {
  return (
    <>
      <div>
        <TopNavBar />
      </div>
      <div class="contentAdmin">
        <SideBar />   
        <Outlet />
      </div>
    </>
  );
};

export default LayoutClient;