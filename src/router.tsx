import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/views/Home";
import Navbar from "./components/views/Navbar";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
