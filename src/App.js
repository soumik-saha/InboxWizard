import { Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login.js";

function App() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;