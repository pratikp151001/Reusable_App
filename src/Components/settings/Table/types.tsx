import { ChangeEvent } from "react";

type DynamicTableProps = {
  userColumns: any;
  userDataSource: any;
  paginationChangeHandler?: (pageNo: number) => void;
  currentPage?: number;
  totalRecords?: number;
  performSearchHandler?: (event: ChangeEvent<HTMLInputElement>) => void;
  searchValue?: string;
  showModal: () => void;
  permissionDrawer: Boolean;
  PageSize?: number;
  modifyPageSize?: (size: number) => void;
  handlefilterChange?: (e: any) => void;
  settingComponent?: string;
};
export default DynamicTableProps;
