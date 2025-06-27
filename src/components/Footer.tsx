
import { Link } from "react-router-dom";
import { MapPin, Users, Calendar, Clock } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 p-2 rounded-lg">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-orange-400 bg-clip-text text-transparent">
                Pink Fox Tourism
              </span>
            </div>
            <p className="text-gray-300">
              Your trusted partner for authentic Sri Lankan travel experiences. 
              Discover the pearl of the Indian Ocean with our expert guides.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Explore</h3>
            <ul className="space-y-2">
              <li><Link to="/packages" className="text-gray-300 hover:text-pink-400 transition-colors">Tour Packages</Link></li>
              <li><Link to="/provinces" className="text-gray-300 hover:text-pink-400 transition-colors">Provinces</Link></li>
              <li><Link to="/culture" className="text-gray-300 hover:text-pink-400 transition-colors">Cultural Experiences</Link></li>
              <li><Link to="/guides" className="text-gray-300 hover:text-pink-400 transition-colors">Tour Guides</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              <li className="flex items-center text-gray-300"><Users className="h-4 w-4 mr-2 text-pink-400" />Multilingual Guides</li>
              <li className="flex items-center text-gray-300"><MapPin className="h-4 w-4 mr-2 text-orange-400" />Transportation</li>
              <li className="flex items-center text-gray-300"><Calendar className="h-4 w-4 mr-2 text-pink-400" />Accommodation</li>
              <li className="flex items-center text-gray-300"><Clock className="h-4 w-4 mr-2 text-orange-400" />Custom Tours</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>Colombo, Sri Lanka</p>
              <p>info@pinkfoxtourism.lk</p>
              <p>+94 11 234 5678</p>
              <p className="text-sm">24/7 Emergency Support</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center">
          <p className="text-gray-400">
            © 2024 Pink Fox Tourism. All rights reserved. | Licensed Tour Operator in Sri Lanka
          </p>
        </div>
      </div>
    </footer>
  );
};
