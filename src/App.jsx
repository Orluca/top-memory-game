import "./App.css";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import Scoreboard from "./components/Scoreboard/Scoreboard";
import Gameboard from "./components/Gameboard/Gameboard";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <Test /> */}
      <Scoreboard />
      <Gameboard />
    </div>
  );
}

export default App;
