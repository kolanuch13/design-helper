import { useEffect } from "react";
import { useState } from "react";
import { FormLabel, Slider, Stack } from "@mui/material";


function Walpers({ height, length }) {
  const [wallperWidth, setWallperWidthPieces] = useState(1);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    setTotalAmount((length / wallperWidth) * height);
  }, [wallperWidth]);

  return (
    <Stack>
      <FormLabel>
        <p>
          Input wallpers width
          {wallperWidth}
        </p>
        <Slider
          sx={{
            width: "200px",
          }}
          min={0}
          max={11}
          step={0.1}
          value={wallperWidth}
          onChange={(e) => {
            setWallperWidthPieces(e.target.value);
          }}
        />
      </FormLabel>
      <h3>You need {Math.ceil(totalAmount)} meters of walpers.</h3>
    </Stack>
  );
}

export default Walpers;
