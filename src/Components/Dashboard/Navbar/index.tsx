import { Avatar, Col, Row } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useEffect } from "react";
import "./index.css";
import { Image, Typography } from "antd";
import { LoginOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Index() {
  const { first_name } = useSelector((state) => (state as any)?.users?.data);
  console.log("🚀 ~ file: index.tsx:13 ~ Index ~ first_name:", first_name);
  //OpenSettting
  const navigate = useNavigate();
  const OpenSettting = () => {
    navigate("/settings");
  };
  useEffect(() => {}, []);
  return (
    <Header style={{ backgroundColor: "#FFF" }}>
      <Row justify={"space-between"}>
        <Col lg={1}>
          <b style={{ fontWeight: 1000, fontSize: "22px", width: "122px" }}>
            {" "}
            Dashboard
          </b>
        </Col>
        <Col>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div className="settingButton">
              <Image
                preview={false}
                onClick={OpenSettting}
                src={"/assets/images/logos/Setting.svg"}
              />
            </div>
            <div style={{ marginRight: "5px" }}>
              <Avatar
                style={{ backgroundColor: "#286FD1", verticalAlign: "middle" }}
                size="large"
                gap={3}
              >
                {<>{first_name.charAt(0)}</>}
              </Avatar>
            </div>
            <div className="UserName">
              <Typography
                style={{
                  height: "30px",
                  fontWeight: 700,
                  textAlign: "start",
                  paddingTop: "10px",
                }}
              >
                {first_name}
              </Typography>
              <Typography
                style={{
                  height: "30px",
                  fontWeight: 500,
                  paddingBottom: "10px",
                  textAlign: "start",
                  fontSize: "12px",
                }}
              >
                My Profile
              </Typography>
              {/* <Col lg={24}>ghdrfh
                        </Col> */}
            </div>
            {/* <div className="User" style={{ display: 'flex', flexDirection: 'column', maxWidth: '64px' }}>
                        <span>dsj</span>
                        <br />
                        <span>dscs</span>
                    </div> */}
            <LoginOutlined
              onClick={() => {
                localStorage.removeItem("activeUser");
                navigate("/");
              }}
              style={{ fontSize: "25px", marginRight: "10px" }}
            />
          </div>
        </Col>
      </Row>
    </Header>
  );
}
