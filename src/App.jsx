import "./App.css";
import Header from "./components/Header";
import Test from "./components/Test";
import GlobalStyles from "./components/styles/GlobalStyle";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      {/* <Test /> */}
    </div>
  );
}

export default App;
