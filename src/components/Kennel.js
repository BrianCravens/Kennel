import React, {useState} from "react";
import "./Kennel.css";
//import AnimalCard from "./animal/AnimalCard"
import ApplicationViews from "./ApplicationViews";
import NavBar from "./nav/NavBar"

const Kennel = () => {
  //Returns true or false
  const isAuthenticated = () => sessionStorage.getItem("credentials") !== null;
  //Set to value of isAuthenticated / true or false
  const [hasUser, setHasUser] = useState(isAuthenticated());
  //Adding user to Session Storage setHasUser
  const setUser = user => {
    sessionStorage.setItem("credentials", JSON.stringify(user));
    setHasUser(isAuthenticated());
  };
  const clearUser = () => {
    sessionStorage.clear();
    setHasUser(isAuthenticated());
  }
  
  return (
    <>
      <NavBar hasUser={hasUser} clearUser={clearUser}/>
      <ApplicationViews hasUser={hasUser} setUser={setUser} />
    </>
 )
};

export default Kennel;