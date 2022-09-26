import "./App.css";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import GlobalStyles from "./components/General/GlobalStyle";
import Scoreboard from "./components/Scoreboard/Scoreboard";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* <Test /> */}
      <Scoreboard />
    </div>
  );
}

export default App;
