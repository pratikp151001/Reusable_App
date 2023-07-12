import React, { Children } from 'react'
import Header from '../../Components/settings/Header/index'
import Sider from '../../Components/settings/Sidebar/index'
import { Layout } from 'antd'


export default function index(props:any) {
    

    const { children, handleSidebar }: any = props;
    return (
        <div style={{height:'100%'}}>
            <Header></Header>
            <Layout hasSider >
               <Sider handleSidebar={handleSidebar}></Sider>
               <div style={{width:'100%',margin:'1% 2%',marginBottom:'0%',minHeight:'89vh'}}>{children}</div>
            </Layout>

        </div>
    )
}