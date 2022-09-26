import "./App.css";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import GlobalStyles from "./components/General/GlobalStyle";
import CurrentScore from "./components/CurrentScore/CurrentScore";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* <Test /> */}
      <CurrentScore />
    </div>
  );
}

export default App;
