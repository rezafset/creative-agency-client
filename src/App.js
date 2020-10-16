import React, { createContext } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './components/Home/Home/Home';
import Login from './components/Login/Login';
import { useState } from 'react';
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Dashboard from './components/Dashboard/Dashboard/Dashboard';
import Review from './components/Dashboard/Review/Review';
import AddService from './components/Dashboard/AddService/AddService';
import MakeAdmin from './components/Dashboard/MakeAdmin/MakeAdmin';
import ServiceTableData from './components/Dashboard/ServiceTableData/ServiceTableData';
import ServiceByCard from './components/Dashboard/ServiceByCard/ServiceByCard';
import OrderForm from './components/Dashboard/OrderForm/OrderForm';

export const UserContext = createContext();

function App() {
  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Switch>
          <PrivateRoute path="/dashboard/welcome">
            <Dashboard></Dashboard>
          </PrivateRoute>

          <PrivateRoute path="/dashboard/order">
            <OrderForm></OrderForm>
          </PrivateRoute>

          <Route path="/dashboard/review">
              <Review></Review>
          </Route>
          <Route path="/dashboard/serviceDataCard">
            <ServiceByCard></ServiceByCard>
          </Route>
          <Route path="/dashboard/serviceTableData">
            <ServiceTableData></ServiceTableData>
          </Route>
          <Route path="/dashboard/addService">
            <AddService></AddService>
          </Route>
          <Route path="/dashboard/makeAdmin">
            <MakeAdmin></MakeAdmin>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/">
            <Home></Home>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
