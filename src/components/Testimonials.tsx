
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      country: "United Kingdom",
      rating: 5,
      comment: "An absolutely incredible experience! Our guide was knowledgeable and friendly, and we saw parts of Sri Lanka we never would have discovered on our own.",
      tour: "Central Province Cultural Tour"
    },
    {
      name: "Marco Chen",
      country: "Singapore",
      rating: 5,
      comment: "The attention to detail was outstanding. From comfortable transportation to authentic local meals, everything was perfectly organized.",
      tour: "Southern Province Beach & Culture"
    },
    {
      name: "Emma Rodriguez",
      country: "Spain",
      rating: 5,
      comment: "Our French-speaking guide made all the difference. The cultural experiences were authentic and the accommodations were excellent.",
      tour: "North Central Heritage Tour"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            What Our Guests
            <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Say About Us
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Read authentic reviews from travelers who have experienced the magic of Sri Lanka with Pink Fox Tourism.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={testimonial.name}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-600 mb-6 italic">"{testimonial.comment}"</p>
              
              <div className="border-t pt-4">
                <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                <p className="text-sm text-gray-500 mb-2">{testimonial.country}</p>
                <p className="text-sm text-pink-600 font-medium">{testimonial.tour}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
