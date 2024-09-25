import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";
import ScrollToTop from "./location/StarOfPage";
import Home from "./pages/home/Home";
import Services from "./pages/services/Index";
import Contact from "./pages/contact/Index";
import NotFound from "./error/NotFound";
import AboutUs from "./pages/About/Index";
import ServiceDetail from "./pages/services/ServiceDetail";
import Accessories from "./components/Accessories";
import AccessoriesDetail from "./components/AccessoriesDetails";

function App() {
  return (
    <>
      <Nav />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/service/:id" element={<ServiceDetail />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/accessories" element={<Accessories />} />
        <Route path="/accessories/:id" element={<AccessoriesDetail />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
