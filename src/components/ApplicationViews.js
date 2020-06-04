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
import AnimalForm from "./animal/AnimalForm";
import Login from "./auth/Login";
import AnimalEditForm from "./animal/AnimalEditForm";
import EmployeeWithAnimals from "./employee/EmployeeWithAnimals"
import LocationEditForm from "./location/LocationEditForm"

const ApplicationViews = (props) => {
  const hasUser = props.hasUser;
  const setUser = props.setUser;

  return (
    <React.Fragment>
      <Route
        exact
        path="/animals"
        render={(props) => {
          if (hasUser) {
            return <AnimalList {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      {/* pass the `setUser` function to Login component. */}
  <Route path="/login" render={props => {
    return <Login setUser={setUser} {...props} />
  }} />
      <Route
        exact
        path="/"
        render={(props) => {
          return <Home />;
        }}
      />
      <Route
        path="/animals/:animalId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <AnimalEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route exact path="/animals/:animalId(\d+)" render={props => {
  if (hasUser) {
    return <AnimalDetail animalId={parseInt(props.match.params.animalId)} {...props} />
  } else {
    return <Redirect to="/login" />
  }
}} />
      <Route
        path="/animals/new"
        render={(props) => {
          return <AnimalForm {...props} />;
        }}
      />
      <Route
        exact
        path="/locations"
        render={(props) => {
          if (hasUser) {
            return <LocationList />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
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
        path="/locations/:locationId(\d+)/edit"
        render={(props) => {
          if (hasUser) {
            return <LocationEditForm {...props} />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        exact
        path="/owners"
        render={(props) => {
          if (hasUser) {
            return <OwnerList />;
          } else {
            return <Redirect to="/login" />;
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
          if (hasUser) {
            return <EmployeeList />;
          } else {
            return <Redirect to="/login" />;
          }
        }}
      />
      <Route
        path="/employees/:employeeId(\d+)"
        render={(props) => {
          return (
            <EmployeeWithAnimals
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
