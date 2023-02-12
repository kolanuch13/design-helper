import { useState } from "react";
import Walls from "../Surfaces/Walls";
import { Checkbox, FormLabel, InputBase, Stack } from "@mui/material";

function Answer({ project }) {
  const [door, setDoor] = useState(false)
  const [doorWidth, setDoorWidth] = useState()
  const [doorHeight, setDoorHeight] = useState()
  const [doorQuantity, setDoorQuantity] = useState()
  
  const doorSquare = doorQuantity ? (doorHeight*doorWidth) * doorQuantity : 0;
  const floorSquare = project.square;
  const wallsSquare = (project.perimeter * project.height) - doorSquare;
  
  return (
    <div>
      <Stack>
        <p>Your floor square: {floorSquare}m2</p>
        <p>Your walls square: {wallsSquare}m2</p>
      </Stack>
      <FormLabel>
        I have a doors
        <Checkbox
          value={door}
          onChange={() => {
            setDoor(!door);
          }}
        />
      </FormLabel>
      {door && (
        <Stack>
          <p>Input door params</p>
          <FormLabel>
            <p>Width</p>
            <InputBase
            sx={{
              backgroundColor: "#5789c2",
              padding: "5px",
              borderRadius: "3px",
            }} 
            type="number" 
            value={doorWidth} 
            onChange={e=>{setDoorWidth(e.target.value)}}
            />
          </FormLabel>
          <FormLabel>
            <p>Height</p>
            <InputBase
            sx={{
              backgroundColor: "#5789c2",
              padding: "5px",
              borderRadius: "3px",
            }} 
            type="number" 
            value={doorHeight} 
            onChange={e=>{setDoorHeight(e.target.value)}}
            />
          </FormLabel>
          <FormLabel>
            <p>Quantity</p>
            <InputBase
            sx={{
              backgroundColor: "#5789c2",
              padding: "5px",
              borderRadius: "3px",
            }} 
            type="number" 
            value={doorQuantity} 
            onChange={e=>{setDoorQuantity(e.target.value)}}
            />
          </FormLabel>
        </Stack>
      )}
      <Walls
        wallsSquare={wallsSquare}
        wallsHeight={project.height}
        wallsLength={project.perimeter}
      />
    </div>
  );
}

export default Answer;
