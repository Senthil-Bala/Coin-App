import React, { useState, useEffect } from 'react';
import axios from "axios";
import "./Table.css";
import { Container, TableContainer } from '@mui/material';

function Table() {
  const [info, setInfo] = useState([]);

  useEffect(() => {
    axios.get("https://api.coincap.io/v2/assets")
      .then((response) => {
        setInfo(response.data.data);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <Container id="main">
      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Rank</th>
              <th>Id</th>
              <th>Name</th>
              <th>Symbol</th>
              <th>Price</th>
              <th>Volume</th>
            </tr>
          </thead>
          <tbody>
            {info.map((item) => (
              <React.Fragment key={item.id}>
                <tr>
                  <td>{item.rank}</td>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.symbol}</td>
                  <td>{item.priceUsd}</td>
                  <td>{item.volumeUsd24Hr.toString(1,3)}</td>
                </tr>
                <tr><td colSpan="6"><hr /></td></tr>
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </TableContainer>
    </Container>
  );
}

export default Table;
