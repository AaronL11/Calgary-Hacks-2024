import React, { useState } from "react";

import {
  BottomNavigation,
  BottomNavigationAction,
  Box
} from "@material-ui/core";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import FaceIcon from "@material-ui/icons/Face";
import { makeStyles } from "@material-ui/core/styles";
import { useMatch, useNavigate } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "fixed",
    bottom: 0
  }
}));

const navigationData = [
  {
    label: "Home",
    value: "",
    icon: <HomeIcon />
  },
  {
    label: "About",
    value: "about",
    icon: <PersonIcon />
  },
  {
    label: "Contact",
    value: "contact",
    icon: <FaceIcon />
  }
];

const BottomNavbar = (props) => {
  const classes = useStyle();
  let history = useNavigate();
  const [value, setValue] = useState("");
  let { path, url } = useMatch();
  console.log(path, url);
  const handleChange = (event, newValue) => {
    setValue(newValue);
    history.push(newValue);
  };
  return (
    <BottomNavigation
      value={value}
      onChange={handleChange}
      showLabels
      className={classes.root}
      component={Box}
      boxShadow={5}
    >
      {navigationData.map((item, index) => (
        <BottomNavigationAction key={index} {...item} />
      ))}
    </BottomNavigation>
  );
};

export default BottomNavbar;
