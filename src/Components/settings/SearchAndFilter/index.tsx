import { SearchOutlined } from '@ant-design/icons'
import { Row, Col, InputNumber, Space, Input, Select } from 'antd'
import React from 'react'

export default function index(props: any) {
    const { performSearchHandler, searchValue, modifyPageSize, PageSize, handlefilterChange } = props
    return (
        <div >
            <div >
                <Row justify={'space-between'}>
                    <Col>
                        <InputNumber min={10} max={15} defaultValue={10} value={PageSize} onChange={modifyPageSize} />
                    </Col>
                    <Col>
                        <Space>
                            <Input
                                placeholder="Search user"
                                suffix={<SearchOutlined />}
                                onChange={performSearchHandler}
                                value={searchValue}
                                defaultValue={''}
                            />

                            <Select
                                defaultValue="Choose Filter"
                                style={{ width: 200 }}
                                options={[
                                    { label: 'Enable', value: 'Enable' },
                                    { label: 'Disable', value: 'Disable' },
                                ]}
                                onChange={(e) => { handlefilterChange(e) }}
                            />
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
