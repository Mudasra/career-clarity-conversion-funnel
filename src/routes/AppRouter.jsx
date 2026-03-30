import { BrowserRouter, Route, Routes } from "react-router";
import Navbar from "../components/Navbar/Navbar";
import ThankYouPage from "../pages/ThankYouPage";
import LandingPage from "../pages/LandingPage";
import BookCallPage from "../pages/BookCallPage";
import Footer from "../components/Footer";

export default function AppRouter () {
    return (
        <BrowserRouter>
        <Navbar />
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/book-call" element={<BookCallPage />} />
            <Route path="*" element={<LandingPage />}/>
        </Routes>
        <Footer />
        </BrowserRouter>
    )
}