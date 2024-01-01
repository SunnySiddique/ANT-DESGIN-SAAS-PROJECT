import {
  AppstoreOutlined,
  BellOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import img2 from "../../assets/001-man.svg";
import img1 from "../../assets/usa.png";

import { useContext } from "react";
import { Context } from "../../App";
import "./AppHeader.css";

const AppHeader = ({ title }) => {
  const { setDrawerVisible } = useContext(Context);

  const showDrawer = () => {
    if (window.innerWidth < 768) {
      setDrawerVisible(true);
    }
  };

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
            <BellOutlined style={{ fontSize: "16px", cursor: "pointer" }} />

            <AppstoreOutlined
              className="myCustomizeicon"
              style={{ fontSize: "16px", cursor: "pointer" }}
            />
            <img className="profile" src={img2} alt="" />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppHeader;
