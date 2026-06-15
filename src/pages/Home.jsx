import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import { ArrowRight, Award, Building2, Users, Shield, CheckCircle, MapPin, Phone, Mail, Home as HomeIcon, Store, Play, Search } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  
  const features = [
    { icon: HomeIcon, title: 'Residential Properties', desc: 'Apartments, Villas, Independent Houses' },
    { icon: Store, title: 'Commercial Spaces', desc: 'Shops, Offices, Showrooms' },
    { icon: Shield, title: 'RERA Certified', desc: 'Government approved properties' },
    { icon: CheckCircle, title: 'Legal Documentation', desc: '100% transparent paperwork' },
  ];

  const stats = [
    { value: '61+', label: 'Happy Clients' },
    { value: '14+', label: 'Years Experience' },
    { value: '50+', label: 'Projects Completed' },
    { value: '100%', label: 'Legal Compliance' },
  ];

  const handleSearch = () => {
    navigate('/projects');
  };

  return (
    <div>
      {/* Hero Section */}
      <div className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{
        backgroundImage: 'url("https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920")'
      }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50"></div>
        
        <div className="relative container-custom min-h-screen flex flex-col justify-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <span className="w-2 h-2 bg-[#c8a45e] rounded-full animate-pulse"></span>
              <span className="text-white/80 text-sm tracking-wider">EST. 2010 — TRUSTED REAL ESTATE</span>
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-[#c8a45e] text-sm uppercase tracking-wider mb-4"
          >
            WELCOME TO SWABHAGYA REALITY
          </motion.h2>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight max-w-4xl"
          >
            Find Your Perfect
            <span className="block text-[#c8a45e]">Property in Nashik</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-white/70 mb-8 max-w-2xl leading-relaxed"
          >
            We help you find the right space that fits your lifestyle and future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-wrap items-center gap-6 mb-12"
          >
            <Link to="/projects">
              <button className="bg-[#c8a45e] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#b8923a] transition flex items-center gap-2">
                Explore Properties <ArrowRight size={18} />
              </button>
            </Link>
            <Link to="/contact">
              <button className="border border-white/30 text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-black transition">
                Contact Us
              </button>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-wrap items-center gap-4"
          >
            <div className="flex items-center gap-2 text-white/70 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full">
              <MapPin size={16} className="text-[#c8a45e]" />
              <span className="text-sm">Nashik, Maharashtra</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2">
              <span className="text-white/80 text-sm">Property Type</span>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-full px-5 py-2">
              <span className="text-white/80 text-sm">Max Budget</span>
            </div>
            <button 
              onClick={handleSearch}
              className="bg-[#c8a45e] text-white px-6 py-2 rounded-full flex items-center gap-2 hover:bg-[#b8923a] transition text-sm"
            >
              <Search size={16} /> Search Properties
            </button>
          </motion.div>
        </div>

        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#c8a45e] rounded-full mt-2"></div>
          </div>
        </motion.div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16 border-b">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold text-[#c8a45e] mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Properties We Offer - CLICKABLE CARDS */}
      <div className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Properties We Offer</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Residential & Commercial properties in prime locations of Nashik</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Residential Card - Clickable */}
            <Link to="/projects?category=Residential">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800" 
                    alt="Residential Properties"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <HomeIcon size={32} className="text-[#c8a45e] mb-2" />
                    <h3 className="text-2xl font-bold">Residential Properties</h3>
                    <p className="text-white/80 mt-1">Apartments | Villas | Independent Houses | Farmhouses</p>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <span className="text-[#c8a45e] font-medium group-hover:underline">View All Residential Properties →</span>
                </div>
              </motion.div>
            </Link>

            {/* Commercial Card - Clickable */}
            <Link to="/projects?category=Commercial">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg group cursor-pointer hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800" 
                    alt="Commercial Properties"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 p-6 text-white">
                    <Store size={32} className="text-[#c8a45e] mb-2" />
                    <h3 className="text-2xl font-bold">Commercial Properties</h3>
                    <p className="text-white/80 mt-1">Shops | Offices | Showrooms | Warehouses</p>
                  </div>
                </div>
                <div className="p-4 text-center border-t border-gray-100">
                  <span className="text-[#c8a45e] font-medium group-hover:underline">View All Commercial Properties →</span>
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Why Choose Swabhagya Reality?</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Your trusted partner in real estate since 2010</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 border rounded-xl hover:shadow-lg transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#c8a45e]/10 rounded-full flex items-center justify-center">
                  <feature.icon className="text-[#c8a45e]" size={28} />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-500 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* PROJECT STATUS SECTION - CLICKABLE CARDS */}
      <div className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Project Status</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">Track the progress of our ongoing, completed and upcoming projects</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Ongoing Projects Card - Clickable */}
            <Link to="/projects?status=ongoing">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition cursor-pointer group hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-yellow-100 rounded-full flex items-center justify-center group-hover:bg-yellow-200 transition">
                  <span className="text-4xl">🏗️</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Ongoing Projects</h3>
                <p className="text-gray-500 mb-3">Currently under construction</p>
                <div className="border-t pt-3 mt-2">
                  <p className="text-[#c8a45e] font-semibold">3 Active Projects</p>
                  <p className="text-sm text-gray-500 mt-1">Sunrise Heights • PG Complex • Industrial Warehouse</p>
                </div>
                <div className="mt-4 text-[#c8a45e] text-sm font-medium group-hover:underline">
                  View Ongoing Projects →
                </div>
              </motion.div>
            </Link>

            {/* Completed Projects Card - Clickable */}
            <Link to="/projects?status=completed">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition cursor-pointer group hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition">
                  <span className="text-4xl">✅</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Completed Projects</h3>
                <p className="text-gray-500 mb-3">Successfully delivered</p>
                <div className="border-t pt-3 mt-2">
                  <p className="text-[#c8a45e] font-semibold">50+ Projects</p>
                  <p className="text-sm text-gray-500 mt-1">Green Valley • Business Plaza • Green Valley Villas</p>
                </div>
                <div className="mt-4 text-[#c8a45e] text-sm font-medium group-hover:underline">
                  View Completed Projects →
                </div>
              </motion.div>
            </Link>

            {/* Upcoming Projects Card - Clickable */}
            <Link to="/projects?status=upcoming">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="bg-white rounded-xl p-8 text-center shadow-md hover:shadow-lg transition cursor-pointer group hover:-translate-y-2"
              >
                <div className="w-20 h-20 mx-auto mb-4 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition">
                  <span className="text-4xl">🔜</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Upcoming Projects</h3>
                <p className="text-gray-500 mb-3">Coming soon</p>
                <div className="border-t pt-3 mt-2">
                  <p className="text-[#c8a45e] font-semibold">2 New Launches</p>
                  <p className="text-sm text-gray-500 mt-1">Riverdale Farmhouses • ATM Spaces</p>
                </div>
                <div className="mt-4 text-[#c8a45e] text-sm font-medium group-hover:underline">
                  View Upcoming Projects →
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>

      {/* Featured Properties Preview */}
      <div className="py-20 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">Featured Properties</h2>
            <p className="text-gray-500">Handpicked properties for you</p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: 1, title: 'Sunrise Heights', type: 'Residential', price: '₹45 Lakhs', location: 'Panchavati', img: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=500' },
              { id: 6, title: 'Business Plaza', type: 'Commercial', price: '₹1.5 Cr', location: 'CBD', img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=500' },
              { id: 4, title: 'Green Valley Villas', type: 'Residential', price: '₹1.2 Cr', location: 'College Road', img: 'https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=500' },
            ].map((property) => (
              <motion.div
                key={property.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition"
              >
                <img src={property.img} alt={property.title} className="w-full h-48 object-cover" />
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-bold text-gray-800">{property.title}</h3>
                    <span className="text-xs bg-[#c8a45e]/10 text-[#c8a45e] px-2 py-1 rounded">{property.type}</span>
                  </div>
                  <p className="text-gray-500 text-sm mb-2 flex items-center gap-1"><MapPin size={12} /> {property.location}</p>
                  <p className="text-[#c8a45e] font-bold text-lg">{property.price}</p>
                  <Link to={`/property/${property.id}`}>
                    <button className="w-full mt-3 bg-[#c8a45e] text-white py-2 rounded-md hover:bg-[#b8923a] transition font-medium">
                      View Details
                    </button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/projects">
              <button className="bg-[#c8a45e] text-white px-8 py-3 rounded-md hover:bg-[#b8923a] transition font-semibold">
                View All Properties
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#c8a45e] rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xl">S</span>
                </div>
                <div>
                  <span className="text-white font-bold text-xl">SWABHAGYA</span>
                  <span className="text-[#c8a45e] font-bold text-xl"> REALITY</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed">
                Your trusted partner for residential and commercial properties in Nashik since 2010.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 text-sm">
                <li><Link to="/" className="hover:text-[#c8a45e] transition">Home</Link></li>
                <li><Link to="/about" className="hover:text-[#c8a45e] transition">About Us</Link></li>
                <li><Link to="/projects" className="hover:text-[#c8a45e] transition">Properties</Link></li>
                <li><Link to="/contact" className="hover:text-[#c8a45e] transition">Contact</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2 text-sm">
                <li className="flex items-center gap-2"><MapPin size={14} /> Panchavati, Nashik</li>
                <li className="flex items-center gap-2"><Phone size={14} /> <a href="tel:+919272560005">+91 92725 60005</a></li>
                <li className="flex items-center gap-2"><Mail size={14} /> <a href="mailto:upasanawagh05@gmail.com">upasanawagh05@gmail.com</a></li>
              </ul>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Office Hours</h4>
              <ul className="space-y-2 text-sm">
                <li>Mon-Sat: 10AM - 7PM</li>
                <li>Sunday: By Appointment</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-6 text-center text-xs">
            <p>&copy; 2024 Swabhagya Reality. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;