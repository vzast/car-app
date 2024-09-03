import  { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./footer";
import Nav from "./nav";
import ScrollToTop from "./location/StarOfPage";
import CircularProgress from '@mui/material/CircularProgress'; 

const Home = lazy(() => import("./pages/home/Home"));
const Services = lazy(() => import("./pages/services/Index"));
const AboutUs = lazy(() => import("./pages/About/Index"));
const Contact = lazy(() => import("./pages/contact/Index"));
const ServiceDetail = lazy(() => import("./pages/services/ServiceDetail"));
const NotFound = lazy(() => import("./error/NotFound"));


const Loader = () => (
  <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
    <CircularProgress />
  </div>
);

function App() {
  return (
    <>
      <Nav />
      <ScrollToTop />
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/service/:id" element={<ServiceDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
