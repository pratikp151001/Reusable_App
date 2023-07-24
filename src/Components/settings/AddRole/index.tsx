import { Col, Form, Input, Row } from "antd";
import TextArea from "antd/es/input/TextArea";
import React from "react";

export default function index() {
  return (
    <>
      <Row justify="start">
        <Col xs={24} md={24} lg={24} sm={24}>
          <label> {"Add OrganizationName"}</label>
          <Form.Item
            className="formItem"
            name={"OrganizationName"}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter Role Name",
              },
            ]}
          >
            <Input placeholder={"Please Enter Role Name"} size="large" />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="start">
        <Col xs={24} md={24} lg={24} sm={24}>
          <label> {"Description"}</label>
          <Form.Item
            className="formItem"
            name={"description"}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: "Please enter Description",
              },
            ]}
          >
            <TextArea rows={4} placeholder={"Please Enter Description"} />
          </Form.Item>
        </Col>
      </Row>
    </>
  );
}
