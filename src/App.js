import Header from "./components/Header";
import HelloName from "./components/HelloName";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HelloName name="Aartie" />
        <Footer />
      </header>
    </div>
  );
}

export default App;
