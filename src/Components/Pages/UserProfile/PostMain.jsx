import { AliwangwangOutlined } from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { FaLocationDot } from "react-icons/fa6";
import { IoMailSharp } from "react-icons/io5";
import postImage from "../../../assets/post-1.png";
import Post from "./Post";

const PostMain = () => {
  return (
    <div>
      <section style={{ marginBottom: "34px" }}>
        <Row gutter={24}>
          <Col className="gutter-row"  xs={24} sm={24} md={24} lg={10} style={{marginBottom: "20px"}}>
            <Card>
              <div className="icon-text-main" style={{ padding: "30px" }}>
                <div className="f-main">
                  <div className="icon-sec">
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06 usericon"
                      focusable="false"
                      viewBox="0 0 17 16"
                      aria-hidden="true"
                    >
                      <path
                        d="M16.3359 3.60254H15.7383V3.00488C15.7383 2.63812 15.441 2.34082 15.0742 2.34082C14.7075 2.34082 14.4102 2.63812 14.4102 3.00488V3.60254H13.8125C13.4457 3.60254 13.1484 3.89984 13.1484 4.2666C13.1484 4.63336 13.4457 4.93066 13.8125 4.93066H14.4102V5.52832C14.4102 5.89508 14.7075 6.19238 15.0742 6.19238C15.441 6.19238 15.7383 5.89508 15.7383 5.52832V4.93066H16.3359C16.7027 4.93066 17 4.63336 17 4.2666C17 3.89984 16.7027 3.60254 16.3359 3.60254Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M10.4726 7.64439C11.4834 6.86345 12.1357 5.63988 12.1357 4.2666C12.1357 1.91399 10.2217 0 7.86914 0C5.51653 0 3.60254 1.91399 3.60254 4.2666C3.60254 5.63985 4.25485 6.86345 5.26572 7.64439C2.26754 8.69235 0 11.5689 0 15.0742C0 15.441 0.297301 15.7383 0.664062 15.7383H15.0742C15.441 15.7383 15.7383 15.441 15.7383 15.0742C15.7383 11.568 13.469 8.69175 10.4726 7.64439ZM4.93066 4.2666C4.93066 2.64632 6.24886 1.32812 7.86914 1.32812C9.48942 1.32812 10.8076 2.64632 10.8076 4.2666C10.8076 5.88688 9.48942 7.20508 7.86914 7.20508C6.24886 7.20508 4.93066 5.88688 4.93066 4.2666ZM1.36159 14.4102C1.69538 11.1141 4.48651 8.5332 7.86914 8.5332C11.2518 8.5332 14.0429 11.1141 14.3767 14.4102H1.36159Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-text">
                    <p>Following</p>
                    <span>93,675</span>
                  </div>
                </div>

                <div className="f-main">
                  <div
                    className="icon-sec"
                    style={{ backgroundColor: "rgb(255, 151, 119)" }}
                  >
                    <svg
                      className="MuiSvgIcon-root MuiSvgIcon-fontSizeSmall css-1k33q06 usericon"
                      focusable="false"
                      viewBox="0 0 16 16"
                      aria-hidden="true"
                    >
                      <path
                        d="M10.4726 7.64439C11.4834 6.86345 12.1357 5.63988 12.1357 4.2666C12.1357 1.91399 10.2217 0 7.86914 0C5.51653 0 3.60254 1.91399 3.60254 4.2666C3.60254 5.63985 4.25485 6.86345 5.26572 7.64439C2.26754 8.69235 0 11.5689 0 15.0742C0 15.441 0.297301 15.7383 0.664062 15.7383H15.0742C15.441 15.7383 15.7383 15.441 15.7383 15.0742C15.7383 11.568 13.469 8.69175 10.4726 7.64439ZM4.93066 4.2666C4.93066 2.64632 6.24886 1.32812 7.86914 1.32812C9.48942 1.32812 10.8076 2.64632 10.8076 4.2666C10.8076 5.88688 9.48942 7.20508 7.86914 7.20508C6.24886 7.20508 4.93066 5.88688 4.93066 4.2666ZM1.36159 14.4102C1.69538 11.1141 4.48651 8.5332 7.86914 8.5332C11.2518 8.5332 14.0429 11.1141 14.3767 14.4102H1.36159Z"
                        fill="currentColor"
                      ></path>
                      <path
                        d="M15 1V5H13.7927V1.87429H13V1H15Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </div>
                  <div className="icon-text">
                    <p>Followers</p>
                    <span>82,469</span>
                  </div>
                </div>
              </div>
              <hr
                style={{
                  border: "1px solid red",
                  borderColor: "rgb(229, 234, 242)",
                }}
              />
              <div className="About-main">
                <div className="About-title">
                  <p>About</p>
                  <span>
                    Tart I love sugar plum I love oat cake. Sweet roll caramels
                    I love jujubes. Topping cake wafer..
                  </span>
                </div>
                <div className="icons-text-main">
                  <div className="location-icon">
                    <FaLocationDot />
                  </div>
                  <div className="location-title">
                    <p>
                      Lives at <strong>Chhatak</strong>
                    </p>
                  </div>
                </div>
                <div className="icons-text-main">
                  <div className="location-icon">
                    <IoMailSharp />
                  </div>
                  <div className="location-title">
                    <p>
                      Lives at <strong>Chhatak</strong>
                    </p>
                  </div>
                </div>
                <div className="icons-text-main">
                  <div className="location-icon">
                    <AliwangwangOutlined />
                  </div>
                  <div className="location-title">
                    <p>
                      Lives at <strong>Chhatak</strong>
                    </p>
                  </div>
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" xs={24} sm={24} md={24} lg={14}>
            <Card style={{ padding: "24px", marginBottom: "30px" }}>
              <Post postImage={postImage} />
            </Card>
            <Card style={{ padding: "24px" }}>
              <Post showImage={true} />
            </Card>
          </Col>
        </Row>
      </section>
    </div>
  );
};

export default PostMain;
