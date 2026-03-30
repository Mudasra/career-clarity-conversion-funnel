import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import LandingPage from "../pages/LandingPage/LandingPage";
import ThankYouPage from "../pages/ThankYouPage/ThankYouPage";

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