import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // Detect route change

  // Close navbar when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  return (
    <nav className="bg-black text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center h-[80px]">
        <h1 className="text-2xl font-bold ml-[50px]">
          Gold<span className="text-[#5628FF]">LSAT</span>
        </h1>

        <button className="md:hidden p-2" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        <div className="hidden md:flex space-x-12 items-center mr-[50px]">
          <Link to="/" className="hover:text-gray-400">Home</Link>
          <Link to="/about" className="hover:text-gray-400">About</Link>
          <Link to="/service" className="hover:text-gray-400">Service</Link>
          <Link to="/contact" className="hover:text-gray-400">Contact</Link>
          <Link to="/" className="hover:text-gray-400">Login</Link>
          <Link to="/" className="px-[20px] py-[10px] rounded bg-[#5628FF]">
            Book Now
          </Link>
        </div>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden flex flex-col space-y-2 mt-2 p-4 bg-gray-800 rounded-lg items-center"
        >
          <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/about" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/service" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Service</Link>
          <Link to="/contact" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/" className="hover:text-gray-400" onClick={() => setIsOpen(false)}>Login</Link>
          <Link to="/" className="px-[20px] py-[10px] rounded bg-[#5628FF]" onClick={() => setIsOpen(false)}>
            Book Now
          </Link>
        </motion.div>
      )}
    </nav>
  );
}
