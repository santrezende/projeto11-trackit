import HomePage from "./HomePage/HomePage";
import SingUp from "./SingUp/SingUp";
import Habits from "./Habits/Habits";
import Today from "./Today/Today";
import History from "./History/History";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Context from "./Context";
import React from "react";

export default function App() {
  const [imageURL, setImageURL] = React.useState("");
  const [token, setToken] = React.useState("");

  const contextValue = { imageURL, token };

  return (
    <>
      <Context.Provider value={contextValue}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage setToken={setToken} setImageURL={setImageURL} />} />
            <Route path="/cadastro" element={<SingUp />} />
            <Route path="/habitos" element={<Habits />} />
            <Route path="/hoje" element={<Today />} />
            <Route path="/historico" element={<History />} />
          </Routes>
        </BrowserRouter>
      </Context.Provider>
    </>
  );
}