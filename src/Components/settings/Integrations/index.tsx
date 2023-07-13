import { Card, Button, Image, Row, Col } from 'antd'
import React from 'react'

export default function index(props: any) {
    const { InterigrationData } = props
    return (
        <>
            <Row justify={'space-between'} gutter={16}>
                {InterigrationData.map((item: any, index: any) => (
                    <Col xs={24} md={12} lg={6} sm={24} xl={6} style={{ marginBottom: '2%',textAlign:'left' }} >
                        <Card bordered={true} >
                            <Image preview={false} src={item?.logo} style={{display:'block'}} />
                            <span style={{marginBottom:'2%'}} >Company:</span>
                            <p style={{ paddingBottom: '10px' }}>{item?.title}</p>
                            <Button type="primary" ghost={item?.ghost}>
                                {item?.buttonText}
                            </Button>
                        </Card>
                    </Col>
                ))}
            </Row>
        </>
    )
}
