import React from 'react'
import { Layout, Space, Image, Col, Row, Form, Input, Typography, Button, Checkbox } from 'antd'
import LoginImage from "../../assets/images/Log-In/Group 23.svg"
import AnimalImage from "../../assets/images/Log-In/Mask Group 1@2x.png"
import XeroImage from "../../assets/images/Log-In/Mask Group 27@2x.png"
import { Content } from 'antd/es/layout/layout';
import './index.css'
import loginFormData from "../../constants/LoginForm"
import { Link, useNavigate } from 'react-router-dom'

const { Title, Text } = Typography;

export default function Login() {
  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    minHeight: '100vh',
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: '#fff',
  };
  const navigate = useNavigate()


  function onFinish(values: any) {
    console.log("🚀 ~ file: index.tsx:24 ~ onFinish ~ values:", values)
    navigate('/dashboard')

  }
  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Layout>
        <Content style={contentStyle} >
          <Row style={{ height: '100vh' }}>
            <Col xs={24} sm={24} md={10} lg={10} className='LoginImageCol'>
              <Image width={'100%'} height={'520px'} src={LoginImage} preview={false} className='RegiterImage' />
            </Col>
            <Col xs={24} sm={24} md={14} lg={14} className='formside'>
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
                <Image width={'15%'} src={AnimalImage} preview={false} />
                <Title level={2}>Log in</Title>
                <Title level={5}>
                  Welcome to animal planet! Please Enter your Details!!
                </Title>

                <div className="container">

                  {loginFormData?.map((item: any, index: any) => (

                    <div key={index} >
                      <label className="register-form-label">
                        {item?.icon}
                        {item?.title} {item?.required && '*'}
                      </label>
                      <Form.Item className='formItem'
                        name={item?.name}
                        rules={item?.rules as []}
                        wrapperCol={{ span: 24 }}
                      >
                        {item?.type === 'password' ? (
                          <Input.Password
                            placeholder={item?.placeholder}
                            size="large"
                          />
                        ) : item?.type === 'number' ? (
                          <Input
                            placeholder={item?.placeholder}
                            size="large"
                            type="number"
                          />
                        ) : (
                          <Input
                            placeholder={item?.placeholder}
                            size="large"
                          />
                        )}
                      </Form.Item>
                    </div>
                  ))}
                  <Row justify="space-between">
                    <Form.Item
                      wrapperCol={{ span: 24 }} name="remember" valuePropName="checked">
                      <Checkbox>Remember me</Checkbox>
                    </Form.Item>
                    <Form.Item
                      wrapperCol={{ span: 24 }} name="remember" valuePropName="checked">
                      <Text type="danger">Forgot Password?</Text>
                    </Form.Item>
                  </Row>
                </div>

                <Form.Item
                  wrapperCol={{ span: 24 }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block={true}
                    size="large"
                  >
                    Sign in
                  </Button>
                </Form.Item>
                {/* <div > */}
                <Row justify="center" gutter={24} className='SignInOptions'>
                  <Col xs={24} md={24} lg={8} sm={24}>
                    <Button
                      className='Intuit'
                      type="primary"
                      block={true}
                      size='large'
                      style={{ backgroundColor: '#0B78C2' }}
                    >
                      Sign In With Intuit
                    </Button>
                  </Col>
                  <Col xs={24} md={24} lg={8} sm={24} >
                    <Button
                      className='Xero'
                      block={true}
                      size='large'
                    >
                      <Image src={XeroImage} width={'25px'} />
                      Sign In With Xero
                    </Button>
                  </Col>
                  {/* </div> */}
                </Row>
                <p style={{ color: "black" }}>Don't have Account yet?<Link to={'/'}>Sign up Today!</Link></p>
              </Form>
            </Col>
          </Row>

        </Content>

      </Layout >
    </Space >
  )
}
