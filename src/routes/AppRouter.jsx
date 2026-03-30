import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import ThankYouPage from "../pages/ThankYouPage";
import LandingPage from "../pages/LandingPage";

export default function AppRouter () {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="*" element={<LandingPage />}/>
        </Routes>
        </BrowserRouter>
    )
}