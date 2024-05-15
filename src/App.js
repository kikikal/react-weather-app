import "./App.css";
import ReactWeatherApp from "./ReactWeatherApp";

function App() {
  return (
    <div className="container">
      <div className="App">
        <ReactWeatherApp defaultCity="Melbourne" />
        <p className="small">
          This project was coded by{" "}
          <a href="https://github.com/kikikal" target="_blank" rel="noreferrer">
            Christina Kalyvas
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/kikikal/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on Github
          </a>{" "}
          and{" "}
          <a
            href="https://react-weather-app-ck.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify
          </a>
        </p>
      </div>
    </div>
  );
}
export default App;
