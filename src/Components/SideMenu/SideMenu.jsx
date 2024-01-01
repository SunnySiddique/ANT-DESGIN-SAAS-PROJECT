import {
  AppstoreAddOutlined,
  AppstoreOutlined,
  LoginOutlined,
  StarOutlined,
  UserAddOutlined,
  UserOutlined
} from "@ant-design/icons";
import { Drawer, Layout, Menu } from "antd";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "../../App";
import logosvg from '../../assets/logo.svg';
import PageContent from "../PageContent/PageContent";

const { Content, Sider } = Layout;

const items = [
  {
    label: "Dashboard",
    key: "/",
    icon: <AppstoreAddOutlined />,
  },
  {
    label: "User Profile",
    key: "/userprofile",
    icon: <UserOutlined />, 
  },
  {
    label: "User Grid",
    key: "/usergrid",
    icon: <AppstoreOutlined />,
  },
  {
    label: "Add User",
    key: "/adduser",
    icon: <UserAddOutlined />,
  },
  {
    label: "Login",
    key: "/login",
    icon: <LoginOutlined />,
  },
  {
    label: "Register",
    key: "/register",
    icon: <StarOutlined />,
  },
];

const SideMenu = () => {
  const [activeKey, setActiveKey] = useState("/");
  const { drawerVisible, setDrawerVisible } = useContext(Context);
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate(item.key);
    setActiveKey(item.key);
    setDrawerVisible(false); // Close the drawer after clicking a menu item
  };

  // const showDrawer = () => {
  //   setDrawerVisible(true);
  // };

  const onClose = () => {
    setDrawerVisible(false);
  };

  return (
    <>
      <Layout style={{ minHeight: "100vh" }}>
        <Sider collapsible collapsed breakpoint="sm" className="sidemenu">
          <div className="demo-logo-vertical">
            <img className="logosvg" src={logosvg} alt="" />
          </div>
          <Drawer
            placement="left"
            onClose={onClose}
            visible={drawerVisible}
            key="left"
          > 
            <Menu
              theme="light"
              defaultSelectedKeys={["1"]}
              selectedKeys={[activeKey]}
              mode="inline"
              items={items}
              onClick={handleMenuClick}
            >
              {items.map((item) => (
                <Menu.Item key={item.key} icon={item.icon}>
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
          <Menu
            theme="light"
            defaultSelectedKeys={["1"]}
            selectedKeys={[activeKey]}
            mode="inline"
            items={items}
            onClick={handleMenuClick}
          >
            {items.map((item) => (
              <Menu.Item key={item.key} icon={item.icon}>
                {item.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout>
          <Content style={{ margin: "0 16px" }}>
            <PageContent />
          </Content>
        </Layout>
      </Layout>
    </>
  );
};

export default SideMenu;
