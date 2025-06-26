import React, { useState, useEffect } from "react";
import {
  Egg,
  MapPin,
  Phone,
  Mail,
  Clock,
  Star,
  ChevronRight,
  Facebook,
  Instagram,
  Twitter,
  Menu,
  X,
  ArrowRight,
  Heart,
  Award,
  Users,
  Shield,
  Truck,
  CheckCircle,
  Sunrise,
  Leaf,
  Crown,
} from "lucide-react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 border-b border-amber-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Egg className="h-8 w-8 text-amber-600" />
              <span className="text-2xl font-bold text-gray-900">
                Shiro Farm
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                About
              </a>
              <a
                href="#products"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Products
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-amber-600 transition-colors"
              >
                Contact
              </a>
              <button className="bg-amber-600 text-white px-6 py-2 rounded-full hover:bg-amber-700 transition-colors">
                Order Fresh Eggs
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="text-gray-700 hover:text-amber-600"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-amber-100">
                <a
                  href="#home"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Home
                </a>
                <a
                  href="#about"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  About
                </a>
                <a
                  href="#products"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Products
                </a>
                <a
                  href="#contact"
                  className="block px-3 py-2 text-gray-700 hover:text-amber-600"
                >
                  Contact
                </a>
                <button className="w-full text-left bg-amber-600 text-white px-3 py-2 rounded-lg hover:bg-amber-700 transition-colors">
                  Order Fresh Eggs
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-black/30 z-10"></div>
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage:
              'url("https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
          }}
        ></div>

        <div
          className={`relative z-20 text-center text-white px-4 max-w-4xl mx-auto transform transition-all duration-1000 ${
            isVisible ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Grab your fresh eggs
            <span className="text-amber-400 block">Shiro Farm</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto leading-relaxed">
            Kami adalah penyedia telur ayam segar yang berkomitmen menghadirkan
            kualitas terbaik langsung dari peternakan ke meja makan Anda. Telur
            kami dipanen setiap hari dari ayam yang sehat dan diberi pakan
            alami, sehingga menghasilkan telur dengan cita rasa lezat dan
            kandungan gizi tinggi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-amber-700 transition-all transform hover:scale-105 flex items-center justify-center gap-2">
              Order Fresh Eggs <ArrowRight className="h-5 w-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-white hover:text-gray-900 transition-all">
              Visit Our Farm
            </button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Four Generations of
                <span className="text-amber-600 block">Egg Excellence</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Since 1952, our family has been dedicated to raising the
                happiest hens and producing the freshest eggs in the region. Our
                free-range chickens roam on 50 acres of lush pasture, resulting
                in eggs with vibrant yolks and exceptional flavor.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We believe happy hens lay better eggs. Our chickens enjoy
                spacious coops, access to fresh grass and insects, and a diet
                supplemented with locally sourced grains. No hormones, no
                antibiotics - just pure, natural goodness.
              </p>

              <div className="grid grid-cols-3 gap-8 mb-8">
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Award className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">1+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Leaf className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">100%</div>
                  <div className="text-sm text-gray-600">Free Range</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                    <Users className="h-8 w-8 text-amber-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Happy Hens</div>
                </div>
              </div>

              <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors flex items-center gap-2">
                Our Story <ChevronRight className="h-5 w-5" />
              </button>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <img
                  src="https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop"
                  alt="Free-range chickens"
                  className="rounded-2xl shadow-lg"
                />
                <div className="space-y-4">
                  <img
                    src="https://images.pexels.com/photos/1556708/pexels-photo-1556708.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&fit=crop"
                    alt="Fresh eggs in basket"
                    className="rounded-2xl shadow-lg"
                  />
                  <img
                    src="https://images.pexels.com/photos/1556709/pexels-photo-1556709.jpeg?auto=compress&cs=tinysrgb&w=400&h=280&fit=crop"
                    alt="Chicken coop"
                    className="rounded-2xl shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Fresh Eggs Daily
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From our happy hens to your table. All eggs are collected fresh
              daily and available in various sizes and packaging options.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Product Card 1 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1556707/pexels-photo-1556707.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                  alt="Dozen fresh eggs"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-amber-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Best Seller
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Farm Fresh Dozen
                </h3>
                <p className="text-gray-600 mb-4">
                  Our classic dozen eggs from free-range hens. Large size with
                  rich, golden yolks.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    $6.99
                  </span>
                  <button className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 2 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1556708/pexels-photo-1556708.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                  alt="Jumbo eggs"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-yellow-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Premium
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Jumbo Eggs (Dozen)
                </h3>
                <p className="text-gray-600 mb-4">
                  Extra-large eggs perfect for baking and cooking. Rich flavor
                  and vibrant color.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    $8.99
                  </span>
                  <button className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>

            {/* Product Card 3 */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group border border-gray-100">
              <div className="relative overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/1556709/pexels-photo-1556709.jpeg?auto=compress&cs=tinysrgb&w=500&h=300&fit=crop"
                  alt="Farm pack eggs"
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  Family Pack
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Farm Pack (2.5 Dozen)
                </h3>
                <p className="text-gray-600 mb-4">
                  Perfect for large families or avid bakers. Mix of large and
                  extra-large eggs.
                </p>
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-amber-600">
                    $16.99
                  </span>
                  <button className="bg-amber-100 text-amber-600 px-4 py-2 rounded-full hover:bg-amber-600 hover:text-white transition-colors">
                    Order Now
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <button className="bg-amber-600 text-white px-8 py-3 rounded-full hover:bg-amber-700 transition-colors flex items-center gap-2 mx-auto">
              View All Products <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Our Eggs Are Special
            </h2>
            <p className="text-xl text-gray-600">
              The difference is in how we raise our hens and care for our land.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Leaf className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Free Range
              </h3>
              <p className="text-gray-600">
                Our hens roam freely on 50 acres of lush pasture, eating grass,
                bugs, and natural forage.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Sunrise className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Collected Daily
              </h3>
              <p className="text-gray-600">
                Fresh eggs collected every morning at sunrise, ensuring maximum
                freshness and quality.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Shield className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                No Hormones
              </h3>
              <p className="text-gray-600">
                Our hens are never given hormones or antibiotics. Just natural,
                healthy living.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                <Crown className="h-10 w-10 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Premium Quality
              </h3>
              <p className="text-gray-600">
                Rich, golden yolks and firm whites that stand up tall - the mark
                of truly fresh eggs.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What Our Customers Say
            </h2>
            <p className="text-xl text-gray-600">
              Join hundreds of families who trust us for their daily eggs.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Testimonial 1 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "The yolks are so golden and rich! You can really taste the
                difference when hens are raised properly. These are the best
                eggs we've ever had."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Sarah Johnson
                  </div>
                  <div className="text-sm text-gray-600">Home Baker</div>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "As a chef, I demand the best ingredients. These eggs have
                incredible flavor and the yolks are perfect for our pasta
                dishes."
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    Chef Antonio
                  </div>
                  <div className="text-sm text-gray-600">Restaurant Owner</div>
                </div>
              </div>
            </div>

            {/* Testimonial 3 */}
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">
                "Knowing the hens are treated well and live naturally makes
                these eggs taste even better. My kids love them for breakfast
                every morning!"
              </p>
              <div className="flex items-center">
                <img
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                  alt="Customer"
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-semibold text-gray-900">Lisa Chen</div>
                  <div className="text-sm text-gray-600">Mother of Three</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Visit Our Farm Store
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                Come see our happy hens and pick up fresh eggs daily! Our farm
                store is open seven days a week with eggs collected fresh each
                morning.
              </p>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <MapPin className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Address</h3>
                    <p className="text-gray-600">
                      1357 Pasture Road, Countryside, TX 75443
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Phone className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Phone</h3>
                    <p className="text-gray-600">(555) 123-EGGS</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Email</h3>
                    <p className="text-gray-600">orders@goldeneggfarm.com</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Clock className="h-6 w-6 text-amber-600 mt-1" />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Farm Store Hours
                    </h3>
                    <div className="text-gray-600">
                      <p>Mon-Fri: 6:00 AM - 7:00 PM</p>
                      <p>Sat-Sun: 7:00 AM - 6:00 PM</p>
                      <p>Fresh eggs available daily!</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 flex space-x-4">
                <button className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors">
                  <Facebook className="h-5 w-5" />
                </button>
                <button className="bg-pink-600 text-white p-3 rounded-full hover:bg-pink-700 transition-colors">
                  <Instagram className="h-5 w-5" />
                </button>
                <button className="bg-blue-400 text-white p-3 rounded-full hover:bg-blue-500 transition-colors">
                  <Twitter className="h-5 w-5" />
                </button>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Order Fresh Eggs
              </h3>
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Your phone number"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Egg Order
                  </label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="How many dozens would you like? Any special requests?"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-600 text-white py-3 rounded-lg hover:bg-amber-700 transition-colors font-semibold"
                >
                  Place Egg Order
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-amber-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Fresh Egg Updates
          </h2>
          <p className="text-xl text-amber-100 mb-8">
            Get notified about egg availability, seasonal specials, and farm
            news.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full text-gray-900 focus:outline-none focus:ring-2 focus:ring-white"
            />
            <button className="bg-white text-amber-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors">
              Subscribe
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Egg className="h-8 w-8 text-amber-400" />
                <span className="text-xl font-bold">Golden Egg Farm</span>
              </div>
              <p className="text-gray-400">
                Fresh farm eggs from happy, free-range hens since 1952.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a
                    href="#home"
                    className="hover:text-white transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    className="hover:text-white transition-colors"
                  >
                    Products
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Products</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Fresh Dozen
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Jumbo Eggs
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Farm Pack
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Orders
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-400">
                <p>1357 Pasture Road</p>
                <p>Countryside, TX 75443</p>
                <p>(555) 123-EGGS</p>
                <p>orders@goldeneggfarm.com</p>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 Golden Egg Farm. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
