import { Route } from "react-router-dom";
import React from "react";
import Home from "./home/Home";
import AnimalList from "./animal/AnimalList";
import OwnerList from "./owner/OwnerList";
import EmployeeList from "./employee/EmployeeList"
import LocationList from "./location/LocationList"
import AnimalDetail from "./animal/AnimalDetail"
import OwnerDetail from "./owner/OwnerDetail"
import EmployeeDetail from "./employee/EmployeeDetail"
import LocationDetail from "./location/LocationDetail"
const ApplicationViews = () => {
  return (
    <React.Fragment>
      <Route
        exact
        path="/"
        render={props => {
          return <Home />;
        }}
      />
      <Route
        exact
        path="/animals"
        render={props => {
          return <AnimalList />;
        }}
        />
      <Route
        exact
        path="/animals/:animalId(\d+)"
        render={props => {
          return <AnimalDetail animalId = {parseInt(props.match.params.animalId)} />;
        }}
      />
      <Route
        exact
        path="/locations"
        render={props => {
          return <LocationList />;
        }}
      />
      <Route
        exact
        path="/locations/:locationId(\d+)"
        render={props => {
          return <LocationDetail locationId = {parseInt(props.match.params.locationId)} />;
        }}
      />
      <Route
        exact
        path="/owners"
        render={props => {
          return <OwnerList />;
        }}
      />
      <Route
        exact
        path="/owners/:ownerId(\d+)"
        render={props => {
          return <OwnerDetail ownerId = {parseInt(props.match.params.ownerId)} />;
        }}
      />
      <Route
        exact
        path="/employees"
        render={props => {
          return <EmployeeList />;
        }}
      />
      <Route
        exact
        path="/employees/:employeeId(\d+)"
        render={props => {
          return <EmployeeDetail employeeId = {parseInt(props.match.params.employeeId)} />;
        }}
      />
    </React.Fragment>
  );
};

export default ApplicationViews;