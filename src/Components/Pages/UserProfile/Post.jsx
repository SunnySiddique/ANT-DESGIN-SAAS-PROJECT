import { HeartFilled, MoreOutlined } from "@ant-design/icons";
import { FaComments } from "react-icons/fa6";
import { IoIosShareAlt } from "react-icons/io";
import profileImg from "../../../assets/user-10.png";

const Post = ({ showImage = true, postImage }) => {
  return (
    <>
      <div className="profile-main">
        <div className="profile-content">
          <img src={profileImg} alt="" />
          <div className="profile-title">
            <p>Martha Hawk</p>
            <small>22 June 2020</small>
          </div>
        </div>
        <div className="profile-icon">
          <MoreOutlined />
        </div>
      </div>

      <div className="post-main">
        <div className="post-title">
          <p>Coffee and Afternoon</p>
        </div>
        <div className="post-img">
          <div
            className="post-img"
            style={{ display: showImage ? "block" : "none" }}
          >
            <img style={{width: "100%", height: "100%", objectFit: "cover"}} src={postImage} alt="" />
          </div>
        </div>
        <div className="post-icon-main">
          <div className="post-icon">
            <HeartFilled />
            <div className="post-icon-one">
              <span>150</span>
            </div>
          </div>
          <div className="post-icon">
            <FaComments />
            <div className="post-icon-one">
              <span>15</span>
            </div>
          </div>
          <div className="post-icon">
            <svg
              style={{ width: "18px" }}
              className="MuiSvgIcon-root MuiSvgIcon-colorDisabled MuiSvgIcon-fontSizeSmall css-31fykh"
              focusable="false"
              viewBox="0 0 23 21"
              aria-hidden="true"
            >
              <path
                d="M21.3406 10.707C20.487 10.707 20.0602 11.1188 20.0602 11.9423V16.0598C20.0602 17.2951 18.7797 18.5303 17.4993 18.5303H5.12173C3.8413 18.5303 2.56087 17.2951 2.56087 16.0598V11.9423C2.56087 11.1188 2.13404 10.707 1.28042 10.707C0.426793 10.707 0 11.1188 0 11.9423V16.0598C0 18.9421 2.13405 21.0008 5.12173 21.0008H17.4993C20.487 21.0008 22.621 18.9421 22.621 16.0598V11.9423C22.621 11.5305 22.1942 10.707 21.3406 10.707Z"
                fill="currentColor"
              ></path>
              <path
                d="M5.97561 6.99978L9.8169 3.29401V14.4113C9.8169 15.2348 10.2437 15.6466 11.0974 15.6466C11.951 15.6466 12.3778 15.2348 12.3778 14.4113V3.70576L16.2191 7.41153C16.6459 7.82328 17.4995 7.82328 17.9263 7.41153C18.3532 6.99978 18.3532 6.17627 17.9263 5.76452L11.951 0C11.951 0 11.951 0 11.5242 0H11.0974H10.6705C10.6705 0 10.6706 0 10.2437 0L4.26835 5.76452C3.84154 6.17627 3.84154 6.99978 4.26835 7.41153C4.26835 7.82328 5.12198 7.82328 5.97561 6.99978Z"
                fill="currentColor"
              ></path>
            </svg>
            <div className="post-icon-one">
              <span>15</span>
            </div>
          </div>
          <div className="post-icon">
            <IoIosShareAlt />
            <div className="post-icon-one">
              <span>12</span>
            </div>
          </div>
        </div>
      </div>

      <div className="input-main">
        <div className="input-img">
          <img
            src={profileImg}
            alt=""
          />
        </div>
        <div className="inputs">
          <input type="text" placeholder="Write a comment" />
        </div>
      </div>
    </>
  );
};

export default Post;
