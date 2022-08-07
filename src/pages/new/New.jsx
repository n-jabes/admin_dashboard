import "./new.scss"
import Sidebar from "../../components/sidebar/Sidebar"
import Navbar from "../../components/navbar/Navbar"
import { DriveFolderUploadOutlinedIcon } from "@mui/icons-material/DriveFolderUploadOutlined"

const New = () => {
  return (
    <div className="new">
      <Sidebar />
      <div className="newContainer">
        <Navbar />
        <div className="top">
          <h1>Add New User</h1>
        </div>
        <div className="bottom">
          <div className="left">
            <img src="https:/ / icon-library.com/images/no-image-icon/ no-image-icon-0.jpg" alt="" />
          </div>
          <div className="right">
            <form>
              <div className="formInput">
                <label htmlFor="file">
                  Image: <DriveFolderUploadOutlinedIcon className="icon" />
                </label>
                <input type="file" id="file" style={{display: none}}/>
              </div>
              <div className="formInput">
                <label>Username</label>
                <input type="text"  placeholder="john_doe"/>
              </div>
              <div className="formInput">
                <label>Name and Surname</label>
                <input type="text"  placeholder="John Doe"/>
              </div>
              <div className="formInput">
                <label>Email</label>
                <input type="email"  placeholder="john_doe@gmail.com"/>
              </div>
              <div className="formInput">
                <label>Phone</label>
                <input type="text"  placeholder="+1 234 567 89"/>
              </div>
              <div className="formInput">
                <label>Password</label>
                <input type="password"/>
              </div>
              <div className="formInput">
                <label>Address</label>
                <input type="text"  placeholder="Elton St 216 NewYork"/>
              </div>
              <div className="formInput">
                <label>Country</label>
                <input type="text"  placeholder="USA"/>
              </div>
              <button>Send</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default New