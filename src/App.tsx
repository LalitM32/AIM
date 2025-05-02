import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './pages/HomePage';
import BrandPage from './pages/BrandPage';
import Footer from './components/footer/Footer';
import ContactPage from './pages/ContactPage';
import FranchiseShowPage from './pages/FranchiseShowPage';
import AboutPage from './pages/AboutPage';
import IvoryPage from './pages/brands/IvoryPage';
import ChhupaRustamPage from './pages/brands/ChhupaRustamPage';
import AviaryPage from './pages/brands/AviaryPage';
import UpcomingOutletsPage from './pages/UpcomingOutletsPage';
import AListerHubPage from './pages/recognition/AListerHubPage';
import AwardsPage from './pages/recognition/AwardsPage';
import MediaPage from './pages/recognition/MediaPage';
import EventsPage from './pages/recognition/EventsPage';
import StoryPage from './pages/about/StoryPage';
import TeamPage from './pages/about/TeamPage';
import VisionPage from './pages/about/VisionPage';
import SustainabilityPage from './pages/about/SustainabilityPage';
import BrandsPage from './pages/BrandsPage';
import AllBrandsPage from './pages/brands/AllBrandsPage';
import RestaurantLinkTree from './components/RestaurantLinkTree';
import BookingForm from './components/BookingForm';
import CaseStudyPage from './pages/CaseStudyPage';
import CaseStudyListPage from './pages/CaseStudyListPage';

function App() {
  return (
    <BrowserRouter>
      <div className="bg-deep-black text-cream">
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brands/:brandId" element={<BrandPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/franchise" element={<FranchiseShowPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/brands/ivory" element={<IvoryPage />} />
          <Route path="/brands/chhupa-rustam" element={<ChhupaRustamPage />} />
          <Route path="/brands/aviary" element={<AviaryPage />} />
          <Route path="/upcoming-outlets" element={<UpcomingOutletsPage />} />
          <Route path="/recognition/a-lister" element={<AListerHubPage />} />
          <Route path="/recognition/awards" element={<AwardsPage />} />
          <Route path="/recognition/media" element={<MediaPage />} />
          <Route path="/recognition/events" element={<EventsPage />} />
          <Route path="/about/story" element={<StoryPage />} />
          <Route path="/about/team" element={<TeamPage />} />
          <Route path="/about/vision" element={<VisionPage />} />
          <Route path="/about/sustainability" element={<SustainabilityPage />} />
          <Route path="/brands" element={<BrandsPage />} />
          <Route path="/all-brands" element={<AllBrandsPage />} />
          <Route path="/restaurants" element={<RestaurantLinkTree />} />
          <Route path="/booking/:restaurantId" element={<BookingForm />} />
          <Route path="/booking" element={<BookingForm />} />
          <Route path="/case-studies" element={<CaseStudyListPage />} />
          <Route path="/case-studies/:id" element={<CaseStudyPage />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;