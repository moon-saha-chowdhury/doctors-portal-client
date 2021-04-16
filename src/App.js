import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Appointment from './Components/Appointment/Appointment/Appointment';
import Login from './Components/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import AppointmentDataTable from './Components/Dashboard/AppointmentDataTable/AppointmentDataTable';
import AddDoctor from './Components/AddDoctor/AddDoctor';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';

export const UserContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
    <Router>
      <Switch>
        <Route exact path ="/">
          <Home/>
        </Route>
        <Route  path ="/appointment">
          <Appointment/>
        </Route>
        <PrivateRoute  path ="/dashboard">
          <Dashboard/>
        </PrivateRoute>  
        <PrivateRoute  path ="/allAppointment">
          <AppointmentDataTable/>
        </PrivateRoute>
        <Route  path ="/addDoctor">
          <AddDoctor/>
        </Route>
        <Route  path ="/login">
          <Login/>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>

  );
}

export default App;
