import "./App.css";
import Header from "./components/Nav/Nav";
import Realtime from "./components/Header/Header";
import Signup from "./Authentication/Signup";
import { Container } from "react-bootstrap";
import AuthProvider from "./contexts/AuthContext";

export const API = "http://api.weatherapi.com/v1";
export const KEY = "f7139efdcaea4fc9829230426222208";

function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Realtime />
        <Container>{/* <Signup /> */}</Container>
      </AuthProvider>
    </>
  );
}

export default App;
