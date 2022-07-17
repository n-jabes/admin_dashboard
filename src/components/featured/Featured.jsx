import "./featured.scss"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown"
import KeyboardArrowUpOutlinedIcon from '@mui/icons-material/KeyboardArrowUpOutlined';

function Featured() {
  return (
    <div className="featured">
      <div className="top">
        <div className="title">Total Revenue</div>
        <MoreVertIcon fontSize="small" />
      </div>
      <div className="bottom">
        <div className="featuredChart">
          <CircularProgressbar value={70} text={"70%"} strokeWidth={5}/>
        </div>
        <p className="title">Total sales made today</p>
        <p className="amouynt">$420</p>
        <p className="desc">Previous transactions processing. Last payments may not be included.</p>
      </div>
      <div className="summary">
        <div className="item">
          <div className="itemTitle">Yesterday</div>
          <div className="itemResult negative">
            <KeyboardArrowDownIcon />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Week</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
        <div className="item">
          <div className="itemTitle">Last Month</div>
          <div className="itemResult positive">
            <KeyboardArrowUpOutlinedIcon />
            <div className="resultAmount">$12.4k</div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default Featured