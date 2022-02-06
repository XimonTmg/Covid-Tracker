import React, { Component } from "react";

import { Cards, CountryPicker, Chart } from "./components";
import { fetchData } from "./api";
import styles from "./App.module.css";
import Navbar from "./components/Navbar/Navbar";

class App extends Component {
  state = {
    data: {},
    country: "",
  };

  async componentDidMount() {
    const data = await fetchData();
    // console.log(data);
    this.setState({ data });
  }

  handleCountryChange = async (country) => {
    const data = await fetchData(country);
    this.setState({ data, country: country });
  };

  render() {
    const { data, country } = this.state;

    return (
      <>
        <Navbar handleCountryChange={this.handleCountryChange} />
        <h2 className={styles.title}>
          COVID-19 rate in{" "}
          <span style={{ color: "red" }}>
            {country ? country : "Worldwide"}
          </span>
        </h2>
        <div className={styles.container}>
          <Cards data={data} />
          <Chart data={data} country={country} />
        </div>
      </>
    );
  }
}

export default App;
