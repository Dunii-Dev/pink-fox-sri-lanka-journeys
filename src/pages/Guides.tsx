
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Languages, Star, MapPin, Clock, Award, Users } from "lucide-react";

const guides = [
  {
    id: 1,
    name: "Rajesh Perera",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    languages: ["English", "Tamil", "Sinhala"],
    specializations: ["Cultural Heritage", "Ancient History", "Temple Tours"],
    experience: "8 years",
    rating: 4.9,
    reviews: 127,
    provinces: ["Central", "North Central", "Western"],
    certification: "Licensed Tourist Guide",
    bio: "Passionate about Sri Lankan history and culture, Rajesh brings ancient stories to life with engaging narratives and deep knowledge of Buddhist heritage."
  },
  {
    id: 2,
    name: "Marie Dubois",
    image: "https://images.unsplash.com/photo-1466721591366-2d5fba72006d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    languages: ["French", "English", "Sinhala"],
    specializations: ["Colonial History", "Architecture", "Tea Plantations"],
    experience: "6 years",
    rating: 4.8,
    reviews: 89,
    provinces: ["Central", "Western", "Southern"],
    certification: "Certified Cultural Guide",
    bio: "A French expatriate who fell in love with Sri Lanka, Marie specializes in colonial history and helps French-speaking visitors discover the island's European heritage."
  },
  {
    id: 3,
    name: "Ahmed Hassan",
    image: "https://images.unsplash.com/photo-1493962853295-0fd70327578a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    languages: ["Arabic", "English", "Urdu"],
    specializations: ["Islamic Heritage", "Spice Trade History", "Coastal Culture"],
    experience: "5 years",
    rating: 4.7,
    reviews: 64,
    provinces: ["Western", "Eastern", "Northern"],
    certification: "Heritage Tourism Guide",
    bio: "Specializing in the rich Islamic heritage of Sri Lanka, Ahmed provides unique insights into the Arab trading history and Muslim cultural sites."
  },
  {
    id: 4,
    name: "Kenji Tanaka",
    image: "https://images.unsplash.com/photo-1469041797191-50ace28483c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    languages: ["Japanese", "English", "Basic Sinhala"],
    specializations: ["Wildlife", "Photography", "Nature Tours"],
    experience: "4 years",
    rating: 4.9,
    reviews: 76,
    provinces: ["Southern", "Uva", "Sabaragamuwa"],
    certification: "Wildlife Tourism Specialist",
    bio: "A former wildlife photographer, Kenji combines his passion for nature with tourism, helping Japanese visitors capture the perfect shots of Sri Lankan wildlife."
  },
  {
    id: 5,
    name: "Li Wei",
    image: "https://images.unsplash.com/photo-1439886183900-e79ec0057170?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    languages: ["Chinese (Mandarin)", "English", "Cantonese"],
    specializations: ["Cultural Tours", "Shopping", "Modern Sri Lanka"],
    experience: "3 years",
    rating: 4.6,
    reviews: 45,
    provinces: ["Western", "Central", "Southern"],
    certification: "Tourism Development Board Certified",
    bio: "Bridging modern Sri Lanka with traditional culture, Li Wei helps Chinese visitors understand both contemporary and historical aspects of the island."
  },
  {
    id: 6,
    name: "Priya Sharma",
    image: "https://images.unsplash.com/photo-1582562124811-c09040d0a901?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80",
    languages: ["Tamil", "English", "Hindi", "Sinhala"],
    specializations: ["Northern Culture", "Hindu Temples", "Traditional Cuisine"],
    experience: "7 years",
    rating: 4.8,
    reviews: 98,
    provinces: ["Northern", "Eastern", "Central"],
    certification: "Cultural Heritage Specialist",
    bio: "Born in Jaffna, Priya is an expert in Tamil culture and Northern Sri Lankan traditions, offering authentic experiences in Hindu heritage sites."
  }
];

const languageServices = [
  { language: "English", guides: 6, icon: "🇬🇧" },
  { language: "Tamil", guides: 3, icon: "🇱🇰" },
  { language: "French", guides: 1, icon: "🇫🇷" },
  { language: "Arabic", guides: 1, icon: "🇸🇦" },
  { language: "Japanese", guides: 1, icon: "🇯🇵" },
  { language: "Chinese", guides: 1, icon: "🇨🇳" }
];

const Guides = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Expert Tour Guides</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Meet our team of professional, multilingual tour guides who will make your Sri Lankan adventure 
            unforgettable with their expertise, local knowledge, and passion for sharing our culture.
          </p>
        </div>
      </section>

      {/* Language Services */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Multilingual Services</h2>
            <p className="text-lg text-gray-600">We speak your language</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {languageServices.map((service, index) => (
              <div key={index} className="text-center p-6 bg-gradient-to-br from-orange-50 to-pink-50 rounded-xl">
                <div className="text-4xl mb-3">{service.icon}</div>
                <h3 className="font-semibold text-gray-800 mb-1">{service.language}</h3>
                <p className="text-sm text-gray-600">{service.guides} Guide{service.guides > 1 ? 's' : ''}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Expert Guides</h2>
            <p className="text-lg text-gray-600">Licensed professionals with deep local knowledge</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {guides.map((guide) => (
              <div key={guide.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative">
                  <img 
                    src={guide.image} 
                    alt={guide.name}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white px-3 py-1 rounded-full flex items-center">
                    <Star className="h-4 w-4 text-yellow-400 fill-current mr-1" />
                    <span className="text-sm font-semibold">{guide.rating}</span>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{guide.name}</h3>
                  
                  <div className="flex items-center mb-3">
                    <Languages className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm text-gray-600">{guide.languages.join(", ")}</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Clock className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm text-gray-600">{guide.experience} experience</span>
                  </div>
                  
                  <div className="flex items-center mb-3">
                    <Award className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm text-gray-600">{guide.certification}</span>
                  </div>
                  
                  <div className="flex items-center mb-4">
                    <Users className="h-4 w-4 text-pink-600 mr-2" />
                    <span className="text-sm text-gray-600">{guide.reviews} reviews</span>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Specializations:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guide.specializations.map((spec, idx) => (
                        <span key={idx} className="text-xs bg-pink-100 text-pink-700 px-2 py-1 rounded-full">
                          {spec}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <h4 className="font-semibold text-gray-800 mb-2">Active Provinces:</h4>
                    <p className="text-sm text-gray-600">{guide.provinces.join(", ")}</p>
                  </div>
                  
                  <p className="text-sm text-gray-600 mb-4 italic">"{guide.bio}"</p>
                  
                  <button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 text-white py-2 rounded-full hover:from-pink-600 hover:to-orange-600 transition-all duration-300">
                    Request This Guide
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Guide Selection Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">How We Match You</h2>
            <p className="text-lg text-gray-600">Our process ensures the perfect guide for your journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">1</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Tell Us Your Preferences</h3>
              <p className="text-sm text-gray-600">Language, interests, and destinations</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">2</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">We Match You</h3>
              <p className="text-sm text-gray-600">Based on expertise and availability</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">3</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Meet Your Guide</h3>
              <p className="text-sm text-gray-600">Pre-tour consultation available</p>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold">4</span>
              </div>
              <h3 className="font-semibold text-gray-800 mb-2">Enjoy Your Journey</h3>
              <p className="text-sm text-gray-600">Personalized, memorable experience</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Guides;
