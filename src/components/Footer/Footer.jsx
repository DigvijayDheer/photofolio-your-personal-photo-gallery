import React, { useEffect, useState } from "react";
import Styles from "./Footer.module.css";

function Footer() {
  const [lastUpdated, setLastUpdated] = useState("Loading...");

  useEffect(() => {
    const formatDateTime = () => {
      const options = {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
      };
      return new Date().toLocaleDateString("en-US", options);
    };

    setLastUpdated(formatDateTime());
  }, []);

  return (
    <footer className={`text-center mt-5 ${Styles.footer}`}>
      <div className={`text-muted ${Styles.footer_text}`}>
        Last updated: {lastUpdated}
      </div>
    </footer>
  );
}

export default Footer;
