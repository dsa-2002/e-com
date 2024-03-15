import React from "react";
import { useNavigate } from "react-router-dom";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import "./navbar.css";
import CancelRoundedIcon from "@mui/icons-material/CancelRounded";
const Navbar = () => {
  const navigate = useNavigate();

  function showSideBar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.display = "flex";
  }

  function hideSideBar() {
    const sidebar = document.querySelector(".sidebar");
    if (sidebar) sidebar.style.display = "none";
  }

  return (
    <div className="navbar">
      <div className="sidebar">
        <h1 className="nav-items-header " onClick={hideSideBar}>
          <CancelRoundedIcon style={{ color: "white", fontSize: "50" }} />
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/")}>
          Dashboard
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/products")}>
          Products
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/orders")}>
          Orders
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/calender")}>
          Calender View
        </h1>
      </div>

      <div className="nav-items">
        <h1 className="nav-items-header ">E-Com</h1>
        <h1 className="nav-items-header" onClick={() => navigate("/")}>
          Dashboard
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/products")}>
          Products
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/orders")}>
          Orders
        </h1>
        <h1 className="nav-items-header" onClick={() => navigate("/calender")}>
          Calender View
        </h1>
        <h1 className="menu-button" onClick={showSideBar}>
          <MenuRoundedIcon style={{ color: "white", fontSize: "50" }} />
        </h1>
      </div>
    </div>
  );
};

export default Navbar;
