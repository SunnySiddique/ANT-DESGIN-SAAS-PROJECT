import { Button, Col, Form, Input, Row, message } from "antd";

const Forms = () => {
  const handleForm = (values) => {
    console.log(values);

    // Display a loading message
    const key = "updatable";
    message.loading({ content: "Loading...", key });

    // Simulate an asynchronous operation (e.g., API call)
    setTimeout(() => {
      // Update the message to indicate success
      message.success({ content: "Form Submitted", key, duration: 2 });
    }, 2000);
  };

  return (
    <Form onFinish={handleForm}>
      <Row gutter={24}>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="fullName"
            rules={[
              {
                required: true,
                message: "Name is Required",
              },
            ]}
          >
            <Input placeholder="Full Name" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="emailAddress"
            rules={[
              {
                required: true,
                message: "Email is Required",
              },
            ]}
          >
            <Input placeholder="Email Address" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="phone"
            rules={[
              {
                required: true,
                message: "Phone number is required",
              },
              {
                pattern: /^\d{11}$/, // Assuming a 10-digit phone number
                message: "Invalid phone number",
              },
            ]}
          >
            <Input placeholder="Phone Number" size="large" />
          </Form.Item>
        </Col>

        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="country"
            rules={[
              {
                required: true,
                message: "Country is Required",
              },
            ]}
          >
            <Input placeholder="Country" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="state"
            rules={[
              {
                required: true,
                message: "State is Required",
              },
            ]}
          >
            <Input placeholder="State/Region" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="city"
            rules={[
              {
                required: true,
                message: "City is Required",
              },
            ]}
          >
            <Input placeholder="City" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="address"
            rules={[
              {
                required: true,
                message: "Address is Required",
              },
            ]}
          >
            <Input placeholder="Address" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12}>
          <Form.Item
            name="zip"
            rules={[
              {
                required: true,
                message: "Zip is Required",
              },
            ]}
          >
            <Input placeholder="Zip/Code" size="large" />
          </Form.Item>
        </Col>
        <Col xs={24} sm={12} md={12} lg={24}>
          <Form.Item
            name="about"
            rules={[
              {
                required: true,
                message: "About is Required!",
              },
            ]}
          >
            <Input.TextArea
              placeholder="About"
              style={{ height: "200px", resize: "none" }}
            />
          </Form.Item>
        </Col>
      </Row>

      <Form.Item>
        <Button type="primary" htmlType="submit" danger>
          Create User
        </Button>
      </Form.Item>
    </Form>
  );
};
export default Forms;
