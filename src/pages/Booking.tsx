
import { useState } from "react";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Users, MapPin, Clock, Star } from "lucide-react";

const Booking = () => {
  const [bookingData, setBookingData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    nationality: "",
    groupSize: 1,
    checkIn: "",
    language: "english",
    specialRequests: "",
    selectedPackage: "1"
  });
  
  const { toast } = useToast();

  const packages = {
    "1": {
      title: "Cultural Triangle Explorer",
      duration: "5 Days / 4 Nights",
      price: 450,
      image: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    "2": {
      title: "Hill Country Tea Trail",
      duration: "4 Days / 3 Nights", 
      price: 380,
      image: "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    },
    "3": {
      title: "Southern Coast Paradise",
      duration: "6 Days / 5 Nights",
      price: 520,
      image: "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
    }
  };

  const languages = [
    { code: "english", name: "English" },
    { code: "tamil", name: "Tamil" },
    { code: "french", name: "French" },
    { code: "arabic", name: "Arabic" },
    { code: "japanese", name: "Japanese" },
    { code: "chinese", name: "Chinese" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Booking Request Submitted!",
      description: "Thank you for your booking request. We'll contact you within 24 hours to confirm your reservation.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingData({
      ...bookingData,
      [e.target.name]: e.target.value
    });
  };

  const selectedPackage = packages[bookingData.selectedPackage as keyof typeof packages];
  const totalPrice = selectedPackage.price * bookingData.groupSize;

  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Book Your Journey</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Complete your booking details and let us create an unforgettable Sri Lankan experience for you.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Booking Form */}
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Booking Details</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Package Selection */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Select Package</label>
                  <select
                    name="selectedPackage"
                    value={bookingData.selectedPackage}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  >
                    {Object.entries(packages).map(([id, pkg]) => (
                      <option key={id} value={id}>
                        {pkg.title} - ${pkg.price}/person
                      </option>
                    ))}
                  </select>
                </div>

                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">First Name</label>
                    <Input
                      type="text"
                      name="firstName"
                      value={bookingData.firstName}
                      onChange={handleChange}
                      placeholder="Your first name"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Last Name</label>
                    <Input
                      type="text"
                      name="lastName"
                      value={bookingData.lastName}
                      onChange={handleChange}
                      placeholder="Your last name"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                    <Input
                      type="email"
                      name="email"
                      value={bookingData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
                    <Input
                      type="tel"
                      name="phone"
                      value={bookingData.phone}
                      onChange={handleChange}
                      placeholder="+1 234 567 8900"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Nationality</label>
                  <Input
                    type="text"
                    name="nationality"
                    value={bookingData.nationality}
                    onChange={handleChange}
                    placeholder="Your nationality"
                    required
                  />
                </div>

                {/* Trip Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Group Size</label>
                    <select
                      name="groupSize"
                      value={bookingData.groupSize}
                      onChange={handleChange}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                    >
                      {[1, 2, 3, 4, 5, 6, 7, 8].map(num => (
                        <option key={num} value={num}>{num} {num === 1 ? 'Person' : 'People'}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Start Date</label>
                    <Input
                      type="date"
                      name="checkIn"
                      value={bookingData.checkIn}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Guide Language</label>
                  <select
                    name="language"
                    value={bookingData.language}
                    onChange={handleChange}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500"
                  >
                    {languages.map(lang => (
                      <option key={lang.code} value={lang.code}>{lang.name}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Special Requests</label>
                  <Textarea
                    name="specialRequests"
                    value={bookingData.specialRequests}
                    onChange={handleChange}
                    placeholder="Any dietary restrictions, accessibility needs, or special occasions we should know about..."
                    rows={3}
                  />
                </div>

                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-lg py-3"
                >
                  Submit Booking Request
                </Button>
              </form>
            </div>

            {/* Booking Summary */}
            <div className="space-y-6">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">Booking Summary</h3>
                
                <div className="space-y-4">
                  <img 
                    src={selectedPackage.image} 
                    alt={selectedPackage.title}
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  
                  <div>
                    <h4 className="text-xl font-semibold text-gray-800">{selectedPackage.title}</h4>
                    <div className="flex items-center text-gray-600 mt-2">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>{selectedPackage.duration}</span>
                    </div>
                  </div>
                  
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Price per person:</span>
                      <span className="font-semibold">${selectedPackage.price}</span>
                    </div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-600">Group size:</span>
                      <span className="font-semibold">{bookingData.groupSize} {bookingData.groupSize === 1 ? 'person' : 'people'}</span>
                    </div>
                    <div className="flex justify-between items-center text-lg font-bold text-gray-800 border-t pt-2">
                      <span>Total:</span>
                      <span className="text-pink-600">${totalPrice}</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-6 rounded-xl">
                <h4 className="font-semibold text-gray-800 mb-3">What's Included:</h4>
                <ul className="space-y-2">
                  <li className="flex items-center text-gray-600">
                    <Users className="h-4 w-4 mr-2 text-pink-500" />
                    Professional multilingual guide
                  </li>
                  <li className="flex items-center text-gray-600">
                    <MapPin className="h-4 w-4 mr-2 text-orange-500" />
                    Comfortable AC transportation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Calendar className="h-4 w-4 mr-2 text-pink-500" />
                    Quality accommodation
                  </li>
                  <li className="flex items-center text-gray-600">
                    <Star className="h-4 w-4 mr-2 text-orange-500" />
                    All entrance fees and activities
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

export default Booking;
