import Paint from "../Material/Paint";
import Tile from "../Material/Tile";
import Wallpaper from "../Material/Wallpaper";
import { useState } from "react";
import { Select, MenuItem, Container } from "@mui/material";

function Walls({ wallsSquare, wallsHeight, wallsLength }) {
  const [material, setMaterial] = useState();
  const handleClick = (e) => {
    setMaterial(e.target.value);
  };

  return (
    <div>
      <Container sx={{
        marginTop: "30px"
      }}>
        <Select
          style={{
            width: "200px",
          }}
          name="select"
          onChange={handleClick}
        >
          <MenuItem value="tile">Tile</MenuItem>
          <MenuItem value="paint">Paint</MenuItem>
          <MenuItem value="walpers">Wallpaper</MenuItem>
        </Select>
        <Container
          sx={{
            marginTop: "10px",
          }}
        >
          {material === "tile" && <Tile square={wallsSquare} />}
          {material === "paint" && <Paint square={wallsSquare} />}
          {material === "walpers" && (
            <Wallpaper height={wallsHeight} length={wallsLength} />
          )}
        </Container>
      </Container>
    </div>
  );
}

export default Walls;
