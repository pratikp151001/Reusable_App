import { Row, Col, Form, Input } from 'antd'
import React from 'react'

export default function index() {
  return (
    <>
      <Row justify="start" >
        <Col xs={24} md={24} lg={24} sm={24}>
          <label> {'Add OrganizationName'}</label>
          <Form.Item className='formItem'
            name={'OrganizationName'}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please enter Organization Name',
              },
            ]}
          >
            <Input
              placeholder={'Please Enter Organization Name'}
              size="large"
            />
          </Form.Item>
        </Col>
      </Row>
      <Row justify="center" gutter={16} >
        <Col xs={12} md={12} lg={12} sm={12}>
          <label> {'Email Address'}</label>
          <Form.Item className='formItem'
            name={'Email'}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                type: "email",
                message: 'Please enter Email',
              },
            ]}
          >
            <Input
              placeholder={'Please Enter Email'}
              size="large"

            />
          </Form.Item>
        </Col>
        <Col xs={12} md={12} lg={12} sm={12}>
          <label> {'Phone Number'}</label>
          <Form.Item className='formItem'
            name={'PhoneNumber'}
            wrapperCol={{ span: 24 }}
            rules={[
              {
                required: true,
                message: 'Please enter Phone Number',
              },
            ]}
          >
            <Input
              placeholder={'Please Enter Phone Number'}
              size="large"
              type='number'
            />
          </Form.Item>
        </Col>
      </Row>


    </>
  )
}
