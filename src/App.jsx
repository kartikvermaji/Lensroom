
import { BrowserRouter, Navigate, Routes, Route, Router } from "react-router-dom";
import Contact from "./pages/Contact"
import Homepage from "./pages/Homepage";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage/> }/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}