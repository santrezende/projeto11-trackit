import HomePage from "./HomePage/HomePage";
import SingUp from "./SingUp/SingUp";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cadastro" element={<SingUp />} />
          <Route path="/habitos" element={<Habits />} />
          <Route path="/hoje" element={<Today />} />
          <Route path="/historico" element={<History />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}