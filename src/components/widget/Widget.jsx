import "./widget.scss"
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MonetizationOnOutlinedIcon from '@mui/icons-material/MonetizationOnOutlined';

const Widget = ({ type }) => {
  let data;

  //temporary data
  let amount = 100;
  let diff = 20;

  switch(type){

    case "users":
      data = {
        title: "USERS",
        isMoney: false,
        link: "See all users",
        icon: <PersonOutlineIcon className="icon" style={{
          color: "crimson",
          backgroundColor: "rgba(250, 0, 0, 0.2)"
        }}/>
      };
      break;

    case "orders":
      data = {
        title: "ORDERS",
        isMoney: false,
        link: "View all orders",
        icon: <ShoppingCartOutlinedIcon className="icon" style={{
          color: "goldenrod",
          backgroundColor: "rgba(218, 165, 32, 0.2)"
        }}/>
      };
      break;
    
    case "earning":
      data = {
        title: "EARNING",
        isMoney: true,
        link: "View net earnings",
        icon: <MonetizationOnOutlinedIcon className="icon" style={{
          color: "green",
          backgroundColor: "rgba(0, 128, 0, 0.2)"
        }}/>
      };
      break;

    case "balance":
      data = {
        title: "BALANCE",
        isMoney: true,
        link: "See details",
        icon: <AccountBalanceWalletIcon className="icon" style={{
          color: "purple",
          backgroundColor: "rgba(128, 0, 128, 0.2)"
        }}/>
      };
      break;

    
    default:
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data?.title}</span>
        <span className="counter">{data?.isMoney && "$"} {amount}</span>
        <span className="link">{data?.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon/>
          {diff}
        </div>
        {data?.icon}
      </div>
    </div>
  )
}

export default Widget