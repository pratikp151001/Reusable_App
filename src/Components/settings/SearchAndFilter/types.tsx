import { ChangeEvent } from 'react';
export type SearchAndFilterProps = {
    performSearchHandler: (event: ChangeEvent<HTMLInputElement>) => void;
    searchValue: string;
    modifyPageSize?: (size: number) => void;
    PageSize?: number;
    handlefilterChange?: (e: any) => void;
    settingComponent?: string;

}
export default SearchAndFilterProps
