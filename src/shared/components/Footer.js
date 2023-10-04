import React, { useState } from "react";

import classes from "./Footer.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCcVisa,
  faCcMastercard,
  faCcAmex,
  faCcPaypal,
  faCcDiscover,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  const [selectedCountry, setSelectedCountry] = useState("USD"); // Default currency is USD

  const handleCountryChange = (event) => {
    setSelectedCountry(event.target.value);
  };

  const currencyOptions = [
    { code: "USD", name: "United States Dollar ($)"},
    { code: "EUR", name: "Euro (€)"},
    { code: "GBP", name: "British Pound (£)"},
    { code: "JPY", name: "Japanese Yen (¥)"},
    { code: "AUD", name: "Australian Dollar (A$)"},
    { code: "CAD", name: "Canadian Dollar (C$)"},
    { code: "CHF", name: "Swiss Franc (Fr.)"},
    { code: "CNY", name: "Chinese Yuan (¥)"},
    { code: "INR", name: "Indian Rupee (₹)"},
    { code: "RUB", name: "Russian Ruble (₽)"},
  ];

  return (
    <footer className={classes.footer}>
      <div className={classes.container}>
        <div className={classes["footer-content"]}>
          <div className={classes["footer-icons"]}>
            <FontAwesomeIcon icon={faCcVisa} />
            <FontAwesomeIcon icon={faCcMastercard} />
            <FontAwesomeIcon icon={faCcAmex} />
            <FontAwesomeIcon icon={faCcPaypal} />
            <FontAwesomeIcon icon={faCcDiscover} />
          </div>
          <div className={classes["currency-selector"]}>
            <p className={classes["footer-country"]}>Country/region</p>
            <select value={selectedCountry} onChange={handleCountryChange}>
              {currencyOptions.map((option) => (
                <option key={option.code} value={option.code}>
                  {option.name}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>
      <p className={classes["footer-text"]}>© 2023, Demo Amit Hulk Powered by Shopify</p>
    </footer>
  );
};

export default Footer;
