import "./App.css";
import Routes from "./routes/index";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />

      <Routes />
    </div>
  );
}

export default App;
