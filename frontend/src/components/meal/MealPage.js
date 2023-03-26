import Header from "../homepage/header"
import WeekCalender from "./WeekCalender"
import { FaBell, FaEnvelope } from 'react-icons/fa';
import { NavLink, useParams, Link, useNavigate } from 'react-router-dom';
//import ViewMealPage from "./ViewMealPage";
import Footer from "../files/footer/Footer";

const MealPage = (props) => {

  let { orderid } = useParams();
  const navigate = useNavigate();

  //console.log(orderid);
  const loginUser = JSON.parse(localStorage.getItem('user'))._id;

  const handleViewSubscribePlanClick = (id) => {
    navigate(`/showsubscribeplans/${id}`);
  };

  return (
    <div>
      <Header />
      <div className="" style={{marginLeft: "auto",marginRight:"auto", width:"50%"}}>
        <br></br>
        <h2 style={{textAlign:"center"}}>Set Meals</h2>
        <br></br>
        <WeekCalender orderId={orderid} />
      </div>
      
    </div>
  )
}

export default MealPage