import "./dashboard.css";

import { Card, Col, Row, Select, Spin } from "antd";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { app } from "../../../../Firebase";
import AppHeader from "../../AppHeader/AppHeader";
import ColumanCharts from "./Columan";
import DashboradTable from "./DashboradTable";
import MultipleChats from "./MultipleChats";

const auth = getAuth(app);

const Dashboard = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const svgIcon1 = (
    <div className="svg-icons">
      <svg
        style={{ width: "25px" }}
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-jpg73"
        focusable="false"
        viewBox="0 0 34 34"
        aria-hidden="true"
      >
        <path
          d="M30.6312 13.0397H24.0766L18.083 4.06301C17.823 3.67986 17.3851 3.48828 16.9472 3.48828C16.5093 3.48828 16.0714 3.67986 15.8114 4.07669L9.81783 13.0397H3.26318C2.51056 13.0397 1.89478 13.6555 1.89478 14.4081C1.89478 14.5313 1.90846 14.6544 1.94951 14.7776L5.42525 27.4627C5.73999 28.6122 6.79366 29.4606 8.05259 29.4606H25.8418C27.1008 29.4606 28.1544 28.6122 28.4828 27.4627L31.9586 14.7776L31.9996 14.4081C31.9996 13.6555 31.3839 13.0397 30.6312 13.0397ZM16.9472 7.29244L20.7787 13.0397H13.1157L16.9472 7.29244ZM25.8418 26.7238L8.06627 26.7374L5.05579 15.7765H28.8523L25.8418 26.7238ZM16.9472 18.5133C15.442 18.5133 14.2104 19.7449 14.2104 21.2501C14.2104 22.7554 15.442 23.987 16.9472 23.987C18.4524 23.987 19.684 22.7554 19.684 21.2501C19.684 19.7449 18.4524 18.5133 16.9472 18.5133Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
  const svgIcon2 = (
    <div className="svg-icon-one">
      <svg
        style={{
          width: "25px",
          color: "rgb(167, 152, 255)",
          // backgroundColor: "rgba(167, 152, 255, 0.2)",
        }}
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-4x7w4i"
        focusable="false"
        viewBox="0 0 20 20"
        aria-hidden="true"
      >
        <path
          d="M2.28393 6.3137H2.55761C3.61128 6.3137 4.47337 7.17579 4.47337 8.22946V17.8083C4.47337 18.862 3.61128 19.724 2.55761 19.724H2.28393C1.23026 19.724 0.368164 18.862 0.368164 17.8083V8.22946C0.368164 7.17579 1.23026 6.3137 2.28393 6.3137V6.3137ZM9.94698 0.566406C11.0007 0.566406 11.8627 1.4285 11.8627 2.48217V17.8083C11.8627 18.862 11.0007 19.724 9.94698 19.724C8.89331 19.724 8.03122 18.862 8.03122 17.8083V2.48217C8.03122 1.4285 8.89331 0.566406 9.94698 0.566406ZM17.61 11.5136C18.6637 11.5136 19.5258 12.3757 19.5258 13.4294V17.8083C19.5258 18.862 18.6637 19.724 17.61 19.724C16.5564 19.724 15.6943 18.862 15.6943 17.8083V13.4294C15.6943 12.3757 16.5564 11.5136 17.61 11.5136V11.5136Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
  const svgIcon3 = (
    <div className="svg-icon-two">
      <svg
        style={{
          width: "25px",
          color: "rgb(255, 107, 147)",
        }}
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-lah1y0"
        focusable="false"
        viewBox="0 0 18 18"
        aria-hidden="true"
        width="18"
        height="18"
      >
        <path
          d="M17.0996 9.59961H10.4996C10.0026 9.59961 9.59961 10.0026 9.59961 10.4996V17.0996C9.59961 17.5967 10.0026 17.9996 10.4996 17.9996H17.0996C17.5967 17.9996 17.9996 17.5967 17.9996 17.0996V10.4996C17.9996 10.0026 17.5967 9.59961 17.0996 9.59961Z"
          fill="currentColor"
        ></path>
        <path
          d="M7.5 9.59961H0.9C0.402944 9.59961 0 10.0026 0 10.4996V17.0996C0 17.5967 0.402944 17.9996 0.9 17.9996H7.5C7.99706 17.9996 8.4 17.5967 8.4 17.0996V10.4996C8.4 10.0026 7.99706 9.59961 7.5 9.59961Z"
          fill="currentColor"
        ></path>
        <path
          d="M17.0996 0H10.4996C10.0026 0 9.59961 0.402944 9.59961 0.9V7.5C9.59961 7.99706 10.0026 8.4 10.4996 8.4H17.0996C17.5967 8.4 17.9996 7.99706 17.9996 7.5V0.9C17.9996 0.402944 17.5967 0 17.0996 0Z"
          fill="currentColor"
        ></path>
        <path
          d="M7.5 0H0.9C0.402944 0 0 0.402944 0 0.9V7.5C0 7.99706 0.402944 8.4 0.9 8.4H7.5C7.99706 8.4 8.4 7.99706 8.4 7.5V0.9C8.4 0.402944 7.99706 0 7.5 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );
  const svgIcon4 = (
    <div className="svg-icon-two">
      <svg
        style={{
          width: "25px",
          color: "rgb(255, 107, 147)",
        }}
        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-lah1y0"
        focusable="false"
        viewBox="0 0 18 18"
        aria-hidden="true"
        width="18"
        height="18"
      >
        <path
          d="M17.0996 9.59961H10.4996C10.0026 9.59961 9.59961 10.0026 9.59961 10.4996V17.0996C9.59961 17.5967 10.0026 17.9996 10.4996 17.9996H17.0996C17.5967 17.9996 17.9996 17.5967 17.9996 17.0996V10.4996C17.9996 10.0026 17.5967 9.59961 17.0996 9.59961Z"
          fill="currentColor"
        ></path>
        <path
          d="M7.5 9.59961H0.9C0.402944 9.59961 0 10.0026 0 10.4996V17.0996C0 17.5967 0.402944 17.9996 0.9 17.9996H7.5C7.99706 17.9996 8.4 17.5967 8.4 17.0996V10.4996C8.4 10.0026 7.99706 9.59961 7.5 9.59961Z"
          fill="currentColor"
        ></path>
        <path
          d="M17.0996 0H10.4996C10.0026 0 9.59961 0.402944 9.59961 0.9V7.5C9.59961 7.99706 10.0026 8.4 10.4996 8.4H17.0996C17.5967 8.4 17.9996 7.99706 17.9996 7.5V0.9C17.9996 0.402944 17.5967 0 17.0996 0Z"
          fill="currentColor"
        ></path>
        <path
          d="M7.5 0H0.9C0.402944 0 0 0.402944 0 0.9V7.5C0 7.99706 0.402944 8.4 0.9 8.4H7.5C7.99706 8.4 8.4 7.99706 8.4 7.5V0.9C8.4 0.402944 7.99706 0 7.5 0Z"
          fill="currentColor"
        ></path>
      </svg>
    </div>
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(auth.currentUser);
    } else {
      navigate("/");
    }
  });

  return (
    <>
      <AppHeader title="Saas" />
      {loading ? (
        <div className="spin" style={{ padding: "20px" }}>
          <Spin size="large" />
        </div>
      ) : (
        <main>
          <section className="section">
            <Row gutter={24}>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <DashboradCard
                  icon={svgIcon1}
                  title="All Spending"
                  doralTitle="$574"
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <DashboradCard
                  icon={svgIcon2}
                  title="Earnings"
                  doralTitle="$521"
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <DashboradCard
                  icon={svgIcon3}
                  title="Weekly revenue"
                  doralTitle="$684"
                />
              </Col>
              <Col className="gutter-row" xs={24} sm={12} md={12} lg={6}>
                <DashboradCard
                  icon={svgIcon4}
                  title="New Clients"
                  doralTitle="$321"
                />
              </Col>
            </Row>
          </section>

          <section>
            <Row gutter={24}>
              <Col xs={24} sm={24} md={16} lg={16}>
                <Card
                  style={{
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
                >
                  <div className="Total-spent">
                    <h3>Total Spent</h3>
                    <p>$682.5</p>
                  </div>
                  <ColumanCharts />
                </Card>
              </Col>
              <Col xs={24} sm={24} md={8} lg={8}>
                <Card
                  style={{
                    height: "55vh",
                    borderRadius: "2px",
                    marginBottom: "20px",
                  }}
                >
                  <div className="multipla-text-main">
                    <div className="analytics-title">
                      <p>Analytics</p>
                    </div>
                    <div className="select">
                      <Select
                        defaultValue="All Weeks"
                        options={[
                          {
                            value: "2 Weeks Ago",
                            label: "2 weeks ago",
                          },
                          {
                            value: "3 Weeks Ago",
                            label: "3 weeks ago",
                          },
                          {
                            value: "1 Month ago",
                            label: "1 month ago",
                          },
                        ]}
                      ></Select>
                    </div>
                  </div>
                  <MultipleChats />
                  <div className="ball-and-text">
                    <div className="ball-mains-gula">
                      <div className="balls"></div>
                      <div className="ball-text">
                        <p>Sales</p>
                      </div>
                    </div>
                    <div className="ball-mains-gula">
                      <div
                        className="balls"
                        style={{
                          background: "rgb(255, 151, 119)",
                          color: "rgb(255, 151, 119)",
                        }}
                      ></div>
                      <div className="ball-text">
                        <p>Orders</p>
                      </div>
                    </div>
                    <div className="ball-mains-gula">
                      <div
                        className="balls"
                        style={{
                          background: "rgb(255, 107, 147)",
                          color: "rgb(255, 107, 147)",
                        }}
                      ></div>
                      <div className="ball-text">
                        <p>Return</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </Col>
            </Row>
          </section>

          <section>
            <DashboradTable />
          </section>
        </main>
      )}
    </>
  );
};

function DashboradCard({ icon, title, doralTitle }) {
  return (
    <Card
      className="all-card"
      style={{ marginBottom: "20px", width: "100%" }}
      data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500"
    >
      <div className="riuse-card-main">
        <div className="svg-icon">{icon}</div>
        <div className="card-title">
          <h5 className="card-title-one">{title}</h5>
          <h3 className="card-title-two">{doralTitle}</h3>
        </div>
      </div>
    </Card>
  );
}
export default Dashboard;
