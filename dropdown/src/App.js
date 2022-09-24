import React, { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
const App = () => {
  const [darkMode, setDarkmode] = useState(false);

  function toggleDarkMode() {
    setDarkmode((prevMode) => !prevMode);
  }
  return (
    <div className="container">
      <Nav toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
      <Main  darkMode={darkMode} />
      <Footer  darkMode={darkMode} />
    </div>
  );
};

export default App;
