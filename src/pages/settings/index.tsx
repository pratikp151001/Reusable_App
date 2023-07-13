import React, { useState } from 'react'
import SettingLayout from '../../layout/settings/index'
import AddInfo from '../../Components/settings/AddInfo/index'
import DynamicTable from "../../Components/settings/Table/index"
import { MenuInfo } from 'rc-menu/lib/interface';
import ConfirmDelete from "../../Components/golbal/DeleteConfirmationModal/index"
import { Alert, Button, Card, Col, Drawer, Form, Input, Row, Space, Switch } from 'antd';
import { CloseOutlined, DeleteOutlined, EditOutlined, OrderedListOutlined } from '@ant-design/icons';
// import { AddUserDrawerBody } from '../../constants/AddUserDrawer';
import AddUserForm from "../../Components/settings/AddUser/index"
import AddORGForm from '../../Components/settings/AddOrganization/index'
import { toastText } from '../../utils/DisplayToast'
import SubcriptionCards from '../../Components/settings/Subscription/index'
import OrgDataSource from '../../constants/OrganizationData';
import UsersData from '../../constants/userData'
import InterigrationCards from '../../Components/settings/Integrations/index'
import InterigrationData from '../../constants/InterigrationData'
import "./index.css"
import PreferenceCard from '../../Components/settings/preferenceCard/index'
import preferencesData from '../../constants/PreferenceData'
import rolesData from '../../constants/RolesData'


