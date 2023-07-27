import React from "react";
import {
  Layout,
  Space,
  Image,
  Col,
  Row,
  Form,
  Input,
  Typography,
  Button,
} from "antd";
import registerImage from "../../assets/images/Log-In/Group 87 (1).svg";
import AnimalImage from "../../assets/images/Log-In/Mask Group 1@2x.png";
import XeroImage from "../../assets/images/Log-In/Mask Group 27@2x.png";
import { Content } from "antd/es/layout/layout";
import "./index.css";
import { registerFormData } from "../../constants/RegistrationForm";
import { Link, useNavigate } from "react-router-dom";
import { LeftOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { RegisterUser } from "../../redux/Slices/RegisterUserSlice";

const { Title } = Typography;

export default function Index() {
  const dispatch = useDispatch();
  const contentStyle: React.CSSProperties = {
    textAlign: "center",
    minHeight: "100vh",
    lineHeight: "120px",
    color: "#fff",
    backgroundColor: "#fff",
  };

  const navigate = useNavigate();

  function onFinish(values: any) {
    values.superAdmin = true;
    values.status = true;

    dispatch(RegisterUser(values)).then(navigate("/login"));
    // navigate("/dashboard");
  }
  const onFinishFailed = (errorInfo: any) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }} size={[0, 48]}>
      <Layout>
        <Content style={contentStyle}>
          <Row style={{ height: "100vh" }}>
            <Col xs={24} sm={24} md={10} lg={10} className="RegiterImageCol">
              <Image
                width={"100%"}
                height={"520px"}
                src={registerImage}
                preview={false}
                className="RegiterImage"
              />
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} className="formside">
              <Form
                name="basic"
                labelCol={{ span: 8 }}
                wrapperCol={{ span: 16 }}
                style={{ maxWidth: 600 }}
                initialValues={{ remember: true }}
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
                autoComplete="off"
              >
                <Image width={"15%"} src={AnimalImage} preview={false} />
                <div className="RegisterText">
                  <Title level={2}>Register</Title>
                  <Title level={5} className="backbtn">
                    <LeftOutlined /> Back
                  </Title>
                </div>
                <Title level={5}>
                  Welcome to animal planet! Please Enter your Details for
                  registration
                </Title>

                <div className="grid-container">
                  {registerFormData?.map((item, index) => (
                    <div className="grid-item" key={index}>
                      <label className="register-form-label">
                        {item?.icon}
                        {item?.title} {item?.required && "*"}
                      </label>
                      <Form.Item
                        className="formItem"
                        name={item?.name}
                        rules={item?.rules as []}
                        wrapperCol={{ span: 24 }}
                      >
                        {item?.type === "password" ? (
                          <Input.Password
                            placeholder={item?.placeholder}
                            size="large"
                          />
                        ) : item?.type === "number" ? (
                          <Input
                            placeholder={item?.placeholder}
                            size="large"
                            type="number"
                          />
                        ) : (
                          <Input placeholder={item?.placeholder} size="large" />
                        )}
                      </Form.Item>
                    </div>
                  ))}
                </div>

                <Form.Item wrapperCol={{ span: 24 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block={true}
                    size="large"
                  >
                    Register Now!
                  </Button>
                </Form.Item>
                {/* <div > */}
                <Row justify="center" gutter={24} className="SignInOptions">
                  <Col xs={24} md={24} lg={8} sm={24}>
                    <Button
                      className="Intuit"
                      type="primary"
                      block={true}
                      size="large"
                      style={{ backgroundColor: "#0B78C2" }}
                    >
                      Sign In With Intuit
                    </Button>
                  </Col>
                  <Col xs={24} md={24} lg={8} sm={24}>
                    <Button className="Xero" block={true} size="large">
                      <Image src={XeroImage} width={"25px"} />
                      Sign In With Xero
                    </Button>
                  </Col>
                  {/* </div> */}
                </Row>
                <p style={{ color: "black" }}>
                  Already have Account?<Link to={"/login"}>Login Now!</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Content>
      </Layout>
    </Space>
  );
}
