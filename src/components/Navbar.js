import React from "react";
import { Link } from "react-router-dom";
import logo from "./Gemini_Generated_Image_qjlg8rqjlg8rqjlg.jpg"

const Navbar = () => (
  <nav className="bg-blue-600 text-white h-14 w-full flex items-center justify-between px-6 shadow-md">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-600 text-lg font-bold">
        <img src={logo} alt="" />
      </div>
      <span className="text-xl font-bold">KYC Assignment</span>
    </div>

    <div className="flex gap-6">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/compare" className="hover:underline">Compare</Link>
    </div>
    <div className="flex items-center gap-4">
      <div className="w-8 h-8 bg-white rounded-full text-blue-600 flex items-center justify-center">
        🔍
      </div>
    </div>
  </nav>
);

export default Navbar;
