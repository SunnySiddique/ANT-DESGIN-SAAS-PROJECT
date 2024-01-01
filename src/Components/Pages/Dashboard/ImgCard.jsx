import { Rate } from "antd";
import balckImage from "../../../assets/black-keds.png";
import GreenImage from "../../../assets/green-keds.png";
import YellowImage from "../../../assets/yellow-keds.png";

const ImgCard = () => {
  return (
    <>
      <div className="img-card-title">
        <h3>Top selling Products</h3>
        {imgCard(
          "Nike airmax 170",
          <Rate style={{ fontSize: "14px" }} defaultValue={5} disabled />,
          "$567",
          balckImage
        )}
        {imgCard(
          "Nike airmax 170",
          <Rate style={{ fontSize: "14px" }} defaultValue={5} disabled />,
          "$200",
          GreenImage
        )}
        {imgCard(
          "Nike airmax 170",
          <Rate style={{ fontSize: "14px" }} defaultValue={5} disabled />,
          "$400",
          YellowImage
        )}
      </div>
    </>
  );
};

function imgCard(title, rating, doral, img) {
  return (
    <div className="img-card-main">
      <div className="image">
        <img style={{ width: "55px" }} src={img} alt="" />
      </div>
      <div className="img-card-titles">
        <p>{title}</p>
        {rating} <br />
        <span>{doral}</span>
      </div>
    </div>
  );
}

export default ImgCard;
