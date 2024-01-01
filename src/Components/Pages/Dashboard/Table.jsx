import { Space, Table } from "antd";
const AntDesignTable = () => {
  // Define your data
  const dataSource = [
    {
      key: "1",
      name: "#JY7685",
      proname: "Nike Air max 170",
      price: "$654",
      order: (
        <div className="border-title">
          <p>325</p>
        </div>
      ),
      amount: "$1,45,660",
      imgSrc: "https://uko-react-free.netlify.app/static/products/shoe-1.png"
    },
    {
      key: "2",
      name: "#JY7686",
      proname: "Cactus Plant",
      price: "$654",
      order: (
        <div className="border-title">
          <p>40</p>
        </div>
      ),
      amount: "$1,45,420",
      imgSrc: "https://uko-react-free.netlify.app/static/products/bonsai.png"
    },
    {
      key: "3",
      name: "#JY7686",
      proname: "Cactus Plant",
      price: "$654",
      order: (
        <div className="border-title">
          <p>57</p>
        </div>
      ),
      amount: "$1,45,420",
      imgSrc: "https://uko-react-free.netlify.app/static/products/airbud.png"
    },
    {
      key: "4",
      name: "#JY7686",
      proname: "Cactus Plant",
      price: "$654",
      order: (
        <div className="border-title">
          <p>125</p>
        </div>
      ),
      amount: "$1,45,420",
      imgSrc: "https://uko-react-free.netlify.app/static/products/shoe-2.png"
    },
  ];

  // Define columns
  const columns = [
    {
      title: <div className="title-table">Tracking No</div>,
      dataIndex: "name",
      key: "name",
    },
    {
      title: <div className="title-table">Product Name</div>,
      dataIndex: "proname",
      key: "proname",
      render: (text, record) => (
        <Space>
          <img src={record.imgSrc} alt={record.proname} style={{ width: '24px', height: '24px' }} />
          {text}
        </Space>
      ),
    },
    {
      title: <div className="title-table">Price</div>,
      dataIndex: "price",
      key: "price",
    },
    {
      title: <div className="title-table">Total Order</div>,
      dataIndex: "order",
      key: "order",
    },
    {
      title: <div className="title-table"> Total amount</div>,
      dataIndex: "amount",
      key: "amount",
    },
  ];

  return <Table dataSource={dataSource} scroll={{x: true}} columns={columns} pagination={false} />;
};

export default AntDesignTable;