export default function Index() {
 const [UserData,setUserData]=useState(UsersData)
  const [settingComponent, setSettingComponent] = useState('users');
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [OpenDrawer, setOpenDrawer] = useState(false)
  const [permissionDrawer, setpermissionDrawer] = useState(false)

  const handleSidebar = (event: MenuInfo) => {
    console.log('Event: ', event.key);
    setSettingComponent(event?.key);
  };
  function getAdd() {
    if (
      settingComponent === 'users' ||
      settingComponent === 'organizations' ||
      settingComponent === 'roles'
    ) {
      return true;
    } else {
      return false;
    }
  }
  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };
  const onClose = () => {
    setpermissionDrawer(false)
    setOpenDrawer(false)
  }


  function onFinishFailed(errorInfo: any): void {
    console.log("🚀 ~ file: index.tsx:23 ~ onFinishFailed ~ errorInfo:", errorInfo)

  }

  function onFinish(values: any): void {
    console.log("🚀 ~ file: index.tsx:27 ~ onFinish ~ values:", values)
    toastText(`${settingComponent} Added Successfully`, 'success')
    setOpenDrawer(false)

  }

  const handleStatusChange=(e:any,data:any) => {
    console.log("🚀 ~ file: index.tsx:76 ~ handleStatusChange ~ data:", data)
   
    const UpdatedData=UserData.map((item:any,index:any)=>{
      if(item.id==data.id){
        if(e){
          console.log("first")
          return {...item,status:`Enable`}
        }
        {
          return {...item,status:`Disable`}
        }
      }
      else{
      return item
      }
    })
  
    setUserData(UpdatedData)
  }

  const userColumns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => {
        return a.name.length - b.name.length;
      },
      // sortDirections: ['descend'],
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
    // {
    //     title: 'Created on',
    //     dataIndex: 'created',
    //     key: 'created',
    // },
    {
      title: "Status",
      dataIndex: 'status',
      key: 'status',
      render: (status: any,id:any) => (
        <>
          {status === `Enable` ? <Switch onChange={(e)=>{handleStatusChange(e,id)}} defaultChecked /> : <Switch onChange={(e)=>{handleStatusChange(e,id)}}  ></Switch>
          }{' '}
          {status}
        </>

      )
    },
    {
      title: "Action",
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return <Space size={10}>
          <EditOutlined
            className="table-edit-icon"
          // onClick={()=>{editDataHandler()}}
          />
          <DeleteOutlined
            className="table-delete-icon"
            onClick={showModal}
          />
        </Space>
      }
    }
  ];
  const OrgColumns = [
    {
      title: 'Organization Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a: any, b: any) => {
        return a.name.length - b.name.length;
      },
      // sortDirections: ['descend'],
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
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: any) => (
        <>
          {isActive === `Active` ? <Alert message="Active" type="success" showIcon /> : <Alert message="Invalid" type="error" showIcon />
          }
        </>

      )
    },
    {
      title: "Action",
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return <Space size={10}>
          <EditOutlined
            className="table-edit-icon"
          // onClick={()=>{editDataHandler()}}
          />
          <DeleteOutlined
            className="table-delete-icon"
            onClick={showModal}
          />
        </Space>
      }
    }
  ];
  const RolesColumns = [
    {
      title: 'Role Name',
      dataIndex: 'roleName',
      key: 'roleName',
      sorter: (a: any, b: any) => {
        return a.roleName.length - b.roleName.length;
      },
      // sortDirections: ['descend'],
    },
    {
      title: 'Discription',
      dataIndex: 'discription',
      key: 'discription',
    },
   
    {
      title: 'Status',
      dataIndex: 'isActive',
      key: 'isActive',
      render: (isActive: any) => (
        <>
          {isActive === `Active` ? <Alert message="Active" type="success" showIcon /> : <Alert message="Invalid" type="error" showIcon />
          }
        </>

      )
    },
    {
      title: 'Permission',
      dataIndex: 'permission',
      key: 'permission',
      render: (permission:string) => {
        return (<Button style={{border:'none',color:'#0074FF'}} onClick={()=>{setOpenDrawer(true);setpermissionDrawer(true)}} ><OrderedListOutlined />{`  ${permission}`}</Button>)
      }
    },
    {
      title: "Action",
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return <Space size={10}>
          <EditOutlined
            className="table-edit-icon"
          // onClick={()=>{editDataHandler()}}
          />
          <DeleteOutlined
            className="table-delete-icon"
            onClick={showModal}
          />
        </Space>
      }
    }
  ];

  return (
    <>
      <SettingLayout handleSidebar={handleSidebar}>
        <AddInfo
          title={settingComponent}
          addInfo={getAdd()}
          OpenDrawer={setOpenDrawer}
        />
        {settingComponent === 'users' &&
          <DynamicTable
            userDataSource={UserData}
            userColumns={userColumns}
            // paginationChangeHandler={paginationChangeHandler}
            // currentPage={currentPage}
            // totalRecords={filteredData.length}
            // performSearchHandler={performSearchHandler}
            // searchValue={searchValue}
            showModal={showModal}
          // openDrawerHandler={openDrawerHandler}
          // setDrawerInfoHandler={setDrawerInfoHandler}
          ></DynamicTable>

        }
        {settingComponent === 'organizations' &&
          <DynamicTable
            userDataSource={OrgDataSource}
            userColumns={OrgColumns} 
            showModal={showModal}
          ></DynamicTable>

        }
        {settingComponent === 'roles' &&
         <DynamicTable
         userDataSource={rolesData}
         userColumns={RolesColumns} 
         showModal={showModal}
       ></DynamicTable>
        }
        {settingComponent === 'integrations' &&
          <InterigrationCards InterigrationData={InterigrationData} />
        }
        {
          settingComponent === "preference" &&
          <div style={{width:'100%'}}>
           
          {preferencesData?.map((preference, index) => (
             
            <React.Fragment key={index}>
               < PreferenceCard  preferencesData={preference}/>
            </React.Fragment>
           
          ))}
        </div>

        
        }
        {
          settingComponent === "subscription" &&
          <SubcriptionCards />
        }


        <ConfirmDelete
          handleCancel={handleCancel}
          handleOk={handleOk}
          isModalOpen={IsModalOpen}
        />
        
        <Drawer
          title={permissionDrawer ?'Permission Details' : `Add ${settingComponent}`}
          placement={'right'}
          closable={false}
          onClose={onClose}
          open={OpenDrawer}
          size={'large'}
          className='AddUserDrawer'
          extra={
            <Space>
              <Button onClick={onClose}><CloseOutlined /></Button>
            </Space>
          }
        // closeIcon={<CloseOutlined style={{right:'2%',position:'absolute'}}/> }
        >


          <Form
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
            layout="vertical"
            labelAlign="left"

          >
            {settingComponent === "users" &&
              <AddUserForm />
            }
            {settingComponent === "organizations" &&
              <AddORGForm />
            }
            {settingComponent === "roles" &&
              <>{permissionDrawer ? <div>Permission</div> :<div>Roles</div>} </>
            }{permissionDrawer ? ``:
            <Row justify="start" className='SaveAndCancelbtn' style={{ marginBottom: '10px' }} >
              <Col xs={10} md={10} lg={4} sm={10}>
                <Button
                  type="primary"
                  htmlType="submit"
                  block={true}
                  size="large"
                >
                  Save
                </Button>
              </Col>
              <Col xs={{ span: 10, offset: 1 }} md={10} lg={4} sm={10}>
                <Button
                  onClick={onClose}
                  block={true}
                  size='large'
                >
                  Cancel
                </Button>
              </Col>
            </Row>}
          </Form>

        </Drawer>
      </SettingLayout>
    </>
  )
}
