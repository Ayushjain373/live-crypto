import { AppBar, Toolbar } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import CurrencyExchangeSharpIcon from "@mui/icons-material/CurrencyExchangeSharp";
import "../App.css";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
const Header = () => {
  return (
    <>
      <AppBar color="transparent" position="Static">
        <Container>
          <div className="header">
            <div className="logo">
              <div className="l_img">
                <CurrencyExchangeSharpIcon fontSize="large" />
              </div>
              <div className="l_text">Crypto Tracker</div>
            </div>

            <div className="search">
              <SearchSharpIcon className="searchicon" />
              <MenuSharpIcon className="burger" />
            </div>
          </div>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
