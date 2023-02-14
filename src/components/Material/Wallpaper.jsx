import { useEffect } from "react";
import { useState } from "react";
import { FormLabel, Slider, Stack } from "@mui/material";


function Wallpaper({ height, length }) {
  const [wallpaperWidth, setWallpaperWidthPieces] = useState(1);
  const [totalAmount, setTotalAmount] = useState();

  useEffect(() => {
    setTotalAmount((length / wallpaperWidth) * height);
  }, [wallpaperWidth]);

  return (
    <Stack>
      <FormLabel>
        <p>
          Input Wallpapers width {wallpaperWidth}m
        </p>
        <Slider
          sx={{
            width: "200px",
          }}
          min={0}
          max={11}
          step={0.1}
          value={wallpaperWidth}
          onChange={(e) => {
            setWallpaperWidthPieces(e.target.value);
          }}
        />
      </FormLabel>
      <h3>You need {Math.ceil(totalAmount)} meters of wallpaper.</h3>
    </Stack>
  );
}

export default Wallpaper;
