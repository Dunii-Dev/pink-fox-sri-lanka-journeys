
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Music, UtensilsCrossed, Shirt, Calendar, Camera } from "lucide-react";

const culturalExperiences = [
  {
    category: "Traditional Dance",
    icon: Music,
    title: "Kandyan Dance Performance",
    description: "Experience the mesmerizing traditional dance of the hill country with colorful costumes and rhythmic drums.",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    provinces: ["Central", "Western"],
    duration: "2 hours"
  },
  {
    category: "Culinary Arts",
    icon: UtensilsCrossed,
    title: "Sri Lankan Cooking Class",
    description: "Learn to prepare authentic Sri Lankan dishes with traditional spices and cooking methods.",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    provinces: ["All Provinces"],
    duration: "4 hours"
  },
  {
    category: "Traditional Crafts",
    icon: Shirt,
    title: "Batik & Handloom Weaving",
    description: "Discover the art of traditional Sri Lankan textile making and create your own batik masterpiece.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    provinces: ["Western", "Central", "Southern"],
    duration: "3 hours"
  },
  {
    category: "Religious Heritage",
    icon: Calendar,
    title: "Temple & Monastery Tours",
    description: "Visit ancient Buddhist temples and Hindu kovils to understand Sri Lanka's spiritual heritage.",
    image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    provinces: ["All Provinces"],
    duration: "Full Day"
  },
  {
    category: "Festivals",
    icon: Music,
    title: "Cultural Festival Participation",
    description: "Join colorful local festivals and celebrations throughout the year.",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    provinces: ["Seasonal"],
    duration: "Variable"
  },
  {
    category: "Village Life",
    icon: Camera,
    title: "Traditional Village Experience",
    description: "Live like a local in traditional villages and experience authentic rural Sri Lankan life.",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    provinces: ["All Provinces"],
    duration: "Full Day"
  }
];

const cuisineHighlights = [
  { name: "Rice & Curry", description: "The staple meal with various curries and sambols" },
  { name: "Hoppers (Appa)", description: "Bowl-shaped pancakes, perfect for breakfast" },
  { name: "Kottu Roti", description: "Stir-fried chopped flatbread with vegetables and meat" },
  { name: "String Hoppers", description: "Steamed rice noodle patties served with curry" },
  { name: "Lamprais", description: "Dutch Burgher dish with rice and curry in banana leaf" },
  { name: "Watalappan", description: "Traditional coconut custard dessert with jaggery" }
];

const Culture = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Cultural Experiences</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Immerse yourself in the rich cultural tapestry of Sri Lanka through authentic experiences, 
            traditional arts, cuisine, and time-honored customs that have been passed down through generations.
          </p>
        </div>
      </section>

      {/* Cultural Experiences */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Authentic Cultural Experiences</h2>
            <p className="text-lg text-gray-600">Discover the soul of Sri Lanka through immersive cultural activities</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {culturalExperiences.map((experience, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={experience.image} 
                    alt={experience.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 left-4 bg-white p-2 rounded-full">
                    <experience.icon className="h-5 w-5 text-pink-600" />
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm text-pink-600 font-medium">{experience.category}</span>
                    <span className="text-sm text-gray-500">{experience.duration}</span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{experience.title}</h3>
                  <p className="text-gray-600 mb-4">{experience.description}</p>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Available in:</h4>
                    <p className="text-sm text-gray-600">{experience.provinces.join(", ")}</p>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cuisine Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Sri Lankan Cuisine</h2>
            <p className="text-lg text-gray-600">Taste the flavors that tell the story of our island nation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cuisineHighlights.map((dish, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-pink-50 p-6 rounded-xl">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{dish.name}</h3>
                <p className="text-gray-600">{dish.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cultural Calendar */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Cultural Calendar</h2>
            <p className="text-lg text-gray-600">Plan your visit around these spectacular cultural events</p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Major Festivals</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Sinhala & Tamil New Year</span>
                    <span className="text-pink-600 font-medium">April</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Vesak Festival</span>
                    <span className="text-pink-600 font-medium">May</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Kandy Esala Perahera</span>
                    <span className="text-pink-600 font-medium">July/August</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Deepavali</span>
                    <span className="text-pink-600 font-medium">October/November</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">Cultural Seasons</h3>
                <ul className="space-y-3">
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Harvest Season</span>
                    <span className="text-pink-600 font-medium">March - May</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Monsoon Traditions</span>
                    <span className="text-pink-600 font-medium">May - September</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span className="text-gray-700">Temple Festival Season</span>
                    <span className="text-pink-600 font-medium">December - February</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Culture;
