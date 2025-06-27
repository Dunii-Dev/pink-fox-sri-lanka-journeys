
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, MessageCircle, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-orange-50 to-pink-50">
      <Navigation />
      
      {/* Header */}
      <section className="py-20 bg-gradient-to-r from-pink-600 to-orange-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Contact Us</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Ready to explore Sri Lanka? Get in touch with our friendly team to plan your perfect adventure. 
            We're here to help make your dream trip a reality.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">+94 77 123 4567</p>
                <p className="text-gray-600">+94 11 234 5678</p>
                <p className="text-sm text-gray-500 mt-2">24/7 Emergency Line</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">info@pinkfoxtourism.lk</p>
                <p className="text-gray-600">bookings@pinkfoxtourism.lk</p>
                <p className="text-sm text-gray-500 mt-2">Quick Response</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Office</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">123 Galle Road</p>
                <p className="text-gray-600">Colombo 03, Sri Lanka</p>
                <p className="text-sm text-gray-500 mt-2">Visit Us</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="bg-gradient-to-r from-pink-500 to-orange-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <CardTitle className="text-lg">Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-2">Mon - Fri: 8AM - 8PM</p>
                <p className="text-gray-600">Sat - Sun: 9AM - 6PM</p>
                <p className="text-sm text-gray-500 mt-2">Local Time (UTC+5:30)</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form and Map */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl flex items-center">
                  <MessageCircle className="h-6 w-6 mr-2 text-pink-600" />
                  Send Us a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="John"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name *
                      </label>
                      <input
                        type="text"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                        placeholder="Doe"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="john@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Country
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                      <option value="">Select your country</option>
                      <option value="US">United States</option>
                      <option value="UK">United Kingdom</option>
                      <option value="CA">Canada</option>
                      <option value="AU">Australia</option>
                      <option value="FR">France</option>
                      <option value="DE">Germany</option>
                      <option value="JP">Japan</option>
                      <option value="CN">China</option>
                      <option value="IN">India</option>
                      <option value="SG">Singapore</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Language
                    </label>
                    <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500">
                      <option value="english">English</option>
                      <option value="tamil">Tamil</option>
                      <option value="french">French</option>
                      <option value="arabic">Arabic</option>
                      <option value="japanese">Japanese</option>
                      <option value="chinese">Chinese</option>
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Travel Dates (Optional)
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                      <input
                        type="date"
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Message *
                    </label>
                    <textarea
                      rows={4}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500"
                      placeholder="Tell us about your dream Sri Lankan adventure..."
                    ></textarea>
                  </div>
                  
                  <Button className="w-full bg-gradient-to-r from-pink-500 to-orange-500 hover:from-pink-600 hover:to-orange-600 text-white py-3">
                    <Send className="h-5 w-5 mr-2" />
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Map and Additional Info */}
            <div className="space-y-8">
              {/* Map Placeholder */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Find Our Office</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-200 h-64 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Interactive Map</p>
                      <p className="text-sm text-gray-400">123 Galle Road, Colombo 03</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* FAQ */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Quick Answers</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">How far in advance should I book?</h4>
                      <p className="text-sm text-gray-600">We recommend booking at least 2-4 weeks in advance, especially during peak season (December-April).</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Do you provide airport pickup?</h4>
                      <p className="text-sm text-gray-600">Yes! Airport transfers are included in most of our packages, or can be arranged separately.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">What languages do your guides speak?</h4>
                      <p className="text-sm text-gray-600">We offer guides fluent in English, Tamil, French, Arabic, Japanese, and Chinese.</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Can you customize packages?</h4>
                      <p className="text-sm text-gray-600">Absolutely! We specialize in creating personalized experiences based on your interests and preferences.</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
