import { useState } from "react";
import Answer from "../Answers/Answer";
import {
  Stack,
  Button, 
  FormLabel,
  FilledInput,
  Container,
  InputBase,
} from "@mui/material";

const Project = () => {
    const [square, setSquare] = useState();
    const [perimeter, setPerimeter] = useState();
    const [height, setHeight] = useState();
    const [project, setProject] = useState();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
            case "square":
                setSquare(value);
                break;
            case "perimeter":
                setPerimeter(value);
                break;
            case "height":
                setHeight(value);
                break;
            default:
                break;
        }
    }; 

    const handleSubmit = (e) => {
        e.preventDefault()
        setProject({
          square: Number(square),
          perimeter: Number(perimeter),
          height: Number(height),
        });
        return;
    }

    return (
      <Container>
        <Container>
          <form
            onSubmit={handleSubmit}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
            }}
          >
            <Stack
              spacing={1}
              width="480px"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <FormLabel>
                <p>Input room perimeter</p>
                <InputBase
                  sx={{
                    backgroundColor: "#5789c2",
                    padding: "5px",
                    borderRadius: "3px",
                  }}
                  type="number"
                  value={perimeter}
                  name="perimeter"
                  onChange={handleChange}
                />
              </FormLabel>
              <FormLabel>
                <p>Input room square</p>
                <InputBase
                  sx={{
                    backgroundColor: "#5789c2",
                    padding: "5px",
                    borderRadius: "3px",
                  }}
                  type="number"
                  value={square}
                  name="square"
                  onChange={handleChange}
                />
              </FormLabel>
              <FormLabel>
                <p>Input room height</p>
                <InputBase
                  sx={{
                    backgroundColor: "#5789c2",
                    padding: "5px",
                    borderRadius: "3px",
                  }}
                  type="number"
                  value={height}
                  name="height"
                  onChange={handleChange}
                />
              </FormLabel>
              <Button
                variant="contained"
                type="submit"
                style={{
                  width: "200px",
                }}
              >
                Submit
              </Button>
            </Stack>
          </form>
        </Container>
        <Container>{project && <Answer project={project} />}</Container>
      </Container>
    );
}

export default Project;
