import AppHeader from "../../AppHeader/AppHeader";
import "./userProfile.css";

import { Card } from "@mui/material";
import { Col, Row, Spin, Tabs } from "antd";
import { useEffect, useState } from "react";
import image1 from "../../../assets/001-man (1).svg";
import Follower from "./Follower";
import Friends from "./Friends/Friends";
import Gallery from "./Gallery/Gallery";
import PostMain from "./PostMain";

const items = [
  {
    key: "1",
    label: (
      <div className="profile-tab">
        <p>Profile</p>
      </div>
    ),
    children: <>{/* <AntDesignTable /> */}</>,
  },
  {
    key: "2",
    label: (
      <div className="profile-tab">
        <p>Follower</p>
      </div>
    ),
    children: (
      <>
        <Row gutter={24}>
          <Col className="gutter-row" lg={12}>
            <Card></Card>
          </Col>
        </Row>
      </>
    ),
  },
  {
    key: "3",
    label: (
      <div className="profile-tab">
        <p>Friends</p>
      </div>
    ),
    children: "",
  },
  {
    key: "4",
    label: (
      <div className="profile-tab">
        <p>Gallery</p>
      </div>
    ),
    children: "",
  },
];

const UserProfiles = () => {
  const [activeTab, setActiveTab] = useState("1");
  const [loading, setLoading] = useState(true);

  const onChange = (key) => {
    setActiveTab(key);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <AppHeader title="User Profile" />
      {loading ? (
        <div className="spin" style={{ padding: "20px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <main>
          <section style={{ marginBottom: "30px" }}>
            <Card style={{ borderRadius: "1px" }}>
              <div className="hill-img"></div>
              <div className="main">
                <div className="main-hill">
                  <div className="main-title-img">
                    <div className="funny-img">
                      <img src={image1} alt="" />
                    </div>
                    <div className="hill-title">
                      <h5>Jason Alexander</h5>
                      <span>UI Designer</span>
                    </div>
                  </div>
                </div>
                <Tabs defaultActiveKey="1" onChange={onChange} centered>
                  {items.map((item) => (
                    <Tabs centered tab={item.label} key={item.key}>
                      {activeTab === item.key && item.children}
                    </Tabs>
                  ))}
                </Tabs>
              </div>
            </Card>
          </section>

          {activeTab === "1" && (
            <section>
              <PostMain />
            </section>
          )}

          {activeTab === "2" && <Follower />}

          {activeTab === "3" && <Friends />}

          {activeTab === "4" && <Gallery />}
        </main>
      )}
    </>
  );
};

export default UserProfiles;
