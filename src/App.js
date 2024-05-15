import "./App.css";
import ReactWeatherApp from "./ReactWeatherApp";

function App() {
  return (
    <div className="container">
      <div className="App">
        <ReactWeatherApp />
        <p>
          This project was coded by <a href="/">Christina Kalyvas</a> and is
          <a href="/">open-sourced on Github</a> and{" "}
          <a href="/">hosted on Netlify</a>
        </p>
      </div>
    </div>
  );
}
export default App;
