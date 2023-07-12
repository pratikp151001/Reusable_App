import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Space } from "antd";

const userColumns = [
    {
        title: 'Organization Name',
        dataIndex: 'name',
        key: 'name',
        sorter: (a: any, b: any) => {
            return a.name.length - b.name.length;
        },
        sortDirections: ['descend'],
    },
    {
        title: 'Email Address',
        dataIndex: 'email',
        key: 'email',
    },
    {
        title: 'Phone number',
        dataIndex: 'phone',
        key: 'phone',
    },
    {
        title: 'Created on',
        dataIndex: 'created',
        key: 'created',
    },
    {
        //   title="Action"
        //   dataIndex="action"
        //   key="action"
        //   render={() => (
        //     <Space size={10}>
        //       <EditOutlined
        //         className="table-edit-icon"
        //         // onClick={editDataHandler}
        //       />
        //       <DeleteOutlined
        //         className="table-delete-icon"
        //         onClick={showModal}
        //       />
        //     </Space>
        //   )}
        // />

        title: "Action",
        dataIndex: 'action',
        key: 'action',
        render: () => {
            return <Space size={10}>
                   <EditOutlined
                     className="table-edit-icon"
                    //onClick={()=>{editDataHandler()}}
                   />
                   <DeleteOutlined
                     className="table-delete-icon"
                     //onClick={showModal}
                   />
                 </Space>
        }
    }
];

export default userColumns