// import logo from './logo.svg';
import { useState, useEffect } from 'react';
import { Link, Outlet} from 'react-router-dom'
import Homepage from './components/homepage/homepage';
import Login from './components/login/login';
import Register from './components/register/register';
import Ownerpage from './components/ownerpage/ownerpage';
import AllKitchens from './components/homepage/allkitchens';
import CreatePlan from './components/createplan/createplan';
import ShowPlan from './components/showplan/showplan';
import ShowSubscribePlan from './components/homepage/subscribeplan';
import ShowCustomerSubscribePlan from './components/homepage/showcustomersubscribeplan';
import Header from './components/homepage/header';

// import Header from './components/homepage/header';

import './App.css';
import DishPage from './components/dishes/DishPage'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SingleUserKitchens from './components/homepage/singlekitchenownerplans';

const App = (props) => {

  const [loginUser, setLoginUser] = useState({});
  const [kitchenOwner, setKitchenOwner] = useState();
  
 

 useEffect(() => {
   const user = JSON.parse(localStorage.getItem('user'))
   if (user) {
       setLoginUser(user)
   }
}, [])

  return (
    <div className="App">
    
     
      <Router>
        <Routes>
      
          {/* akfbakbfa*/}
          <Route exact path="/" element = {<Homepage loginUser = {loginUser} setLoginUser = {setLoginUser}/>}/>
          <Route exact path="/allkitchens" element = {<AllKitchens  kitchenOwner = {kitchenOwner} setKitchenOwner = {setKitchenOwner}/>}/>
          <Route exact path="/singleuserkitchens/:userid" element = {<SingleUserKitchens  kitchenOwner = {kitchenOwner} setKitchenOwner = {setKitchenOwner}/>}/>
          <Route exact path="/owner" element={<Ownerpage loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/header" element={<Header loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/login" element={<Login loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/register" element={<Register loginUser = {loginUser} setLoginUser = {setLoginUser}  />} />
          <Route exact path="/createplan" element={<CreatePlan loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/showplan" element={<ShowPlan loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/showsubscribeplans/:userid" element={<ShowSubscribePlan loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />
          <Route exact path="/showcustomersubscribeplans" element={<ShowCustomerSubscribePlan loginUser = {loginUser} setLoginUser = {setLoginUser}/>} />


        </Routes>
      </Router>

    </div>
  );
}

export default App;

// <header className="App-header">
      //   <img src={logo} className="App-logo" alt="logo" />
      //   <p>
      //     Edit <code>src/App.js</code> and save to reload.
      //   </p>
      //   <a
      //     className="App-link"
      //     href="https://reactjs.org"
      //     target="_blank"
      //     rel="noopener noreferrer"
      //   >
      //     Learn React
      //   </a>
      // </header>

      // lll
