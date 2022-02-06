import React from "react";
import image from "../../images/covidicon.png";
import styles from "./Navbar.module.css";
import { CountryPicker } from "../index";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

const Navbar = ({ handleCountryChange }) => {
  return (
    <div className={styles.container}>
      <AppBar position="static">
        <Toolbar className={styles.toolbar}>
          <img className={styles.image} src={image} alt="COVID-19" />
          <Typography variant="h6" className={styles.title}>
            Covid-19 Tracker
          </Typography>
          <CountryPicker handleCountryChange={handleCountryChange} />
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
