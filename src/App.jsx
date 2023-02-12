import './App.css';
import Project from './components/Project/Project';

function App() {
  return (
    <div
      className="App"
      style={{
        background: `linear-gradient(270deg, #dae1f5 0%, #5d729c 100%)`,
        width: "100vw",
        minHeight: "100vh",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
      }}
    >
      <Project />
    </div>
  );
}

export default App;
