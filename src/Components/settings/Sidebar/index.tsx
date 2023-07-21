import React, { FC } from 'react'
import {
  MoneyCollectOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  IdcardOutlined,
  ApartmentOutlined
} from '@ant-design/icons';
import Sider from 'antd/es/layout/Sider'
import { Button, Menu, MenuProps } from 'antd';
import SidebarProps from './types';
import "./index.css"

const Index: FC<SidebarProps> = (props) => {

  const { handleSidebar } = props
  const items: MenuProps['items'] = [
    {
      key: 'users',
      icon: <UsergroupAddOutlined />,
      label: 'Users',
      // disabled: true,
    },
    {
      key: 'organizations',
      icon: <UsergroupAddOutlined />,
      label: 'Organization',
      // children: [
      //   {
      //     key: 'sidebar-items-2',
      //     icon: <UsergroupAddOutlined />,
      //     label: 'Organization',
      //   },
      // ],
    },
    {
      key: 'roles',
      icon: <IdcardOutlined />,
      label: 'Roles',
    },
    {
      key: 'integrations',
      icon: <ApartmentOutlined />,
      label: 'Integrations',
    },
    {
      key: 'preference',
      icon: <SettingOutlined />,
      label: 'Preference',
    },
    {
      key: 'subscription',
      icon: <MoneyCollectOutlined />,
      label: 'Subscription',
    },
  ];
  return (

    <Sider
      className='sideBar'
      style={{
        background: '#fff',
        maxHeight: '100%',
        maxWidth: '256px',
        height: '100vh',
      }}>
      <Menu
        onClick={handleSidebar}
        defaultSelectedKeys={['users']}
        mode="inline"
        items={items}
      />
      <Button
        className='getsuppBtn'
        block={true}
        size="large"
      >
        Get Support
      </Button>
    </Sider>

  )
}
export default Index
