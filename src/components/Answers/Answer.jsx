import { useState } from "react";
import Walls from "../Surfaces/Walls";
import { Checkbox, FormLabel, InputBase, Stack } from "@mui/material";

function Answer({ project }) {
  const [door, setDoor] = useState(false);
  const [doorWidth, setDoorWidth] = useState();
  const [doorHeight, setDoorHeight] = useState();
  const [doorQuantity, setDoorQuantity] = useState();

  const [window, setWindow] = useState(false);
  const [windowWidth, setWindowWidth] = useState();
  const [windowHeight, setWindowHeight] = useState();
  const [windowQuantity, setWindowQuantity] = useState();

  
  const doorSquare = doorQuantity ? (doorHeight * doorWidth) * doorQuantity : 0;
  const windowSquare = windowQuantity ? (windowHeight * windowWidth) * windowQuantity : 0;
  const floorSquare = project.square;
  const wallsSquare = (project.perimeter * project.height) - (doorSquare + windowSquare);
  
  return (
    <div>
      <Stack>
        <p>Your floor square: {floorSquare}m2</p>
        <p>Your walls square: {wallsSquare}m2</p>
      </Stack>
      <Stack
        sx={{
          display: "felx",
          flexDirection: "row",
          alignItems: "flexStart",
          justifyContent: "center",
          gap: "30px"
        }}
      >
        {/* ------ DOORS ------ */}
        <Stack
          sx={{
            width: "200px",
            display: "felx",
            flexDirection: "column",
          }}
        >
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
                  onChange={(e) => {
                    setDoorWidth(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDoorHeight(e.target.value);
                  }}
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
                  onChange={(e) => {
                    setDoorQuantity(e.target.value);
                  }}
                />
              </FormLabel>
            </Stack>
          )}
        </Stack>
        {/* ------ WINDOWS ------ */}
        <Stack
          sx={{
            width: "200px",
            display: "felx",
            flexDirection: "column",
          }}
        >
          <FormLabel>
            I have a windows
            <Checkbox
              value={window}
              onChange={() => {
                setWindow(!window);
              }}
            />
          </FormLabel>
          {window && (
            <Stack>
              <p>Input window params</p>
              <FormLabel>
                <p>Width</p>
                <InputBase
                  sx={{
                    backgroundColor: "#5789c2",
                    padding: "5px",
                    borderRadius: "3px",
                  }}
                  type="number"
                  value={windowWidth}
                  onChange={(e) => {
                    setWindowWidth(e.target.value);
                  }}
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
                  value={windowHeight}
                  onChange={(e) => {
                    setWindowHeight(e.target.value);
                  }}
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
                  value={windowQuantity}
                  onChange={(e) => {
                    setWindowQuantity(e.target.value);
                  }}
                />
              </FormLabel>
            </Stack>
          )}
        </Stack>
      </Stack>
      <Walls
        wallsSquare={wallsSquare}
        wallsHeight={project.height}
        wallsLength={project.perimeter}
      />
    </div>
  );
}

export default Answer;
