import React, { ChangeEvent, useEffect, useState } from 'react'
import SettingLayout from '../../layout/settings/index'
import AddInfo from '../../Components/settings/AddInfo/index'
import DynamicTable from "../../Components/settings/Table/index"
import { MenuInfo } from 'rc-menu/lib/interface';
import ConfirmDelete from "../../Components/golbal/DeleteConfirmationModal/index"
import { Button, Checkbox, Col, Drawer, Form, Row, Space, Switch, Image } from 'antd';
import Icon, { CloseOutlined, OrderedListOutlined } from '@ant-design/icons';
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
import PermissionData from '../../constants/PermissionData'
import AddRoleForm from '../../Components/settings/AddRole/index'
// import CustomSwitch from '../../Components/settings/Switch/index'


export default function Index() {
  const [UserData, setUserData] = useState(UsersData)
  const [ORGData, setORGData] = useState(OrgDataSource)
  const [RoleData, setRoleData] = useState(rolesData)
  const [filteredData, setfilteredData] = useState(UserData)
  const [settingComponent, setSettingComponent] = useState('users');
  const [IsModalOpen, setIsModalOpen] = useState(false)
  const [OpenDrawer, setOpenDrawer] = useState(false)
  const [permissionDrawer, setpermissionDrawer] = useState(false)
  const [currentPage, setcurrentPage] = useState(1)
  const [searchValue, setSearchValue] = useState('')
  const [PageSize, setPageSize] = useState(10)
  const [appiledFilter, setappiledFilter] = useState()
  const [isEdit, setisEdit] = useState(false)

  useEffect(() => {
    setSearchValue('')
    setPageSize(10)
    setcurrentPage(1)
  }, [settingComponent])
  const handlefilterChange = (e: any) => {
    setappiledFilter(e)
    if (settingComponent === 'users') {
      const filteredData = UserData.filter((singleRecord: any) => {
        if (singleRecord.status === e && singleRecord.fistName.includes(searchValue)) {
          return singleRecord
        }
        else {
          return null
        }
      }
      );
      setfilteredData(filteredData)
    }
    if (settingComponent === "roles") {
      const filteredData = RoleData.filter((singleRecord: any) => {
        if (singleRecord.isActive === e && singleRecord.roleName.includes(searchValue)) {
          return singleRecord
        }
        else {
          return null
        }
      }
      );
      setfilteredData(filteredData)
    }

    console.log("🚀 ~ file: index.tsx:66 ~ handlefilterChange ~ e:", e)
  }

  const handleSidebar = (event: MenuInfo) => {
    console.log('Event: ', event.key);
    if (event.key === 'users') {
      setfilteredData(UserData)
    }
    if (event.key === 'organizations') {
      setfilteredData(ORGData)
    }
    if (event.key === 'roles') {
      setfilteredData(RoleData)
    }
    setSettingComponent(event?.key);
  };

  //modifyPageSize
  const modifyPageSize = (size: number) => {
    if (size === undefined || size === null) {
      setPageSize(10)
    }
    else {

      setPageSize(size)
    }
  }


  //paginationChangeHandler

  const paginationChangeHandler = (pagenumber: number) => {
    setcurrentPage(pagenumber)
  }

  const performSearchHandler = (e: ChangeEvent<HTMLInputElement>) => {

    const { value } = e.target

    setSearchValue(value);
    if (settingComponent === 'users') {
      const filteredData = UserData.filter((singleRecord: any) => {
        if (appiledFilter) {
          if (singleRecord.status === appiledFilter && singleRecord.fistName.includes(value)) {
            return singleRecord
          }
          else {
            return null
          }
        }
        else {
          if (singleRecord.fistName.includes(value)) {
            return singleRecord
          }
          else {
            return null
          }
        }
      }
      );
      setfilteredData(filteredData)
    }
    if (settingComponent === 'organizations') {
      const filteredOrg = ORGData.filter((singleRecord: any) => {
        if (singleRecord.name.includes(value)) {
          return singleRecord
        }
        else {
          return null
        }
      })
      setfilteredData(filteredOrg)
    }
    if (settingComponent === 'roles') {
      const filteredOrg = RoleData.filter((singleRecord: any) => {
        if (singleRecord.roleName.includes(value)) {
          return singleRecord
        }
        else {
          return null
        }
      })
      setfilteredData(filteredOrg)
    }
  }


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
  const editDataHandler = () => {
    setisEdit(true)
    setOpenDrawer(true)
  }

  const handleOk = () => {
    //  const filterUpdatedData=filteredData.filter((item:any,index:any)=>{
    //   if(){}
    //  })
    setIsModalOpen(false);
    toastText("Deleted Successfully", 'success')
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    toastText("Fail to Delete", 'error')
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
    values.id = Math.random()
    values.status = `Disable`

    setUserData([...UserData, values])
    setfilteredData([...filteredData, values])
    setOpenDrawer(false)

  }

  const handleStatusChange = (e: any, data: any) => {

    const UpdatedData = UserData.map((item: any, index: any) => {
      if (parseInt(item.id) === parseInt(data.id)) {

        if (e) {
          return { ...item, status: `Enable` }

        }
        {
          return { ...item, status: `Disable` }
        }
      }
      else {
        return item
      }
    })

    const filteredData = UpdatedData.filter((singleRecord: any) => {
      if (appiledFilter) {
        if (singleRecord.status === appiledFilter && singleRecord.fistName.includes(searchValue)) {
          return singleRecord
        }
        else {
          return null
        }
      }
      else {
        if (singleRecord.fistName.includes(searchValue)) {
          return singleRecord
        }
        else {
          return null
        }
      }
    }
    );
    setUserData(UpdatedData)
    setfilteredData(filteredData)
  }


  const userColumns = [
    {
      title: 'Name',
      dataIndex: 'fistName',
      key: 'fistName',
      sorter: (a: any, b: any) => {
        return a.fistName.length - b.fistName.length;
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
      dataIndex: 'phoneNumber',
      key: 'phoneNumber',
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
      render: (status: any, id: any) => {

        return <><div className='statusdiv' style={{ display: 'inline-block' }}>
          {status === `Enable` ?
            <>
              <Switch size='default' onChange={(e) => { handleStatusChange(e, id) }}
                defaultChecked={true} /><Icon type="thunderbolt" />
              {/* <CustomSwitch checked={status} handleStatusChange={handleStatusChange} id={id.id} /> */}
            </> :
            <Switch size="default"
              onChange={(e) => { handleStatusChange(e, id) }}
              defaultChecked={false}
            />
          }
          {' '}
          {status ? status : 'Disable'}
        </div>
        </>

      }
    },
    {
      title: "Action",
      dataIndex: 'action',
      key: 'action',
      render: (data: any) => {

        return <Space size={10}>
          <Image src={'/assets/images/logos/Group 3580.svg'} preview={false}
            className="table-edit-icon"
            onClick={() => { editDataHandler() }}
          />
          <Image src={'/assets/images/logos/Union 95.svg'} preview={false}
            className="table-delete-icon"
            onClick={() => { showModal() }}
          />
        </Space>
      }
    }
  ];
  const OrgColumns = [
    {
      title: 'Organization Name',
      dataIndex: 'name',
      width: 200,
      key: 'name',
      sorter: (a: any, b: any) => {
        return a.name.length - b.name.length;
      },
      // sortDirections: ['descend'],
    },
    {
      title: 'Email Address',
      dataIndex: 'email',
      width: 200,
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
          <div style={{ display: 'flex' }}>
            {isActive === `Active` ? <><Image src={'/assets/images/logos/Path 6129.svg'} /> <p style={{ fontWeight: 'bold', color: 'green' }}>{isActive}</p></> : <><Image src={'/assets/images/logos/Path 6131.svg'} /> <p style={{ fontWeight: 'bold', color: 'red' }}>{isActive}</p></>
            }
          </div>

        </>

      )
    },
    {
      title: "Action",
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return <Space size={10}>
          <Image src={'/assets/images/logos/Group 3580.svg'} preview={false}
            className="table-edit-icon"
            onClick={() => { editDataHandler() }}
          />
          <Image src={'/assets/images/logos/Union 95.svg'} preview={false}
            className="table-delete-icon"
            onClick={() => { showModal() }}
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
      width: 200,
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
          <div style={{ display: 'flex' }}>
            {isActive === `Active` ? <><Image src={'/assets/images/logos/Path 6129.svg'} /> <p style={{ fontWeight: 'bold', color: 'green' }}>{isActive}</p></> : <><Image src={'/assets/images/logos/Path 6131.svg'} /> <p style={{ fontWeight: 'bold', color: 'red' }}>{isActive}</p></>
            }
          </div>
        </>

      )
    },
    {
      title: 'Permission',
      dataIndex: 'permission',
      key: 'permission',
      render: (permission: string) => {
        return (<Button style={{ border: 'none', color: '#0074FF' }} onClick={() => { setOpenDrawer(true); setpermissionDrawer(true) }} ><OrderedListOutlined />{`  ${permission}`}</Button>)
      }
    },
    {
      title: "Action",
      dataIndex: 'action',
      key: 'action',
      render: () => {
        return <Space size={10}>
          <Image src={'/assets/images/logos/Group 3580.svg'} preview={false}
            className="table-edit-icon"
            onClick={() => { editDataHandler() }}
          />
          <Image src={'/assets/images/logos/Union 95.svg'} preview={false}
            className="table-delete-icon"
            onClick={() => { showModal() }}
          />
        </Space>
      }
    }
  ];
  const PermissionColumns = [
    {
      title: 'Module Name',
      dataIndex: 'moduleName',
      key: 'moduleName',
      align: "left",
      // sortDirections: ['descend'],
    },
    {
      title: 'All',
      dataIndex: 'all',
      key: 'all',
      align: "center",
      render: (all: any, data: any) => {
        return <> {data.moduleName !== "Admin" ? <Checkbox></Checkbox> : ``}
        </>
      }
    },
    {
      title: 'View',
      dataIndex: 'view',
      key: 'view',
      align: "center",
      render: (all: any, data: any) => {

        return <> {data.moduleName !== "Admin" ? <Checkbox></Checkbox> : ``}
        </>
      }
    },
    {
      title: 'Edit',
      dataIndex: 'edit',
      key: 'edit',
      align: "center",
      render: (all: any, data: any) => {

        return <> {data.moduleName !== "Admin" ? <Checkbox></Checkbox> : ``}
        </>
      }
    },
    {
      title: 'Delete',
      dataIndex: 'delete',
      key: 'delete',
      align: "center",
      render: (all: any, data: any) => {

        return <> {data.moduleName !== "Admin" ? <Checkbox></Checkbox> : ``}
        </>
      }
    },


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
            userDataSource={filteredData}
            userColumns={userColumns}
            paginationChangeHandler={paginationChangeHandler}
            currentPage={currentPage}
            totalRecords={filteredData.length}
            performSearchHandler={performSearchHandler}
            searchValue={searchValue}
            showModal={showModal}
            PageSize={PageSize}
            modifyPageSize={modifyPageSize}
            handlefilterChange={handlefilterChange}
            // openDrawerHandler={openDrawerHandler}
            // setDrawerInfoHandler={setDrawerInfoHandler}
            settingComponent={settingComponent} permissionDrawer={false}          ></DynamicTable>

        }
        {settingComponent === 'organizations' &&
          <DynamicTable
            userDataSource={filteredData}
            userColumns={OrgColumns}
            paginationChangeHandler={paginationChangeHandler}
            currentPage={currentPage}
            totalRecords={filteredData.length}
            performSearchHandler={performSearchHandler}
            searchValue={searchValue}
            showModal={showModal}
            settingComponent={settingComponent}
            permissionDrawer={false}
          ></DynamicTable>

        }
        {settingComponent === 'roles' &&
          <DynamicTable
            userDataSource={filteredData}
            userColumns={RolesColumns}
            paginationChangeHandler={paginationChangeHandler}
            currentPage={currentPage}
            totalRecords={filteredData.length}
            performSearchHandler={performSearchHandler}
            searchValue={searchValue}
            showModal={showModal}
            PageSize={PageSize}
            modifyPageSize={modifyPageSize}
            handlefilterChange={handlefilterChange}
            settingComponent={settingComponent}
            permissionDrawer={false}
          ></DynamicTable>
        }
        {settingComponent === 'integrations' &&
          <InterigrationCards InterigrationData={InterigrationData} />
        }
        {
          settingComponent === "preference" &&
          // <div style={{ width: '100%' }}>
          <>
            < Row>
              {preferencesData?.map((preference, index) => (

                <div style={{ marginBottom: '2%' }} key={index}>
                  < PreferenceCard preferencesData={preference} />
                </div>
              ))}
            </Row>
            <Row justify={'start'} gutter={24}>
              <Col lg={3} >
                <Button
                  type="primary"
                  className='Savebtn'
                  block={true}
                  size="large"
                >
                  Save
                </Button>
              </Col>
              <Col lg={3}>
                <Button
                  onClick={onClose}
                  block={true}
                  className='Cancelbtn'
                  size='large'
                >
                  Cancel
                </Button>
              </Col>
            </Row>


          </>

          // </div>
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
          title={permissionDrawer ? 'Permission Details' : `Add ${settingComponent}`}
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
              <>{permissionDrawer ? <DynamicTable
                userDataSource={PermissionData}
                userColumns={PermissionColumns}
                permissionDrawer={permissionDrawer}
                showModal={showModal}
              ></DynamicTable> : <AddRoleForm />} </>
            }{
              permissionDrawer ? `` :
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
