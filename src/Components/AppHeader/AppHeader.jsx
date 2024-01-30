import {
  LogoutOutlined,
  MenuOutlined
} from "@ant-design/icons";
import img1 from "../../assets/usa.png";

import { getAuth, signOut } from "firebase/auth";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../../Firebase";
import { Context } from "../../App";
import "./AppHeader.css";

const auth = getAuth(app)


const AppHeader = ({ title }) => {
  const { setDrawerVisible } = useContext(Context);
  const navigate = useNavigate();
  const showDrawer = () => {
    if (window.innerWidth < 768) {
      setDrawerVisible(true);
    }
  };

  
  const handleLogOut =  () => {
    signOut(auth).then(() => {
      navigate("/")
    }).catch((error) => {
      console.log(error.message);
      
    })
  }

  return (
    <header className="header">
      <nav>
        <div className="icon-text-header">
          <div className="icon-one-main">
            <p onClick={showDrawer}>
              <MenuOutlined
                style={{cursor: "pointer", color: "rgb(36, 153, 239)", fontSize: "26px" }}
              />
            </p>
            <h3>{title}</h3>
          </div>
          <div className="icon-two-main">
            <img className="flag" src={img1} alt="" />
            {/* <BellOutlined style={{ fontSize: "16px", cursor: "pointer" }} /> */}

            <p>{auth.currentUser && auth.currentUser.displayName}</p>
            <span style={{cursor: "pointer"}} onClick={handleLogOut}>
              <LogoutOutlined />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
