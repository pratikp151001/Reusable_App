import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import Column from 'antd/es/table/Column'
import "antd/es/table/style"
import './index.css'




export default function Index(props:any) {
   
  const {showModal,userDataSource,userColumns}=props
  return (
    <div>
        <Table
        dataSource={userDataSource}
        pagination={{
          // total: totalRecords,
          //  current: currentPage,
        //   onChange: paginationChangeHandler,
          className: 'dynamic-table__pagination',
          
        }}
        columns={userColumns}
        // scroll={{ y: "65vh", x: "65vh" }}
        scroll={{ x: true}}
        
      >
        {/* <Column
          title="Organization Name"
          dataIndex="name"
          key="name"
          sorter={(a: any, b: any) => a.name.length - b.name.length}
       
          sortDirections={['descend']}
         
        />
        <Column title="Email Address" dataIndex="email" key="email" />
        <Column title="Phone Number" dataIndex="phone" key="phone" />
        <Column title="Created On" dataIndex="created" key="created" />
        <Column
          title="Action"
          dataIndex="action"
          key="action"
          render={() => (
            <Space size={10}>
              <EditOutlined
                className="table-edit-icon"
                // onClick={editDataHandler}
              />
              <DeleteOutlined
                className="table-delete-icon"
                onClick={showModal}
              />
            </Space>
          )}
        /> */}
      </Table>
      
      
    </div>
  )
}
