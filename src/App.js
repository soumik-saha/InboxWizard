import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";
// import Dashboard from "./components/Onebox/Dashboard.js"; // Import the Dashboard component
import OneBox from "./components/Dashboard/Onebox.js";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/onebox" element={<OneBox />} />
    </Routes>
  );
}

export default App;