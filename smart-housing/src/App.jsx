import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import DashboardPage from "./pages/DashboardPage";

// Complaint Pages
import ComplaintPage from "./pages/ComplaintPage";
import RaiseComplaintPage from "./pages/RaiseComplaintPage";
import ComplaintDetailsPage from "./pages/ComplaintDetailsPage";

// Marketplace Pages
import MarketplacePage from "./pages/MarketplacePage";
import ProductDetailsPage from "./pages/ProductDetailsPage";
import SellProductPage from "./pages/SellProductPage";
import MyListingsPage from "./pages/MyListingsPage";
import WishlistPage from "./pages/WishlistPage";

// Community Pages
import CommunityPage from "./pages/CommunityPage";
import CreatePostPage from "./pages/CreatePostPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import EventsPage from "./pages/EventsPage";
import NoticeBoardPage from "./pages/NoticeBoardPage";
import ResidentDirectoryPage from "./pages/ResidentDirectoryPage";
import ChatPreviewPage from "./pages/ChatPreviewPage";

// About & Contact
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <Routes>

      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Dashboard */}
      <Route path="/dashboard" element={<DashboardPage />} />

      {/* Complaint Module */}
      <Route path="/complaints" element={<ComplaintPage />} />
      <Route path="/complaints/new" element={<RaiseComplaintPage />} />
      <Route
        path="/complaints/details"
        element={<ComplaintDetailsPage />}
      />

      {/* Marketplace Module */}
      <Route path="/marketplace" element={<MarketplacePage />} />
      <Route
        path="/marketplace/product"
        element={<ProductDetailsPage />}
      />
      <Route
        path="/marketplace/sell"
        element={<SellProductPage />}
      />
      <Route
        path="/marketplace/my-listings"
        element={<MyListingsPage />}
      />
      <Route
        path="/marketplace/wishlist"
        element={<WishlistPage />}
      />

      {/* Community Module */}
      <Route path="/community" element={<CommunityPage />} />
      <Route path="/community/create" element={<CreatePostPage />} />
      <Route path="/community/post" element={<PostDetailsPage />} />
      <Route path="/community/events" element={<EventsPage />} />
      <Route path="/community/notices" element={<NoticeBoardPage />} />
      <Route
        path="/community/residents"
        element={<ResidentDirectoryPage />}
      />
      <Route
        path="/community/chat"
        element={<ChatPreviewPage />}
      />

      {/* About */}
      <Route path="/about" element={<AboutPage />} />

      {/* Contact */}
      <Route path="/contact" element={<ContactPage />} />

    </Routes>
  );
}

export default App;