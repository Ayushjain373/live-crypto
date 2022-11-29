import { Container } from "@mui/system";
import React from "react";
import Crausel from "./Crausel";
import Section from "./Section";
import "./style.css";
import Table from "./Table";
const Home = () => {
  return (
    <Container>
      <div className="main-heading">
        <div style={{ marginTop: "30px" }}>
          <Crausel />
        </div>
        <div className="main-text">Top 100 Cryptocurrencies by Market Cap</div>

        <div
          style={{
            marginTop: "30px",
          }}
        >
          <Section />
        </div>

        <div
          style={{
            marginTop: "40px",
          }}
        >
          <Table />
        </div>
      </div>
    </Container>
  );
};

export default Home;
