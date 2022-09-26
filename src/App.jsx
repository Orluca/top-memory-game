import "./App.css";
import Header from "./components/Header/Header";
import Test from "./components/Test";
import GlobalStyles from "./components/General/GlobalStyle";
import Score from "./components/Score/Score";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* <Test /> */}
      <Score name="Score" value="5" />
      <Score name="Best" value="10" />
    </div>
  );
}

export default App;
