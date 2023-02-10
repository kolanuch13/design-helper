
function Answer({ project }) {
    console.log(project.length); 
    const floorSquare = (project.length * project.width) / 1000000;
    const wallsSquare = ((2 * (project.length * project.height)) + (2 * (project.width * project.height))) / 1000000;

  return (
    <div>
      <p>Your floor square: {floorSquare}m2</p>
      <p>Your walls square: {wallsSquare}m2</p>
    </div>
  );
}

export default Answer;
