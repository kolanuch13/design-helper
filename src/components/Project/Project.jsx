import { useState } from "react";
import Answer from "../Answers/Answer";

function Project() {
    const [length, setLength] = useState(0);
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
    const [project, setProject] = useState();


    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        switch (name) {
          case "length":
            setLength(value);
            break;
          case "width":
            setWidth(value);
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
            length: Number(length),
            width: Number(width),
            height: Number(height),
        })
        return;
    }

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <label>
            Input room length
            <input
              type="number"
              value={length}
              name="length"
              onChange={handleChange}
            />
          </label>
          <label>
            Input room width
            <input
              type="number"
              value={width}
              name="width"
              onChange={handleChange}
            />
          </label>
          <label>
            Input room height
            <input
              type="number"
              value={height}
              name="height"
              onChange={handleChange}
            />
                </label>
                <button type="submit">Submit</button>
        </form>
            <div>
                {project && <Answer project={project} />}
            </div>
      </div>
    );
}

export default Project;
