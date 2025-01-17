import { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Blogs from "./components/Blogs";
import CreateBlog from "./components/CreateBlog";
import Home from "./components/Home"; // Import Home component
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import BlogDetail from "./components/BlogDetail";
import EditBlog from "./components/EditBlog";

function App() {
  return (
    <>
      <div className="content">
        <div className="bg-info text-center py-2 shadow-lg">
          <a href="/" className="headertitle text-white">
            Digi Naratives
          </a>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<CreateBlog />} />
          <Route path="/blogs/:id" element={<BlogDetail />} />
          <Route path="/blogs/edit/:id" element={<EditBlog />} />
        </Routes>
        <ToastContainer />
      </div>
      <Footer />
    </>
  );
}

export default App;
