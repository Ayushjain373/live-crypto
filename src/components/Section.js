import React from "react";

import StarBorderSharpIcon from "@mui/icons-material/StarBorderSharp";
import { Button } from "@mui/material";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useState } from "react";

const Section = () => {
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <div className="group">
      <div className="group_button">
        <Button
          variant="outlined"
          style={{
            background: "#EFF2F5",
            color: "black",
            fontWeight: "600",
            border: "none",
            fontFamily: "Montserrat",
          }}
        >
          <StarBorderSharpIcon style={{ color: "lightgray" }} /> Favourite
        </Button>

        <Button
          variant="outlined"
          style={{
            background: "#EFF2F5",
            color: "blue",
            fontWeight: "600",
            border: "none",
            fontFamily: "Montserrat",
          }}
        >
          CryptoCurrencies
        </Button>
        <Button
          variant="outlined"
          style={{
            background: "#EFF2F5",
            color: "black",
            fontWeight: "600",
            border: "none",
            fontFamily: "Montserrat",
          }}
        >
          DeFi
        </Button>
        <Button
          variant="outlined"
          style={{
            background: "#EFF2F5",
            color: "black",
            fontWeight: "600",
            border: "none",
            fontFamily: "Montserrat",
          }}
        >
          NFTS & Collectiblies
        </Button>
      </div>

      <div className="select">
          
          <div className="rows">
            Shows rows
          </div>
       
        <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
          <InputLabel id="demo-select-small">100</InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={age}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default Section;
