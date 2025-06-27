
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Clock, Users, MapPin, Star } from "lucide-react";
import { Link } from "react-router-dom";

const tourPackages = [
  {
    id: 1,
    title: "Cultural Triangle Explorer",
    province: "North Central Province",
    duration: "5 Days / 4 Nights",
    price: 450,
    rating: 4.9,
    reviews: 127,
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Sigiriya Rock Fortress", "Anuradhapura Ancient City", "Polonnaruwa Ruins", "Traditional Village Tour"],
    includes: ["English/Tamil Guide", "AC Transportation", "4* Hotel Stay", "All Meals"],
    category: "cultural"
  },
  {
    id: 2,
    title: "Hill Country Tea Trail",
    province: "Central Province",
    duration: "4 Days / 3 Nights",
    price: 380,
    rating: 4.8,
    reviews: 93,
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Kandy Temple", "Nuwara Eliya", "Tea Factory Visit", "Train Journey"],
    includes: ["Multilingual Guide", "AC Transportation", "3* Hotel Stay", "Breakfast & Dinner"],
    category: "cultural"
  },
  {
    id: 3,
    title: "Southern Coast Paradise",
    province: "Southern Province",
    duration: "6 Days / 5 Nights",
    price: 520,
    rating: 4.9,
    reviews: 156,
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Galle Fort", "Whale Watching", "Beach Relaxation", "Stilt Fishermen"],
    includes: ["English Guide", "Beach Resort Stay", "Water Activities", "Seafood Meals"],
    category: "beach"
  },
  {
    id: 4,
    title: "Wildlife Safari Adventure",
    province: "Uva Province",
    duration: "3 Days / 2 Nights",
    price: 290,
    rating: 4.7,
    reviews: 84,
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Yala National Park", "Elephant Safari", "Leopard Spotting", "Bird Watching"],
    includes: ["Safari Guide", "4WD Vehicle", "Eco Lodge Stay", "All Meals"],
    category: "wildlife"
  },
  {
    id: 5,
    title: "Eastern Beaches & Lagoons",
    province: "Eastern Province",
    duration: "4 Days / 3 Nights",
    price: 340,
    rating: 4.6,
    reviews: 67,
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Arugam Bay", "Surfing Lessons", "Batticaloa Lagoon", "Local Fishing Experience"],
    includes: ["Surf Instructor", "Beach Hotel", "Equipment Rental", "Fresh Seafood"],
    category: "adventure"
  },
  {
    id: 6,
    title: "Western Province Highlights",
    province: "Western Province",
    duration: "3 Days / 2 Nights",
    price: 250,
    rating: 4.5,
    reviews: 112,
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Colombo City Tour", "Mount Lavinia Beach", "Shopping Experience", "Temple Visits"],
    includes: ["City Guide", "Hotel Stay", "Shopping Tour", "Cultural Shows"],
    category: "cultural"
  }
];

const Packages = () => {
  const [filter, setFilter] = useState("all");
  const [sortBy, setSortBy] = useState("price");

  const filteredPackages = tourPackages.filter(pkg => 
    filter === "all" || pkg.category === filter
  );

  const sortedPackages = [...filteredPackages].sort((a, b) => {
    if (sortBy === "price") return a.price - b.price;
    if (sortBy === "rating") return b.rating - a.rating;
    if (sortBy === "duration") return parseInt(a.duration) - parseInt(b.duration);
    return 0;
  });

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Tour Packages</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Discover our carefully crafted tour packages covering all nine provinces of Sri Lanka. 
            Each package includes expert guides, comfortable accommodation, and authentic experiences.
          </p>
        </div>
      </section>

      {/* Filters and Sorting */}
      <section className="py-8 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-wrap gap-2">
              {["all", "cultural", "adventure", "wildlife", "beach"].map((category) => (
                <Button
                  key={category}
                  variant={filter === category ? "default" : "outline"}
                  onClick={() => setFilter(category)}
                  className={filter === category ? "bg-gradient-to-r from-pink-500 to-orange-500" : ""}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </Button>
              ))}
            </div>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
            >
              <option value="price">Sort by Price</option>
              <option value="rating">Sort by Rating</option>
              <option value="duration">Sort by Duration</option>
            </select>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedPackages.map((pkg) => (
              <div key={pkg.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={pkg.image} 
                    alt={pkg.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-gray-800">${pkg.price}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-pink-600 font-medium">{pkg.province}</span>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-400 fill-current" />
                      <span className="text-sm font-medium">{pkg.rating}</span>
                      <span className="text-sm text-gray-500">({pkg.reviews})</span>
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{pkg.title}</h3>
                  
                  <div className="flex items-center text-gray-600 mb-4">
                    <Clock className="h-4 w-4 mr-2" />
                    <span className="text-sm">{pkg.duration}</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                    <ul className="space-y-1">
                      {pkg.highlights.slice(0, 3).map((highlight, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center">
                          <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-800 mb-2">Includes:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {pkg.includes.map((item, idx) => (
                        <span key={idx} className="text-xs text-gray-600">• {item}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-lg font-bold text-gray-800">
                      ${pkg.price}
                      <span className="text-sm font-normal text-gray-500">/person</span>
                    </div>
                    <Link 
                      to={`/booking?package=${pkg.id}`}
                      className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-6 py-2 rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Packages;
