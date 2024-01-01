import { CameraOutlined } from "@ant-design/icons";
import { Card, Col, Row, Spin, Switch, Upload } from "antd";
import ImgCrop from "antd-img-crop";
import { useEffect, useState } from "react";
import AppHeader from "../../AppHeader/AppHeader";
import "./Adduser.css";
import Forms from "./Form";

const AddUser = () => {
  const [loading, setLoading] = useState(true);

  const [fileList, setFileList] = useState([
    {
      uid: "-1",
      name: "image.png",
      status: "done",
      url: "https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png",
    },
  ]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);
  

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList.slice(-1)); // Keep only the last item in the list (latest uploaded image)
  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow?.document.write(image.outerHTML);
  };
  return (
    <div>
      <AppHeader />
      {loading ? (
        <div className="spin" style={{padding: "20px" }}>
          <Spin size="large" />
        </div>
      ) : (
      <Card>
        <Row gutter={24}>
          <Col className="gutter-row" lg={8} md={12} xs={24}>
            <Card className="card">
              <div
                className="mains"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <div className="upload-main">
                  <ImgCrop rotationSlider maxCount={1}>
                    <Upload
                      action="https://run.mocky.io/v3/435e224c-44fb-4773-9faf-380c5e6a2188"
                      listType="picture-card"
                      fileList={fileList}
                      onChange={onChange}
                      onPreview={onPreview}
                    >
                      {fileList.length === 0 ? (
                        <div className="icon-child">
                          <CameraOutlined
                            style={{ fontSize: "48px", color: "#999" }}
                          />
                        </div>
                      ) : null}
                    </Upload>
                  </ImgCrop>
                </div>
                <div className="profile-cmera-title">
                  <small>
                    Allowed *.jpeg, *.jpg, *.png, *.gif max size of 3.1 MB
                  </small>
                </div>
              </div>

              <div className="switch-main">
                <div className="public-profile">
                  <span>Public Profile</span>
                </div>
                <div className="public-switch">
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="switch-main">
                <div className="public-profile">
                  <span>Banned</span>
                  <small>Apply disable account</small>
                </div>
                <div className="public-switch">
                  <Switch defaultChecked />
                </div>
              </div>
              <div className="switch-main">
                <div className="public-profile">
                  <span>Email Verified</span>
                  <small>
                      Allow all app
                  </small>
                </div>
                <div className="public-switch">
                  <Switch defaultChecked />
                </div>
              </div>
            </Card>
          </Col>
          <Col className="gutter-row" lg={16} md={12} xs={24}>
            <Card>
              <Forms />
            </Card>
          </Col>
        </Row>
      </Card>
      )}
    </div>
  );
};

export default AddUser;
