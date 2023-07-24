import { Table } from "antd";
import "antd/es/table/style";
import SearchAndFilter from "../../settings/SearchAndFilter/index";
import "./index.css";
import DynamicTableProps from "./types";
import { FC } from "react";

const DynamicTable: FC<DynamicTableProps> = (props) => {
  const {
    userDataSource,
    userColumns,
    permissionDrawer,
    paginationChangeHandler,
    currentPage,
    totalRecords,
    performSearchHandler,
    searchValue,
    PageSize,
    modifyPageSize,
    handlefilterChange,
    settingComponent,
  } = props;
  return (
    <>
      {permissionDrawer ? (
        ``
      ) : (
        <div className="searchAndfilter">
          <SearchAndFilter
            performSearchHandler={performSearchHandler}
            searchValue={searchValue}
            modifyPageSize={modifyPageSize}
            PageSize={PageSize}
            handlefilterChange={handlefilterChange}
            settingComponent={settingComponent}
          ></SearchAndFilter>
        </div>
      )}
      <Table
        dataSource={userDataSource}
        pagination={{
          total: totalRecords,
          current: currentPage,
          onChange: paginationChangeHandler,
          responsive: true,
          pageSize: PageSize,
          position: ["bottomCenter"],
          hideOnSinglePage: true,
        }}
        columns={userColumns}
        // scroll={{ y: "50vh", x: true }}
        scroll={{ x: true }}
      ></Table>
    </>
  );
};

export default DynamicTable;
