import { Card, Col, Row, Switch } from 'antd'
import React from 'react'

export default function index(props: any) {
    const { preferencesData } = props
    return (
        <>
            <Card
                title={preferencesData.title}
                extra={<Switch defaultChecked={true} />}>
                <Row >
                    {preferencesData?.preferences?.map((item: any, index: number) => (
                        <Col style={{ textAlign: 'start', marginBottom: '2%' }} lg={9} md={12} sm={12} xs={24} >
                            <Switch defaultChecked={true} style={{ display: 'inline-block', marginRight: '1%' }} />
                            <span>{item?.title}</span>
                        </Col>
                    ))}
                </Row>
            </Card>
        </>
    )
}
