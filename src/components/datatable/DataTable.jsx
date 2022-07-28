import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatablesource"

function DataTable() {
  const actionColumns = [
    {
      field: "action", 
      headerName: "Actions",
      width: 200,
      renderCell: () => {
        return(
          <div className="cellActions">
            <div className="viewButton">view</div>
            <div className="deleteButton">delete</div>
          </div>
        );
      }
  }
  ]
  return (
    <DataGrid className="datatable"
        rows={userRows}
        columns={userColumns.concat(actionColumns)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
  )
}

export default DataTable