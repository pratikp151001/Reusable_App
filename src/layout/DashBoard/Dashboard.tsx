import { Layout } from 'antd'
import Sider from '../../Components/Dashboard/Sidebar/index'
import { Content } from 'antd/es/layout/layout'
import Navbar from '../../Components/Dashboard/Navbar/index'
import './index.css'

export default function Dashboard() {

    return (
        <Layout>
            <div className='DashboardSidebar'>
                <Sider />
            </div>
            <Layout>
                <Navbar />
                <Content className='content'>Dashboard Screen Comming soon!!!!</Content>

            </Layout>
        </Layout>

    )
}
