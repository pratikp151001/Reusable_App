import { SearchOutlined } from '@ant-design/icons'
import { Row, Col, InputNumber, Space, Input, Select } from 'antd'
import React from 'react'

export default function index(props: any) {
    const { performSearchHandler, searchValue, modifyPageSize, PageSize } = props
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
                                defaultValue="filterOne"
                                style={{ width: 200 }}
                                options={[
                                    { label: 'Filter One', value: 'filterOne' },
                                    { label: 'Filter Second', value: 'filterSecond' },
                                    { label: 'Filter Third', value: 'filterThird' },
                                ]}
                            />
                        </Space>
                    </Col>
                </Row>
            </div>
        </div>
    )
}
