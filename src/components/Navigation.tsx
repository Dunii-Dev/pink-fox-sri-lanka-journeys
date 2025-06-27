
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, MapPin } from "lucide-react";

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-white/95 backdrop-blur-sm shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-2 rounded-lg">
              <MapPin className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Pink Fox Tourism
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Home
            </Link>
            <Link to="/packages" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Tour Packages
            </Link>
            <Link to="/provinces" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Provinces
            </Link>
            <Link to="/culture" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Culture
            </Link>
            <Link to="/guides" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Guides
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-pink-600 font-medium transition-colors">
              Contact
            </Link>
            <Link 
              to="/booking" 
              className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">
              Home
            </Link>
            <Link to="/packages" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">
              Tour Packages
            </Link>
            <Link to="/provinces" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">
              Provinces
            </Link>
            <Link to="/culture" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">
              Culture
            </Link>
            <Link to="/guides" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">
              Guides
            </Link>
            <Link to="/contact" className="block px-3 py-2 text-gray-700 hover:text-pink-600 font-medium">
              Contact
            </Link>
            <Link to="/booking" className="block mx-3 my-2 bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full text-center">
              Book Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};
