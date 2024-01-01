/* eslint-disable react/no-unescaped-entities */
import { Button, Col, Divider, Form, Input, Row, Switch, message } from "antd";
import { useNavigate } from "react-router-dom";
import logoimg from "../../../assets/logo.svg";
import Buttons from "../Login/Button";
import "../Login/login.css";

const Register = () => {
  const navigate = useNavigate();

  const HandleLogin = () => {
    navigate("/");
    message.success("You Logged In Successfully test");
  };

  return (
    <div>
      <div className="login-container">
        <div className="Signup-main">
          <img
            src={logoimg}
            style={{ width: "50px", margin: "0 auto", display: "flex" }}
            alt=""
          />
          <h3 style={{ marginTop: "20px" }}>Sign In to Uko</h3>
          <Buttons />
          <div className="divider">
            <Divider>
              <span>Or</span>
            </Divider>
          </div>
          <Form>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item name="name">
                  <Input placeholder="Name" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="email">
                  <Input placeholder="Email" size="large" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24}>
                <Form.Item name="password">
                  <Input placeholder="Password" type="password" size="large" />
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <div className="Switch-main">
            <div className="switch-one">
              <Switch defaultChecked />
              <span className="span">Remember Me</span>
            </div>
            <div className="switch-one">
              <small>Forgot Password?</small>
            </div>
          </div>
          <div className="signup-button">
            <Button
              style={{ width: "100%", marginTop: "20px" }}
              type="primary"
              onClick={HandleLogin}
            >
              <p>Sign in</p>
            </Button>
            <div className="create-title">
              <small>
                Don't have an account? <span> Create an account</span>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
