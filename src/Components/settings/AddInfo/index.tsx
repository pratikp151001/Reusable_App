import { CloseOutlined } from '@ant-design/icons'
import { Button, Col, Drawer, Form, Input, Row, Space } from 'antd'
import React, { useState } from 'react'
import { AddUserDrawerBody } from '../../../constants/AddUserDrawer'
import DynamicTable from '../../../Components/settings/Table/index'
import "./index.css"

export default function Index(props: any) {
  const { title, addInfo,OpenDrawer } = props

  // const [OpenDrawer, setOpenDrawer] = useState(false)

  //handleAddInfoClick
  const handleAddInfoClick = () => {
    OpenDrawer(true)
  }

  // const onClose = () => {
  //   setOpenDrawer(false)
  // }


  // function onFinishFailed(errorInfo: any): void {
  //   console.log("🚀 ~ file: index.tsx:23 ~ onFinishFailed ~ errorInfo:", errorInfo)

  // }

  // function onFinish(values: any): void {
  //   console.log("🚀 ~ file: index.tsx:27 ~ onFinish ~ values:", values)

  // }

  return (
    <>
      <Row style={{ width: '100%' }} justify="space-between">
        <div>
          <b style={{ fontSize: '30px' }}>{title.charAt(0).toUpperCase() + title.slice(1)}</b>
        </div>
        <div>
          {addInfo && <Button

            type="primary"
            block={true}
            size='large'
            onClick={handleAddInfoClick}
            style={{ backgroundColor: '#0B78C2' }}
          >
            + Add {title}
          </Button>
          }
        </div>

      </Row>
      <div className="usertable" style={{ margin: "1%" }}>
      </div>
      {/* <Drawer
        title={`Add ${title}`}
        placement={'right'}
        closable={false}
        onClose={onClose}
        open={OpenDrawer}
        size={'large'}
        className='AddUserDrawer'
        extra={
          <Space>
            <Button onClick={onClose}><CloseOutlined /></Button>
          </Space>
        }
      >
        <Form
          name="basic"
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
          labelAlign="left"

        >
          <div className="grid-container">
            {AddUserDrawerBody.map((item, index) => (
              <div className="grid-item" key={index}>
                <label> {item?.title}</label>
                <Form.Item className='formItem'
                  name={item?.name}
                  wrapperCol={{ span: 24 }}
                  rules={[
                    {
                      required: true,
                      message: item.errorMessage,
                    },
                  ]}
                >
                  {item?.type == 'password' ? (
                    <Input.Password
                      placeholder={item?.placeholder}
                      size="large"
                    />
                  ) : item?.type == 'number' ? (
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
          </div>
          <Row justify="start" className='SaveAndCancelbtn' style={{ marginBottom: '10px' }} >
            <Col xs={10} md={10} lg={4} sm={10}>
              <Button
                type="primary"
                htmlType="submit"
                block={true}
                size="large"
              >
                Save
              </Button>
            </Col>
            <Col xs={{ span: 10, offset: 1 }} md={10} lg={4} sm={10}>
              <Button
                onClick={onClose}
                block={true}
                size='large'
              >
                Cancel
              </Button>
            </Col>
          </Row>
        </Form>


      </Drawer> */}
    </>


  )
}
