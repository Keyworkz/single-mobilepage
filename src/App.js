import "./App.css";
import Header from "./components/Header";
import HelloName from "./components/HelloName";
import Navigation from "./views/Navigation";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <Navigation />
        <HelloName name="Aartie" />
      </header>
    </div>
  );
}

export default App;
