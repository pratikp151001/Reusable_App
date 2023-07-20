import { Avatar, Button, Col, Row } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React from 'react'
import './index.css'
import { Image } from 'antd'
import { LoginOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

export default function Index() {
    //OpenSettting
    const navigate = useNavigate()
    const OpenSettting = () => {
        navigate('/settings')
    }
    return (
        <Header style={{ backgroundColor: '#FFF' }}>
            <Row justify={'space-between'} >
                <Col lg={1}>
                    <b style={{ fontWeight: 1000, fontSize: '22px', width: '122px' }}> Dashboard</b>
                </Col>
                <Col><div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div className='settingButton' >
                        <Image preview={false} onClick={OpenSettting} src={'/assets/images/logos/Setting.svg'} />
                    </div>
                    <div style={{ marginRight: '10px' }}><Avatar style={{ backgroundColor: '#286FD1', verticalAlign: 'middle' }} size="large" gap={3}>
                        {<>{'TP'}</>}
                    </Avatar></div>
                    <Row >
                        <Col lg={24} style={{ height: '20px', justifyItems: 'center', alignItems: 'left', display: 'flex', fontWeight: 800 }}>ghdrfh
                        </Col>
                        <Col lg={24}>ghdrfh
                        </Col>
                    </Row>
                    <LoginOutlined style={{ fontSize: '25px', marginRight: '10px' }} />
                </div>
                </Col>
            </Row>
        </Header >
    )
}
