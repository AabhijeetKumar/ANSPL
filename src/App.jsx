import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";

// COMPONENTS----------------------------->
import Hero from "./Final/Components/Hero";
import Footer from "./Final/Components/Footer";
import "./App.css";
import Navbar from "./Final/Components/Navbar";
import WhatsAppButton from "./Final/Components/WhatasppBtn/WhatsAppBtn";
import Client from "./Final/Components/OurClient/Clients";
import Products from "./Final/Components/Products/Products";
import CallUs from "./Final/Components/CallUs";
import ScrollToTop from "./ScrollToTop";
import Contact from "./Final/Components/Contact";
import GalleryCmp from "./Final/Components/GalleryCmp";
//import Testimonials from "./Final/Components/Testimoils/Testimonials";


// PAGES--------------------------------->
import ContactPg from "./Final/Pages/ContactUs";
import Gallery from "./Final/Pages/Gallery/Gallery";
import AboutUs from "./Final/Pages/AboutUs/AboutUs";

import VerticalItems from "./Final/Pages/Verticals/VerticalsItems";
import ProductsItems from "./Final/Pages/Products/ProductsItems";
import ServicesItems from "./Final/Pages/Services/ServicesItems";
import ProjectConsultingItems from "./Final/Pages/Project Consulting/ProjectConsultingItems";

function App() {
  return (
    <Router>
      {/* Scroll to Top on every route change */}
      <ScrollToTop />
      <WhatsAppButton />
      <Navbar />

      <Routes>

        <Route
          path="/"
          element={
            <>
              <Hero />
              <Products />
              <Client />
              <CallUs />
              <Contact />
              {/* <Testimonials /> */}
              <GalleryCmp />
              <Footer />
            
            </>
          }
        />

        {/* Verticals Page */}
        <Route 
        path="/verticals/:productId" 
        element={
          <>
          <VerticalItems />
          <CallUs />
          <Contact />
          <Footer />
          </>
          } 
        />


        {/* Products Page */}
        <Route 
        path="/products/:productId" 
        element={
          <>
          <ProductsItems />
          <CallUs />
          <Contact />
          <Footer />
          </>
          } 
        />

        {/* Services Page */}
        <Route 
        path="/services/:productId" 
        element={
          <>
          <ServicesItems />
          <CallUs />
          <Contact />
          <Footer />
          </>
          } 
        />

        {/* ProjectConsulting Page */}
        <Route 
        path="/projectconsulting/:productId" 
        element={
          <>
          <ProjectConsultingItems />
          <CallUs />
          <Contact />
          <Footer />
          </>
          } 
        />
        

        {/* ContactUs Page */}
        <Route
          path="/contactus"
          element={
            <>
              {/* <ContactForm /> */}
              <ContactPg />
              <CallUs />
              <Footer />
            </>
          }
        />

        {/* AboutUS Page */}
        <Route
          path="/aboutus" 
          element={
            <>
              <AboutUs />
              <CallUs />
              <Contact />
              <Footer />
            </>
          }
        /> 


        {/* Gallery Page */}
        <Route
          path="/gallery"
          element={
            <>
              <Gallery />
              <CallUs />
              <Contact />
              <Footer />
            </>
          }
        />

      
      </Routes>
    </Router>
  );
}

export default App;
