import "./App.css";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Day from "./components/Day";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className={"App"}>
      <Header />
      <Outlet />
    </div>
  );
}

export default App;
