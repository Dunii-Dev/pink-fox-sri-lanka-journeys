
import { Users, Map, Calendar, MapPin } from "lucide-react";

export const ServicesOverview = () => {
  const services = [
    {
      icon: <Map className="h-12 w-12 text-pink-500" />,
      title: "Expert Tour Guides",
      description: "Professional multilingual guides fluent in English, Tamil, French, Arabic, Japanese, and Chinese",
      features: ["Certified Guides", "Local Expertise", "Cultural Insights", "Safety First"]
    },
    {
      icon: <MapPin className="h-12 w-12 text-orange-500" />,
      title: "Comfortable Transportation",
      description: "Air-conditioned vehicles with experienced drivers for safe and comfortable journeys",
      features: ["AC Vehicles", "Experienced Drivers", "Flexible Routes", "Door-to-Door Service"]
    },
    {
      icon: <Calendar className="h-12 w-12 text-pink-500" />,
      title: "Accommodation Booking",
      description: "Partnered standard hotels across all provinces with authentic local dining experiences",
      features: ["Quality Hotels", "Local Cuisine", "Comfortable Stays", "Best Locations"]
    },
    {
      icon: <Users className="h-12 w-12 text-orange-500" />,
      title: "Custom Tours",
      description: "Tailored experiences based on your interests, budget, and duration preferences",
      features: ["Personalized Itineraries", "Flexible Pricing", "Group Discounts", "Special Interests"]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Our Premium
            <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide comprehensive travel services to ensure your Sri Lankan adventure 
            is comfortable, authentic, and unforgettable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.title}
              className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="flex items-center mb-6">
                <div className="bg-white p-3 rounded-lg shadow-md mr-4">
                  {service.icon}
                </div>
                <h3 className="text-2xl font-bold text-gray-800">{service.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <div className="grid grid-cols-2 gap-3">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                    <span className="text-sm text-gray-600">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
