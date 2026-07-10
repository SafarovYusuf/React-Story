import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import MainContent from "./components/MainContent";
import ProductPage from "./components/ProductPage";
import TopSellers from "./components/TopSellers";
import PopularBlogs from "./components/PopularBlogs";
import Owners from "./components/Owners";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Faqat Owners sahifasi */}
        <Route path="/owners" element={<Owners />} />

        {/* Asosiy layout */}
        <Route
          path="*"
          element={
            <div className="flex h-screen">
              <Sidebar />

              <div className="w-full flex justify-between flex-wrap">
                <Routes>
                  <Route path="/" element={<MainContent />} />
                  <Route path="/product/:id" element={<ProductPage />} />
                </Routes>

                <div>
                  <TopSellers />
                  <PopularBlogs />
                </div>
              </div>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}
