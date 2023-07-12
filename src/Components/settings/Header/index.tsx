import React, { FC } from 'react'
import { Layout, Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { CloseOutlined } from '@ant-design/icons';

export default function index() {
  return (
    <Space  direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
        <Header 
        style={{ background: '#fff',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 40px',}}>
        <div><b>Settings</b></div>
        <div><b><CloseOutlined /></b></div>
        </Header>
      
    </Space>
  )
}
