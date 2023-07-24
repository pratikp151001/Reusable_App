import { Input, Form } from "antd";
import React from "react";
import { AddUserDrawerBody } from "../../../constants/AddUserDrawer";

export default function Index() {
  return (
    <div className="AddUser">
      <div className="grid-container">
        {AddUserDrawerBody.map((item, index) => (
          <div className="grid-item" key={index}>
            <label> {item?.title}</label>
            <Form.Item
              className="formItem"
              name={item?.name}
              wrapperCol={{ span: 24 }}
              rules={item?.rules as []}
            >
              {item?.type === "number" ? (
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
    </div>
  );
}
