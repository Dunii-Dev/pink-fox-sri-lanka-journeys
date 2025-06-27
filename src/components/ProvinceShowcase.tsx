
import { MapPin } from "lucide-react";
import { Link } from "react-router-dom";

const provinces = [
  {
    name: "Western Province",
    description: "Colombo, beaches, and modern attractions",
    image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Colombo City", "Mount Lavinia Beach", "Kelaniya Temple"]
  },
  {
    name: "Central Province",
    description: "Hill country, tea plantations, and cool climate",
    image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Kandy", "Nuwara Eliya", "Tea Gardens"]
  },
  {
    name: "Southern Province",
    description: "Pristine beaches and coastal charm",
    image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Galle Fort", "Mirissa", "Unawatuna"]
  },
  {
    name: "Northern Province",
    description: "Ancient history and cultural heritage",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Jaffna", "Nagadeepa", "Delft Island"]
  },
  {
    name: "Eastern Province",
    description: "Pristine beaches and lagoons",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Arugam Bay", "Batticaloa", "Pasikudah"]
  },
  {
    name: "North Western Province",
    description: "Fishing villages and coconut cultivation",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Negombo", "Chilaw", "Munneswaram"]
  },
  {
    name: "North Central Province",
    description: "Ancient kingdoms and archaeological sites",
    image: "https://images.unsplash.com/photo-1518877593221-1f28583780b4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Anuradhapura", "Polonnaruwa", "Sigiriya"]
  },
  {
    name: "Uva Province",
    description: "Mountains, waterfalls, and wildlife",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Ella", "Badulla", "Yala National Park"]
  },
  {
    name: "Sabaragamuwa Province",
    description: "Gem mining and natural beauty",
    image: "https://images.unsplash.com/photo-1465379944081-7f47de8d74ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    highlights: ["Ratnapura", "Adam's Peak", "Sinharaja Forest"]
  }
];

export const ProvinceShowcase = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Explore Sri Lanka's
            <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Nine Provinces
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each province offers unique experiences, from ancient temples to pristine beaches, 
            lush tea plantations to vibrant cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {provinces.map((province, index) => (
            <div 
              key={province.name}
              className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={province.image} 
                  alt={province.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-5 w-5" />
                    <span className="font-semibold">{province.name}</span>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-4">{province.description}</p>
                <div className="mb-4">
                  <h4 className="font-semibold text-gray-800 mb-2">Highlights:</h4>
                  <ul className="space-y-1">
                    {province.highlights.map((highlight, idx) => (
                      <li key={idx} className="text-sm text-gray-600 flex items-center">
                        <span className="w-2 h-2 bg-pink-500 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link 
                  to={`/provinces/${province.name.toLowerCase().replace(' ', '-')}`}
                  className="inline-flex items-center text-pink-600 hover:text-pink-700 font-medium"
                >
                  Explore Province →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
