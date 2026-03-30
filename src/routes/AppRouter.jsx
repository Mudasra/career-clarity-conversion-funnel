import { BrowserRouter, Route, Routes } from "react-router";
import LandingPage from "../pages/LandingPage";
import ThankYouPage from "../pages/ThankYouPage";

export default function AppRouter () {
    return (
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
        </Routes>
        </BrowserRouter>
    )
}