import React from "react";
import Camera from "../components/products/Camera";
import Projector from "../components/products/Projector";
import Drone from "../components/products/Drone";
import Ps5 from "../components/products/Ps5";
import Vr from "../components/products/Vr";
import CampingBag from "../components/products/CampingBag";
import Snowboard from "../components/products/Snowboard";
import Kayaks from "../components/products/Kayaks";
import Surfboard from "../components/products/Surfboard";
import Bicycle from "../components/products/Bicycle";

const products = [
  { id: 1, name: "Camera", category: "Electronic", component: <Camera /> },
  { id: 2, name: "Projector", category: "Electronic", component: <Projector /> },
  { id: 3, name: "Drone", category: "Electronic", component: <Drone /> },
  { id: 4, name: "Ps5", category: "Electronic", component: <Ps5 /> },
  { id: 5, name: "Vr", category: "Electronic", component: <Vr /> },
  { id: 6, name: "Camping Bag", category: "Sports & Outdoors", component: <CampingBag /> },
  { id: 7, name: "Snowboard", category: "Sports & Outdoors", component: <Snowboard /> },
  { id: 8, name: "Kayaks", category: "Sports & Outdoors", component: <Kayaks /> },
  { id: 9, name: "Surfboard", category: "Sports & Outdoors", component: <Surfboard /> },
  { id: 10, name: "Bicycle", category: "Sports & Outdoors", component: <Bicycle /> },
];

const Products = () => {
  const location = window.location; // or use useLocation() from react-router-dom
  const queryParams = new URLSearchParams(location.search);
  const searchQuery = queryParams.get("search")?.toLowerCase() || "";

  // Filter products by name (case-insensitive)
  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery)
  );

  // Separate categories again (optional)
  const electronics = filteredProducts.filter(p => p.category === "Electronic");
  const sportsOutdoors = filteredProducts.filter(p => p.category === "Sports & Outdoors");

  return (
    <div>
      {/* your header and notice */}
      <div className="w-full py-2.5 font-medium text-sm text-white bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500">
        <div className="max-w-screen-xl mx-auto flex flex-col sm:flex-row justify-center items-center gap-4 text-center">
          <p>🚚 Free Shipping</p>
          <span className="hidden sm:inline">|</span>
          <p>🎁 Best Return Policy</p>
          <span className="hidden sm:inline">|</span>
          <p><strong>HURRY UP</strong></p>
        </div>
      </div>
      <div className="flex items-center space-x-2.5 border border-violet-500/30 bg-violet-500/20 p-1 text-sm text-violet-600">
        <div className="flex items-center space-x-1 bg-violet-500 text-white border border-violet-500 rounded-3xl px-3 py-1">
          <p>Notice:</p>
        </div>
        <p className="pr-3">Price listed is for one day!</p>
      </div>

      <div style={{ padding: "40px 20px", backgroundColor: "#f9fafb", minHeight: "100vh" }}>
        <h1 className="text-2xl font-bold mb-10 text-gray-900">Electronic Products:</h1>
        <div className="flex flex-wrap gap-15 ">
          {electronics.length === 0 ? <p>No matching electronic products found.</p> : electronics.map(p => (
            <React.Fragment key={p.id}>{p.component}</React.Fragment>
          ))}
        </div>

        <h1 className="my-5 text-2xl font-bold mb-10 text-gray-900">Sports & Outdoors:</h1>
        <div className="flex flex-wrap gap-15 ">
          {sportsOutdoors.length === 0 ? <p>No matching sports & outdoors products found.</p> : sportsOutdoors.map(p => (
            <React.Fragment key={p.id}>{p.component}</React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
