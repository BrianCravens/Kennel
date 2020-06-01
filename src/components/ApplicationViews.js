import { Route, Redirect } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import OwnerList from "./owner/OwnerList";
import EmployeeList from "./employee/EmployeeList";
import LocationList from "./location/LocationList";
import AnimalDetail from "./animal/AnimalDetail";
import OwnerDetail from "./owner/OwnerDetail";
import EmployeeDetail from "./employee/EmployeeDetail";
import LocationDetail from "./location/LocationDetail";
import AnimalForm from './animal/AnimalForm'
import Login from "./auth/Login";

// Check if credentials are in session storage returns true/false
const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;

const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route exact path="/animals" render={props => {
        if (isAuthenticated()) {
          return <AnimalList {...props} />
        } else {
          return <Redirect to="/login" />
        }
        }} />
      <Route path="/login" component={Login} />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm {...props} />;
        }}
      />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={(props) => {
          return (
            <AnimalDetail
              animalId={parseInt(props.match.params.animalId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (isAuthenticated()){
          return <LocationList />;
        }else{
          return <Redirect to ="/login" />
        }}}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={(props) => {
          return (
            <LocationDetail
              locationId={parseInt(props.match.params.locationId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          if (isAuthenticated()){
            return <OwnerList />;
          }else{
            return <Redirect to ="/login"/>
          }
        }}
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)"
        render={(props) => {
          return (
            <OwnerDetail
              ownerId={parseInt(props.match.params.ownerId)}
              {...props}
            />
          );
        }}
      />
      <Route
        exact
        path="/employees"
        render={(props) => {
          if (isAuthenticated()){
            return <EmployeeList />;
          }else{
            return <Redirect to = "/login"/>
          }
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          return (
            <EmployeeDetail
              employeeId={parseInt(props.match.params.employeeId)}
              {...props}
            />
          );
        }}
        
      />
    </React.Fragment>
  );
};

export default ApplicationViews;
