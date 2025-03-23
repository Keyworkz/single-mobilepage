import Header from "./components/Header";
import Footer from "./components/Footer";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <h1 className="p-3 text-2xl font-bold">
                Welcome to the home page
              </h1>
            }
          ></Route>
          <Route
            path="/about"
            element={
              <h1 className="p-3 text-2xl font-bold">
                Welcome to the about page
              </h1>
            }
          ></Route>
          <Route
            path="/services"
            element={
              <h1 className="p-3 text-2xl font-bold">
                Welcome to the services page
              </h1>
            }
          ></Route>
          <Route
            path="/contact"
            element={
              <h1 className="p-3 text-2xl font-bold">
                Welcome to the contact page
              </h1>
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
