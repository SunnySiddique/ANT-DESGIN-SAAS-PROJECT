import { Card, Col, Image, Row, Tabs } from "antd";
import galleryImage1 from "../../../../assets/post-2.png";
import galleryImage2 from "../../../../assets/post-3.png";
import galleryImage3 from "../../../../assets/post-4.png";
import galleryImage4 from "../../../../assets/post-5.png";

import "./gallery.css";

const Gallery = () => {
  const items = [
    {
      key: "1",
      label: (
        <div className="tab-titles">
          <p>All</p>
        </div>
      ),
      children: (
        <Row gutter={24}>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage1} />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage2} />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage3} />
          </Col>
          <Col
            style={{ marginBottom: "20px" }}
            className="gutter-row"
            xs={24}
            sm={12}
            md={8}
            lg={6}
          >
            <GalleryImageCard img={galleryImage4} />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage2} />
          </Col>
        </Row>
      ),
    },
    {
      key: "2",
      label: (
        <div className="tab-titles">
          <p>Branding</p>
        </div>
      ),
      children: (
        <Row gutter={24}>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage1} />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage2} />
          </Col>
          <Col className="gutter-row" xs={24} sm={12} md={8} lg={6}>
            <GalleryImageCard img={galleryImage4} />
          </Col>
        </Row>
      ),
    },
    {
      key: "3",
      label: (
        <div className="tab-titles">
          <p>Fashion</p>
        </div>
      ),
      children: (
        <Row gutter={24}>
          <Col className="gutter-row" lg={6}>
            <GalleryImageCard img={galleryImage1} />
          </Col>
          <Col className="gutter-row" lg={6}>
            <GalleryImageCard img={galleryImage2} />
          </Col>
          <Col className="gutter-row" lg={6}>
            <GalleryImageCard img={galleryImage3} />
          </Col>
        </Row>
      ),
    },
    {
      key: "4",
      label: (
        <div className="tab-titles">
          <p>Development</p>
        </div>
      ),
      children: (
        <Row gutter={24}>
          <Col className="gutter-row" lg={6}>
            <GalleryImageCard img={galleryImage3} />
          </Col>
          <Col className="gutter-row" lg={6}>
            <GalleryImageCard img={galleryImage1} />
          </Col>
        </Row>
      ),
    },
  ];

  const onChange = (key) => {
    console.log(key);
  };
  return (
    <>
      <main>
        <section>
          <Card>
            <div className="gallery-tabs">
              <Tabs items={items} centered onChange={onChange} />
            </div>
          </Card>
        </section>
      </main>
    </>
  );
};

function GalleryImageCard({ img }) {
  return (
    <div className="Children-main-img">
      <div className="children-img">
        <Image
          style={{ cursor: "pointer", width: "100%", height: "100%" }}
          src={img}
          alt=""
        />
      </div>
    </div>
  );
}

export default Gallery;
