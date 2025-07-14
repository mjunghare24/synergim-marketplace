import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import WhyChooseSection from './components/WhyChooseSection';
import ContinueChoice from './components/ContinueChoice';
import BuyerLogin from './pages/BuyerLogin';
import SellerLogin from "./pages/SellerLogin";
import HowItWorksSection from './components/HowItWorksSection';
import Footer from "./components/Footer";

function App() {
  return (
    <div className="font-inter">
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <HeroSection />
              <WhyChooseSection />
              <ContinueChoice />
              <HowItWorksSection />
              <Footer />
            </>
          }
        />
        <Route path="/buyer-login" element={<BuyerLogin />} />
        <Route path="/seller-login" element={<SellerLogin />} />
      </Routes>
    </div>
  );
}


export default App;
