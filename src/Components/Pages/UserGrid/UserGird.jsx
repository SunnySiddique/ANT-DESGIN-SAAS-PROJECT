import { SearchOutlined } from "@ant-design/icons";
import { Col, Divider, Input, Row, Spin } from "antd";
import AppHeader from "../../AppHeader/AppHeader";
import "./UserGrid.css";

import ProfileImage1 from "../../../assets/profileImage/1.svg";
// import ProfileImage2 from '../../../assets/profileImage/2.svg'
// import ProfileImage3 from '../../../assets/profileImage/3.svg'
// import ProfileImage4 from '../../../assets/profileImage/4.svg'
// import ProfileImage5 from '../../../assets/profileImage/5.svg'
// import ProfileImage6 from '../../../assets/profileImage/6.svg'

import dibble from "../../../assets/profileImage/dribble.svg";
import Facebook from "../../../assets/profileImage/facebook.svg";
import Instagram from "../../../assets/profileImage/instagram.svg";
import Twitter from "../../../assets/profileImage/twitter.svg";

import { Card } from "@mui/material";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import coverImage from "../../../assets/cover-1.png";

const UserGird = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true);
  
  const handleRouting = () => {
    navigate("/adduser")
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>
      <AppHeader title="User Grid" />
      {loading ? (
        <div className="spin" style={{padding: "20px" }}>
          <Spin size="large" />
        </div>
      ) : (
      <main>
      <div className="header-input-main">
        <div className="header-input">
          <Input
            prefix={
              <SearchOutlined
                style={{
                  userSelect: "none",
                  width: "1em",
                  height: "1em",
                  display: "inline-block",
                  fill: "currentcolor",
                  flexShrink: 0,
                  transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
                  fontSize: "16px",
                  marginRight: "8px",
                  color: "rgb(148, 164, 196)",
                }}
              />
            }
            type="text"
            placeholder="Search User..."
          />
        </div>
        <div className="User-button">
          <button onClick={handleRouting}>Add New User</button>
        </div>
      </div>
        <section>
          <Row gutter={24}>
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={8}>
              <ProfileCardImage
                img={ProfileImage1}
                title="Natalie Dormer"
                smallTitle="Marketing Manager"
                icon1={Facebook}
                icon2={Twitter}
                icon3={Instagram}
                icon4={dibble}
                dividerTitle="121"
                dividerSmallTitle="Post Avg."
                FollowTitle="575"
                FollowSmallTitle="Followers"
                FollowingTitle="632"
                FollowingSmallTitle="Following"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={8}>
              <ProfileCardImage
                img={ProfileImage1}
                title="Natalie Dormer"
                smallTitle="Marketing Manager"
                icon1={Facebook}
                icon2={Twitter}
                icon3={Instagram}
                icon4={dibble}
                dividerTitle="121"
                dividerSmallTitle="Post Avg."
                FollowTitle="575"
                FollowSmallTitle="Followers"
                FollowingTitle="632"
                FollowingSmallTitle="Following"
              />
            </Col>
            <Col className="gutter-row gutter-m" xs={24} sm={12} md={12} lg={8}>
              <ProfileCardImage
                img={ProfileImage1}
                title="Natalie Dormer"
                smallTitle="Marketing Manager"
                icon1={Facebook}
                icon2={Twitter}
                icon3={Instagram}
                icon4={dibble}
                dividerTitle="121"
                dividerSmallTitle="Post Avg."
                FollowTitle="575"
                FollowSmallTitle="Followers"
                FollowingTitle="632"
                FollowingSmallTitle="Following"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={8}>
              <ProfileCardImage
                img={ProfileImage1}
                title="Natalie Dormer"
                smallTitle="Marketing Manager"
                icon1={Facebook}
                icon2={Twitter}
                icon3={Instagram}
                icon4={dibble}
                dividerTitle="121"
                dividerSmallTitle="Post Avg."
                FollowTitle="575"
                FollowSmallTitle="Followers"
                FollowingTitle="632"
                FollowingSmallTitle="Following"
              />
            </Col>
            <Col className="gutter-row" xs={24} sm={12} md={12} lg={8}>
              <ProfileCardImage
                img={ProfileImage1}
                title="Natalie Dormer"
                smallTitle="Marketing Manager"
                icon1={Facebook}
                icon2={Twitter}
                icon3={Instagram}
                icon4={dibble}
                dividerTitle="121"
                dividerSmallTitle="Post Avg."
                FollowTitle="575"
                FollowSmallTitle="Followers"
                FollowingTitle="632"
                FollowingSmallTitle="Following"
              />
            </Col>
            <Col className="gutter-row gutter-m" xs={24} sm={12} md={12} lg={8}>
              <ProfileCardImage
                img={ProfileImage1}
                title="Natalie Dormer"
                smallTitle="Marketing Manager"
                icon1={Facebook}
                icon2={Twitter}
                icon3={Instagram}
                icon4={dibble}
                dividerTitle="121"
                dividerSmallTitle="Post Avg."
                FollowTitle="575"
                FollowSmallTitle="Followers"
                FollowingTitle="632"
                FollowingSmallTitle="Following"
              />
            </Col>
          </Row>
        </section>
      </main>
      )}
    </div>
  );
};

function ProfileCardImage({
  img,
  icon1,
  icon2,
  icon3,
  icon4,
  title,
  smallTitle,
  dividerTitle,
  dividerSmallTitle,
  FollowSmallTitle,
  FollowTitle,
  FollowingTitle,
  FollowingSmallTitle
}) {
  return (
    <Card style={{marginBottom: "30px", padding:"0px"}}>
      <div className="cover-img">
        <img src={coverImage} alt="" />
      </div>
      <div className="profile-main-section">
        <div className="profile-img">
          <img src={img} alt="" />
        </div>
        <div
          className="friends-content"
          style={{ marginTop: "30px", fontSize: "14px" }}
        >
          <p>{title}</p>
          <small>{smallTitle}</small>
        </div>
        <div className="profile-icons">
          <div className="icon1">
            <img src={icon1} alt="" />
          </div>
          <div className="icon1">
            <img src={icon2} alt="" />
          </div>
          <div className="icon1">
            <img src={icon3} alt="" />
          </div>
          <div className="icon1">
            <img src={icon4} alt="" />
          </div>
        </div>
        <Divider />
        <div className="grading-main">
          <div className="grading-one">
            <h3>{dividerTitle}</h3>
            <small>{dividerSmallTitle}</small>
          </div>
          <div className="grading-one">
            <h3>{FollowTitle}</h3>
            <small>{FollowSmallTitle}</small>
          </div>
          <div className="grading-one">
            <h3>{FollowingTitle}</h3>
            <small>{FollowingSmallTitle}</small>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default UserGird;
