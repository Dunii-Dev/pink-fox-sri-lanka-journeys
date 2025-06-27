
export const CulturalHighlights = () => {
  const culturalAspects = [
    {
      title: "Traditional Cuisine",
      description: "Savor authentic Sri Lankan flavors with rice and curry, hoppers, and kottu roti",
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Spicy Curries", "Fresh Seafood", "Tropical Fruits", "Tea Culture"]
    },
    {
      title: "Traditional Dance",
      description: "Experience mesmerizing Kandyan dance performances and cultural shows",
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Kandyan Dance", "Fire Dancing", "Drum Performances", "Cultural Shows"]
    },
    {
      title: "Ancient Temples",
      description: "Visit sacred Buddhist and Hindu temples with centuries of history",
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Temple of Tooth", "Ancient Stupas", "Cave Temples", "Sacred Sites"]
    },
    {
      title: "Traditional Crafts",
      description: "Discover local handicrafts, batik art, and gem cutting traditions",
      image: "https://images.unsplash.com/photo-1433086966358-54859d0ed716?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80",
      features: ["Batik Art", "Wood Carving", "Gem Cutting", "Handloom Weaving"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-pink-50 to-orange-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Rich Cultural
            <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Heritage
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Immerse yourself in Sri Lanka's vibrant traditions, ancient customs, 
            and living cultural practices that have been preserved for generations.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {culturalAspects.map((aspect, index) => (
            <div 
              key={aspect.title}
              className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300`}
            >
              <div className="lg:w-1/2">
                <img 
                  src={aspect.image} 
                  alt={aspect.title}
                  className="w-full h-64 lg:h-full object-cover"
                />
              </div>
              <div className="lg:w-1/2 p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{aspect.title}</h3>
                <p className="text-gray-600 mb-6">{aspect.description}</p>
                <div className="grid grid-cols-2 gap-3">
                  {aspect.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-gradient-to-r from-pink-500 to-orange-500 rounded-full"></div>
                      <span className="text-sm text-gray-600">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
