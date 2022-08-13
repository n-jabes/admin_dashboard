import "./datatable.scss"
import { DataGrid } from '@mui/x-data-grid';
import { userRows, userColumns } from "../../datatablesource"
import { Link } from "react-router-dom"
import { useState } from "react"


function DataTable() {

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  }

  const actionColumns = [
    {
      field: "action", 
      headerName: "Actions",
      width: 200,
      renderCell: (params) => {
        return(
          <div className="cellActions">
            <Link to="/users/test" style={{textDecoration: "none"}}>
              <div className="viewButton">view</div>
            </Link>
            <div className="deleteButton" onClick={()=>handleDelete(params.row.id)}>delete</div>
          </div>
        );
      }
  }
  ]
  return (
    <div className="datatable">
      <div className="datatableTitle">
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
      <DataGrid className="datagrid"
        rows={data}
        columns={userColumns.concat(actionColumns)}
        pageSize={8}
        rowsPerPageOptions={[8]}
        checkboxSelection
      />
    </div>
  )
}

export default DataTable