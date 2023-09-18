import { BrowserRouter, Routes, Route } from "react-router-dom";
import Joinus from "./Pages/Joinus";
import Home from "./Pages/Home";
import Aboutus from "./Pages/Aboutus";
import OurServices from "./Pages/OurServices";
import YoungAdultDivision from "./Pages/YoungAdultDivision";
import FamilyDivision from "./Pages/FamilyDivision";
import ParentLogin from "./Pages/ParentLogin";
import Faq from "./Pages/Faq";
import Contactus from "./Pages/Contactus";
import PreNavbar from "./Pages/PreNavbar";
import Navbar from "./Pages/Navbar";
import Footer from "./Pages/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <PreNavbar />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/join-us" element={<Joinus />} />
          <Route path="/aboutus/:id" element={<Aboutus />} />
          <Route path="ourservices/:id" element={<OurServices />} />
          <Route path="youngadultdivision/:id" element={<YoungAdultDivision />} />
          <Route path="familydivision/:id" element={<FamilyDivision />} />
          <Route path="parentlogin/:id" element={<ParentLogin />} />
          <Route path="faq/:id" element={<Faq />} />
          <Route path="contactus/:id" element={<Contactus />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
