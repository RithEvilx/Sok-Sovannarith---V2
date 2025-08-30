import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "@/views/Home";
import Navbar from "./components/views/Navbar";
import FloatSetting from "./components/FloatSetting";

const Router = () => {
  return (
    <BrowserRouter>
      <FloatSetting />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
