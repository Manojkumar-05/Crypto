import { createRoot } from "react-dom/client";
import "./index.css";
// import { NextUIProvider } from "@nextui-org/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import transition from "./heplers/transition"; // Import the transition HOC
import Home from "./pages/Home.jsx";
import Show from "./pages/Show.jsx";
import Header from "./compoenets/Header";
import { AnimatePresence } from "framer-motion";

const TransitionedHome = transition(Home); // Apply the transition to Home
const TransitionedShow = transition(Show); // Apply the transition to Home

createRoot(document.getElementById("root")).render(
  // <NextUIProvider>
    <BrowserRouter>
      <div className="bg-slate-200 font-Montserrat">
        <AnimatePresence mode="wait">
        <Header />
          <Routes>
            <Route index element={<TransitionedHome />} />
            <Route path="/:id" element={<TransitionedShow />} />
          </Routes>
        </AnimatePresence>
      </div>
    </BrowserRouter>
  // </NextUIProvider>  
);
