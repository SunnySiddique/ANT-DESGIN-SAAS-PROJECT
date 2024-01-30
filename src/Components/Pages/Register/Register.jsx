/* eslint-disable react/no-unescaped-entities */
import { Alert, Button, Col, Divider, Form, Input, Row, Switch } from "antd";
import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logoimg from "../../../assets/logo.svg";
import Buttons from "../Login/Button";

import { app } from "../../../../Firebase";
import "../Login/login.css";

const auth = getAuth(app);

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const gooleProvider = new GoogleAuthProvider();

  const HandleLogin = async () => {
    setError("");
    if (!name && !email && !password) {
      setError("Fill the all dtails!");
    } else if (!name) {
      setError("Enter your name!");
    } else if (!email) {
      setError("Enter your email!");
    } else if (!password) {
      setError("Enter your password!");
    } else {
      try {
        await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(auth.currentUser, {
          displayName: name,
        });
        navigate("/");
      } catch (error) {
        setError(error.message);
      }
    }
  };

  const SignWithGoogle = () => {
    signInWithPopup(auth, gooleProvider);
  };

  onAuthStateChanged(auth, (user) => {
    if (user) {
      navigate("/");
    }
  });

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
          {error && (
            <Alert message={error} type="error">
              {error}
            </Alert>
          )}
          <Buttons SignWithGoogle={SignWithGoogle} />
          <div className="divider">
            <Divider>
              <span>Or</span>
            </Divider>
          </div>
          <Form>
            <Row gutter={[16, 16]}>
              <Col xs={24} sm={12}>
                <Form.Item name="name">
                  <Input
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    placeholder="Name"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={12}>
                <Form.Item name="email">
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    type="email"
                    placeholder="Email"
                    size="large"
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24}>
                <Form.Item name="password">
                  <Input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                    placeholder="Password"
                    type="password"
                    size="large"
                  />
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
              <p>Sign Up</p>
            </Button>
            <div className="create-title">
              <small>
                Don't have an account? <Link to="/"> Log In</Link>
              </small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
