import "./App.css";
import ReactWeatherApp from "./ReactWeatherApp";

function App() {
  return (
    <div className="container">
      <div className="App">
        <ReactWeatherApp />
        <p>
          This project was coded by{" "}
          <a href="https://github.com/kikikal">Christina Kalyvas</a> and is{" "}
          <a href="https://github.com/kikikal/react-weather-app">
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a href="https://react-weather-app-ck.netlify.app/">
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
export default App;
