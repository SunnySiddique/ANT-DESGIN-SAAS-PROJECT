import { Card, Col, Row } from "antd";
import laptopImg from '../../../assets/sass-dashboard.svg';
import ImgCard from "./ImgCard";
import AntDesignTable from "./Table";

const DashboradTable = () => {
  return (
    <div>
      <main style={{height: "74vh"}}>
        <section>
          <Row gutter={24}>
            <Col className="gutter-row" xs={24} sm={24} md={16} lg={16}>
              <Card
                style={{
                  borderRadius: "2px",
                  marginBottom: "20px",
                }}
              >
                <AntDesignTable />
              </Card>
            </Col>
            <Col className="gutter-row" xs={24} sm={24} md={16} lg={8}>
              <Card style={{ height: "38vh", borderRadius: "2px", marginBottom:"20px" }}>
                <ImgCard />
              </Card>
            </Col>
          </Row>
        </section>
        <section>
          <Row gutter={24}>
          <Col xs={24} sm={24} md={12} lg={12} xl={24} className="gutter-row">
              <Card style={{ borderRadius: "2px" }} className="flex-none">
                <div className="uko-dashboard-main">
                  <div className="uko-title-main">
                    <p>Uko Dashboard & UI kit</p>
                    <span>Clean design & code for your next project.</span>
                    <div className="button-des">
                    <button>Buy Now</button>
                    </div>
                  </div>
                    <div className="laptop-img">
                      <img src={laptopImg} alt="" />
                    </div>
                </div>
              </Card>
            </Col>  
          </Row>
        </section>
      </main>
    </div>
  );
};

export default DashboradTable;
