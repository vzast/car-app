import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";
import Home from "./pages/home/Home";
import Services from "./pages/services/Index";
import AboutUs from "./pages/About/Index";
import Contact from "./pages/contact/Index";
import Partners from "./pages/partners/Index";
import ServiceDetail from "./pages/services/ServiceDetail";
import NotFound from "./error/NotFound";
import ScrollToTop from "./location/StarOfPage";

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
