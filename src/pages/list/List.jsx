import "./list.scss"
import SideBar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import DataTable from "../../components/datatable/DataTable"

const List = () => {
  return (
    <div className="list">
      <SideBar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
}

export default List