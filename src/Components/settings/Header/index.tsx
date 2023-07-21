
import { Space } from 'antd';
import { Header } from 'antd/es/layout/layout';
import { CloseOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';

export default function Index() {
  const navigate = useNavigate()
  return (
    <Space direction="vertical" style={{ width: '100%' }} size={[0, 48]}>
      <Header
        style={{
          background: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '10px 40px',
        }}>
        <div><b>Settings</b></div>

        <div><b><CloseOutlined onClick={() => { navigate(-1) }} /></b></div>
      </Header>

    </Space>
  )
}
