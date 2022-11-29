import React, { useState } from "react";
import { useProduct } from "../context/Coincontext";
import { useEffect } from "react";
import { Container } from "@mui/system";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import FormatPrice from "./FormatPrice";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Pagination from "@mui/material/Pagination";
import "./style.css";
const API = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&amp;order=market_cap_desc&amp;per_page=100&amp;page=1&amp;sparkline=false&amp;price_change_percentage=24h%2C7d/api/products`;

const CoinTable = () => {
  const { getCoins, isLoading, isError, allCoins } = useProduct();

  useEffect(() => {
    getCoins(API);
  }, []);

  console.log(allCoins);

  const numberwithcomma = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  const [page, SetPage] = useState(1);

  return (
    <>
      <>
        <TableContainer>
          {!isLoading ? (
            <>
              <Table style={{ width: "100%" }}>
                <TableHead>
                  <TableRow>
                    {[
                      "#",
                      "NAME",
                      "PRICE",
                      "24H",
                      "7D",
                      "MARKET CAP",
                      "VOLUME(24H)",
                      "CIRCULATING SUPPLY",
                      " ",
                    ].map((ele, idx) => (
                      <TableCell
                        style={{
                          color: "black",
                          fontWeight: "700",
                          fontFamily: "Montserrat",
                        }}
                        key={idx}
                        align={ele === "NAME" || "#" ? "" : "right"}
                      >
                        {ele}
                      </TableCell>
                    ))}
                  </TableRow>
                </TableHead>

                <TableBody>
                  {allCoins
                    .slice((page - 1) * 10, (page - 1) * 10 + 10)
                    .map((row, ind) => {
                      const profit_24 =
                        row.price_change_percentage_24h_in_currency > 0;
                      const profit =
                        row.price_change_percentage_7d_in_currency > 0;

                      return (
                        <TableRow
                          key={row.ind}
                          sx={{
                            "&:last-child td, &:last-child th": { border: 0 },
                          }}
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <TableCell
                            component="th"
                            scope="row"
                            style={{
                              fontWeight: "600",
                              fontFamily: "Montserrat",
                            }}
                          >
                            {(page - 1) * 10 + ind + 1}
                          </TableCell>

                          <TableCell
                            style={{
                              display: "flex",
                            }}
                          >
                            <img src={row?.image} alt={row.name} height="30" />
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                marginTop: "4px",
                                marginLeft: "10px",
                                textDecoration: "capitalize",
                              }}
                            >
                              <span style={{ color: "black" }}>{row.name}</span>
                              <span
                                style={{
                                  textTransform: "uppercase",
                                  fontSize: 15,
                                  color: "darkgrey",
                                  marginLeft: "5px",
                                }}
                              >
                                {row.symbol}
                              </span>
                            </div>
                          </TableCell>

                          <TableCell
                            align="right"
                            style={{
                              fontWeight: "600",
                              fontFamily: "Montserrat",
                            }}
                          >
                            <FormatPrice price={row.current_price} />
                          </TableCell>

                          <TableCell
                            align="right"
                            style={{
                              color: profit_24 > 0 ? "rgb(14,203,129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit_24 && "+"}
                            {row.price_change_percentage_24h_in_currency.toFixed(
                              2
                            )}
                            %
                          </TableCell>

                          <TableCell
                            align="right"
                            style={{
                              color: profit_24 > 0 ? "rgb(14,203,129)" : "red",
                              fontWeight: 500,
                            }}
                          >
                            {profit_24 && "+"}
                            {row.price_change_percentage_24h_in_currency.toFixed(
                              2
                            )}
                          </TableCell>

                          <TableCell
                            align="right"
                            style={{
                              fontWeight: 600,
                              fontFamily: "Montserrat",
                            }}
                          >
                            <FormatPrice price={row.market_cap} />
                          </TableCell>

                          <TableCell
                            align="right"
                            style={{
                              fontWeight: 600,
                              fontFamily: "Montserrat",
                            }}
                          >
                            <FormatPrice price={row.total_volume} />
                          </TableCell>

                          <TableCell align="right">
                            {numberwithcomma(row.circulating_supply)}
                            <div class="progress" style={{ height: "7px" }}>
                              <div
                                class="progress-bar bg-secondary"
                                role="progressbar"
                                aria-label="Secondary example"
                                style={{ width: "75%" }}
                                aria-valuenow="75"
                                aria-valuemin="0"
                                aria-valuemax="100"
                              ></div>
                            </div>
                          </TableCell>

                          <TableCell
                            align="right"
                            style={{ cursor: "pointer" }}
                          >
                            <MoreVertIcon></MoreVertIcon>
                          </TableCell>
                        </TableRow>
                      );
                    })}
                </TableBody>
              </Table>
            </>
          ) : (
            <>
              <Container>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <CircularProgress />
                </Box>
              </Container>
            </>
          )}
        </TableContainer>

        <Pagination
          color="primary"
          className="pagination"
          count={(allCoins?.length / 10).toFixed(0)}
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginTop: "30px",
            width: "100%",
            marginBottom: "30px",
            fontWeight: 700,
          }}
          onChange={(_, value) => {
            SetPage(value);
            window.scroll(0, 700);
          }}
        ></Pagination>
      </>
    </>
  );
};

export default CoinTable;
