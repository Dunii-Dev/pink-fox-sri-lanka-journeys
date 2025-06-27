
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { MapPin, Clock, Users, Star } from "lucide-react";
import { Link } from "react-router-dom";

const provinces = [
  {
    id: 1,
    name: "Western Province",
    capital: "Colombo",
    description: "The commercial heart of Sri Lanka, featuring bustling cities, beautiful beaches, and modern attractions.",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Colombo City", "Mount Lavinia Beach", "Kelaniya Temple", "Negombo"],
    bestTime: "November - April",
    duration: "2-3 Days",
    packages: 3
  },
  {
    id: 2,
    name: "Central Province",
    capital: "Kandy",
    description: "The cultural capital with ancient temples, tea plantations, and misty mountains.",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Temple of the Tooth", "Nuwara Eliya", "Tea Plantations", "Peradeniya Gardens"],
    bestTime: "December - April",
    duration: "4-5 Days",
    packages: 5
  },
  {
    id: 3,
    name: "Southern Province",
    capital: "Galle",
    description: "Historic coastal region with colonial architecture, pristine beaches, and wildlife.",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Galle Fort", "Mirissa Beach", "Yala National Park", "Stilt Fishermen"],
    bestTime: "November - April",
    duration: "4-6 Days",
    packages: 4
  },
  {
    id: 4,
    name: "Northern Province",
    capital: "Jaffna",
    description: "Rich Tamil culture, ancient Hindu temples, and unique cuisine in the northern peninsula.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Jaffna Fort", "Nallur Temple", "Casuarina Beach", "Delft Island"],
    bestTime: "October - March",
    duration: "3-4 Days",
    packages: 2
  },
  {
    id: 5,
    name: "Eastern Province",
    capital: "Trincomalee",
    description: "Pristine beaches, ancient ports, and excellent diving and surfing spots.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Trincomalee Harbor", "Arugam Bay", "Batticaloa Lagoon", "Koneswaram Temple"],
    bestTime: "May - September",
    duration: "3-5 Days",
    packages: 3
  },
  {
    id: 6,
    name: "North Central Province",
    capital: "Anuradhapura",
    description: "Ancient kingdoms, sacred Buddhist sites, and archaeological wonders.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Anuradhapura", "Polonnaruwa", "Sigiriya Rock", "Dambulla Caves"],
    bestTime: "November - April",
    duration: "4-6 Days",
    packages: 6
  },
  {
    id: 7,
    name: "North Western Province",
    capital: "Kurunegala",
    description: "Coconut plantations, fishing villages, and traditional crafts.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Kurunegala Rock", "Chilaw Beach", "Munneswaram Temple", "Negombo Lagoon"],
    bestTime: "December - April",
    duration: "2-3 Days",
    packages: 2
  },
  {
    id: 8,
    name: "Sabaragamuwa Province",
    capital: "Ratnapura",
    description: "Gem capital of Sri Lanka with rainforests, waterfalls, and precious stones.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Ratnapura Gems", "Sinharaja Forest", "Adam's Peak", "Bopath Falls"],
    bestTime: "December - April",
    duration: "3-4 Days",
    packages: 3
  },
  {
    id: 9,
    name: "Uva Province",
    capital: "Badulla",
    description: "Mountain province with tea estates, waterfalls, and ancient temples.",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Ella Rock", "Nine Arch Bridge", "Rawana Falls", "Buduruwagala Temple"],
    bestTime: "December - April",
    duration: "3-4 Days",
    packages: 4
  }
];

const Provinces = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Nine Provinces</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the diverse beauty of Sri Lanka through its nine unique provinces, 
            each offering distinct cultural experiences, natural wonders, and historical treasures.
          </p>
        </div>
      </section>

      {/* Provinces Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {provinces.map((province) => (
              <div key={province.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={province.image} 
                    alt={province.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full">
                    <span className="text-sm font-semibold text-pink-600">{province.packages} Packages</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{province.name}</h3>
                    <span className="text-sm text-gray-500">Capital: {province.capital}</span>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{province.description}</p>
                  
                  <div className="flex items-center text-gray-600 mb-4 space-x-4">
                    <div className="flex items-center">
                      <Clock className="h-4 w-4 mr-1" />
                      <span className="text-sm">{province.duration}</span>
                    </div>
                    <div className="flex items-center">
                      <Star className="h-4 w-4 mr-1" />
                      <span className="text-sm">{province.bestTime}</span>
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Top Attractions:</h4>
                    <div className="grid grid-cols-2 gap-1">
                      {province.highlights.map((highlight, idx) => (
                        <span key={idx} className="text-sm text-gray-600">• {highlight}</span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <Link 
                      to={`/packages?province=${province.name}`}
                      className="text-pink-600 hover:text-pink-700 font-medium"
                    >
                      View Packages →
                    </Link>
                    <Link 
                      to="/booking"
                      className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-4 py-2 rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300"
                    >
                      Book Tour
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

export default Provinces;
