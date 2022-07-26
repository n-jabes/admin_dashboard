import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatablesource"

function DataTable() {
  return (
    <DataGrid className="datatable"
        rows={userRows}
        columns={userColumns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
  )
}

export default DataTable