import logo from './logo.svg';
import './App.css';
import Login from "./components/Login"
import Common from "./components/Common"
import Test from "./components/Test"
import Signup from './components/Signup';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    // <Common/>
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Signup />}/>
          <Route path="login" element={<Login />} />
          <Route path="test" element={<Test />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
