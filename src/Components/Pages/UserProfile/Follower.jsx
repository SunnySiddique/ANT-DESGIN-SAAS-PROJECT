import { Button } from "@mui/material";
import { Card, Col, Row } from "antd";
import img2 from '../../../assets/SvgImage/040-man-11 (1).svg';
import img1 from "../../../assets/SvgImage/040-man-11.svg";
import img5 from '../../../assets/SvgImage/041-woman-11 (1).svg';
import { default as img3, default as img4 } from '../../../assets/SvgImage/041-woman-11.svg';
import img6 from '../../../assets/SvgImage/042-vampire.svg';
import img7 from '../../../assets/SvgImage/043-chef.svg';
import img9 from '../../../assets/SvgImage/044-farmer (1).svg';
import img8 from '../../../assets/SvgImage/044-farmer.svg';
import './Follower.css';

const Follower = () => {
  return (
    <div>
      <main>
        <section>
          <Row gutter={24}>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img1}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img2}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img3}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img4}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img5}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img6}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img7}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img8}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img9}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img3}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img2}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
            <Col className="gutter-row" style={{marginBottom: "25px"}} xs={24} sm={12} md={8} lg={8}>
              <FollowerCard
                img={img9}
                title="Mr. Breast"
                smallTitle="Product Designer"
                followerTitle="Following"
              />
            </Col>
          </Row>
        </section>
      </main>
    </div>
  );
};
const FollowerCard = ({ img, title, smallTitle, followerTitle }) => {
  return (
    <Card>
      <div className="follower-main">
        <div className="follower-img">
          <div className="image">
          <img src={img} alt={title} />
          </div>
          <div className="follower-title">
            <p>{title}</p>
            <small>{smallTitle}</small>
          </div>
        </div>
        <div className="follower-content">
            <Button>{followerTitle}</Button>
        </div>
      </div>
    </Card>
  );
};

export default Follower;
