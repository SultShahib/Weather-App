import "./App.css";
import Header from "./components/Nav/Nav";
import Realtime from "./components/Realtime";

export const API = "http://api.weatherapi.com/v1";
export const KEY = "f7139efdcaea4fc9829230426222208";

function App() {
  return (
    <>
      <Header />
      <Realtime />
    </>
  );
}

export default App;
