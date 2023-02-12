import './App.css';
import Project from './components/Project/Project';

function App() {
  return (
    <div
      className="App"
      style={{
        backgroundColor: "#93afda",
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
