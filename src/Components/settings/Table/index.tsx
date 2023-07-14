import { EditOutlined, DeleteOutlined } from '@ant-design/icons'
import { Space, Table } from 'antd'
import Column from 'antd/es/table/Column'
import "antd/es/table/style"
import SearchAndFilter from '../../settings/SearchAndFilter/index'
import './index.css'


export default function Index(props: any) {

  const { userDataSource, userColumns, permissionDrawer, paginationChangeHandler, currentPage, totalRecords, performSearchHandler, searchValue, PageSize, modifyPageSize } = props
  return (
    <>{permissionDrawer ? `` :
      <div className='searchAndfilter'>
        <SearchAndFilter
          performSearchHandler={performSearchHandler}
          searchValue={searchValue}
          modifyPageSize={modifyPageSize}
          PageSize={PageSize}
        ></SearchAndFilter>
      </div>
    }
      <Table
        dataSource={userDataSource}
        pagination={{
          total: totalRecords,
          current: currentPage,
          onChange: paginationChangeHandler,
          responsive: true,
          pageSize: PageSize,
          position: ['bottomCenter'],
          hideOnSinglePage: true
        }}
        columns={userColumns}
        // scroll={{ y: "65vh", x: "65vh" }}
        scroll={{ x: true }}
      >

      </Table>
    </>
  )
}
