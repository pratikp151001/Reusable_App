import { Card, Button, Row, Col, Image } from 'antd'
import React from 'react'
import './index.css'
import goldImage from "../../../assets/images/Log-In/Gold-v2@2x.png"
import SubcriptionData from '../../../constants/Subcription'

export default function index() {
    return (
        <>

            <Row justify={'space-between'}>
                {SubcriptionData.map((item, index) => (

                    <Col xs={24} md={24} lg={11} sm={24} style={{ marginBottom: '2%' }}>
                        <Card title={item.title} extra={<Button style={{ border: '2px solid #2E1F7A', borderRadius: '20px', fontWeight: '600', color: "#2E1F7A" }} >{item.buttonName}</Button>} >
                            <Row justify="start" >
                                <Col xs={16} md={16} lg={8} sm={8} style={{ textAlign: 'start' }}>
                                    <span style={{ display: 'block' }}><b style={{ width: '100%' }}> Current Plan:</b></span>
                                    <Image src={goldImage} style={{ paddingBottom: '30%' }} preview={false} width={35}></Image><b style={{ fontSize: '25px' }}>Gold</b>
                                </Col>
                                <Col xs={16} md={16} lg={8} sm={8} style={{ textAlign: 'start' }}>
                                    <span style={{ display: 'block' }}><b style={{ width: '100%' }}>Pricing:</b></span>
                                    <span style={{ fontSize: '25px', color: '#2E1F7A' }}>${item.price}</span><span style={{ color: '#2E1F7A' }}>/month</span>
                                </Col>
                            </Row>
                        </Card>

                    </Col>
                ))}
            </Row>
        </>
    )
}
