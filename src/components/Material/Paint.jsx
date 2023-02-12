import { useState } from "react";
import { FormLabel, InputBase, Stack } from "@mui/material";

function Paint({square}) {
  const [litPerMeter, setLitPerMeter] = useState(1)
  const answer = Math.ceil(square * Number(litPerMeter) * 100) / 100;

  return (
    <Stack>
      <FormLabel>
        <p>Input liters per square meter</p>
        <InputBase
          sx={{
            backgroundColor: "#5789c2",
            padding: "5px",
            borderRadius: "3px",
          }}
          type="number"
          value={litPerMeter}
          onChange={(e) => {
            setLitPerMeter(e.target.value);
          }}
        />
      </FormLabel>
      <h3>You need {answer} liters of paint.</h3>
    </Stack>
  );
}

export default Paint;
