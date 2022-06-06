import { useTable } from "react-table";
import MOCK_DATA from "./MOCK_DATA.json"
import COLUMNS from "./columns"
import { useMemo } from "react";

const BasicTable = () => {
    const columns = useMemo(() => columns, [])
    const data = useMemo(() => data, [])
    useTable({
        columns: COLUMNS,
        data: MOCK_DATA, 
    })
    return (  );
}
 
export default BasicTable;