
import { useState } from "react";
import { MapPin, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    tourInterest: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for your inquiry. We'll get back to you within 24 hours.",
    });
    setFormData({ name: "", email: "", message: "", tourInterest: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
            Plan Your
            <span className="block bg-gradient-to-r from-pink-600 to-orange-600 bg-clip-text text-transparent">
              Sri Lankan Adventure
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our travel experts to customize your perfect Sri Lankan experience.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gradient-to-br from-pink-50 to-orange-50 p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                <Input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tour Interest</label>
                <select
                  name="tourInterest"
                  value={formData.tourInterest}
                  onChange={handleChange}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                >
                  <option value="">Select your interest</option>
                  <option value="cultural">Cultural Tours</option>
                  <option value="adventure">Adventure Tours</option>
                  <option value="wildlife">Wildlife Tours</option>
                  <option value="beach">Beach Tours</option>
                  <option value="custom">Custom Tour</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your travel plans, group size, preferred dates, and any special requirements..."
                  rows={4}
                  required
                />
              </div>
              
              <Button type="submit" className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600">
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <MapPin className="h-6 w-6 text-pink-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-800">Our Location</h4>
              </div>
              <p className="text-gray-600">
                Colombo, Sri Lanka<br />
                Serving all 9 provinces with local expertise
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Clock className="h-6 w-6 text-orange-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-800">Operating Hours</h4>
              </div>
              <p className="text-gray-600">
                Monday - Sunday: 8:00 AM - 8:00 PM<br />
                24/7 Emergency Support During Tours
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <Users className="h-6 w-6 text-pink-500 mr-3" />
                <h4 className="text-lg font-semibold text-gray-800">Languages Supported</h4>
              </div>
              <div className="grid grid-cols-2 gap-2 text-gray-600">
                <span>• English</span>
                <span>• Tamil</span>
                <span>• French</span>
                <span>• Arabic</span>
                <span>• Japanese</span>
                <span>• Chinese</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
