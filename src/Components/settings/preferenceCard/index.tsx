import { Card, Col, Row, Switch } from 'antd'
import PreferenceCardProps from './types'
import React, { FC } from 'react'

const PreferenceCard: FC<PreferenceCardProps> = (props) => {
    const { preferencesData } = props
    return (
        <>
            <Card
                title={preferencesData.title}
                extra={<Switch defaultChecked={true} />}
                style={{ width: '90%' }}>
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
export default PreferenceCard
