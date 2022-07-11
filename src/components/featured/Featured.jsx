import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert"

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom"></div>
    </div>
    )
}

export default Featured