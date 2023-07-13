import React, { Children } from 'react'
import Header from '../../Components/settings/Header/index'
import Sider from '../../Components/settings/Sidebar/index'
import { Layout } from 'antd'
import "./index.css"


export default function index(props:any) {
    

    const { children, handleSidebar }: any = props;
    return (
        <div style={{height:'100%'}}>
            <Header></Header>
            <Layout hasSider >
               <Sider handleSidebar={handleSidebar}></Sider>
               <div className='childrendiv' style={{width:'100%'}}>
               <div >{children}</div>
               </div>
            </Layout>

        </div>
    )
}