import { useEffect } from "react";
import { useState } from "react";
import { Select, MenuItem, Container } from "@mui/material";

function Tile({ square }) {
  const [tileSquare, setTileSquare] = useState([]);
  const [totalAmount, setTotalAmount] = useState();
  console.log(Number(tileSquare));
  useEffect(() => {
    setTotalAmount(Math.ceil(square / Number(tileSquare)));
  }, [tileSquare]);

  return (
    <Container>
      <Select
        style={{
          width: "200px",
        }}
        name="select"
        onChange={(e) => {
          setTileSquare(e.target.value);
        }}
      >
        <MenuItem value={0.09}>300x300</MenuItem>
        <MenuItem value={0.36} selected>
          600x600
        </MenuItem>
        <MenuItem value={0.81}>900x900</MenuItem>
        <MenuItem value={0.72}>1200x600</MenuItem>
        <MenuItem value={1.44}>1200x1200</MenuItem>
      </Select>
      <h3>You need {totalAmount} pieces of tile.</h3>
    </Container>
  );
}

export default Tile;
