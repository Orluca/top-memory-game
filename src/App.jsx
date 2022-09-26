import "./App.css";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import GlobalStyles from "./components/General/GlobalStyle";
import CurrentScore from "./components/CurrentScore/CurrentScore";
import BestScore from "./components/BestScore/BestScore";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* <Test /> */}
      <CurrentScore />
      <BestScore />
    </div>
  );
}

export default App;
