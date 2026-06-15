import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Award, Building2, Users, Shield, CheckCircle, 
  MapPin, Phone, Mail, Target, Eye, Home, 
  FileText
} from 'lucide-react';

const About = () => {
  const stats = [
    { value: '61+', label: 'Happy Customers', icon: Users },
    { value: '14+', label: 'Years Experience', icon: Award },
    { value: '50+', label: 'Projects Completed', icon: Building2 },
    { value: '100%', label: 'Legal Compliance', icon: Shield },
  ];

  const services = [
    { icon: Home, title: 'Property Purchase', desc: 'End-to-end assistance for buying your dream property' },
    { icon: FileText, title: 'Legal Documentation', desc: '100% verified and legal documentation support' },
    { icon: MapPin, title: 'Site Visits', desc: 'Organized on-site property visits' },
    { icon: Phone, title: 'Online Consultations', desc: 'Virtual appointments available' },
  ];

  const certificates = [
    'RERA Certified',
    'ISO 9001:2015',
    'CRISIL Rated',
    'Government Approved'
  ];

  return (
    <div className="bg-white min-h-screen pt-24 pb-16">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-[#0a192f] to-[#1e2a3a] text-white py-16">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4">About Swabhagya Reality</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Building Trust, Building Nashik since 2010
            </p>
          </motion.div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-12 bg-gray-50 border-b border-gray-100">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="w-12 h-12 mx-auto mb-3 bg-[#c8a45e]/10 rounded-full flex items-center justify-center">
                  <stat.icon size={22} className="text-[#c8a45e]" />
                </div>
                <div className="text-3xl font-bold text-[#c8a45e] mb-1">{stat.value}</div>
                <div className="text-gray-500 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Our Story Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
            >
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
              <div className="w-16 h-1 bg-[#c8a45e] mb-6"></div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Established in 2010, Swabhagya Reality has been at the forefront of Nashik's real estate development. 
                With a commitment to quality, transparency, and customer satisfaction, we've delivered over 50 successful projects.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Our journey began with a simple vision: to provide quality homes and commercial spaces that exceed expectations 
                while maintaining complete transparency in every transaction.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, we are proud to be one of Nashik's most trusted real estate developers, known for our innovative designs, 
                timely delivery, and unwavering commitment to our customers.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800" 
                  alt="About Swabhagya Reality"
                  className="w-full h-96 object-cover"
                />
              </div>
              <div className="absolute -bottom-5 -right-5 bg-[#c8a45e] text-white p-4 rounded-xl shadow-lg">
                <p className="text-sm font-semibold">14+ Years</p>
                <p className="text-xs opacity-80">of Excellence</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#c8a45e]/10 rounded-full flex items-center justify-center mb-5">
                <Target size={28} className="text-[#c8a45e]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Mission</h3>
              <p className="text-gray-600 leading-relaxed">
                To provide quality homes and commercial spaces that exceed expectations while maintaining 
                complete transparency and customer satisfaction. We strive to make the home buying process 
                simple, transparent, and rewarding for every customer.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#c8a45e]/10 rounded-full flex items-center justify-center mb-5">
                <Eye size={28} className="text-[#c8a45e]" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-3">Our Vision</h3>
              <p className="text-gray-600 leading-relaxed">
                To be Nashik's most trusted real estate partner, known for innovation, quality, 
                and unwavering commitment to our customers. We envision creating landmarks that 
                redefine the city's skyline and set new standards in living.
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">What We Offer</h2>
            <div className="w-16 h-1 bg-[#c8a45e] mx-auto"></div>
            <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
              Comprehensive real estate services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-[#c8a45e]/10 rounded-full flex items-center justify-center">
                  <service.icon size={28} className="text-[#c8a45e]" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">{service.title}</h3>
                <p className="text-gray-500 text-sm">{service.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Certifications */}
      <div className="py-16 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-center mb-10"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-3">Our Certifications</h2>
            <div className="w-16 h-1 bg-[#c8a45e] mx-auto"></div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {certificates.map((cert, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white border border-gray-200 rounded-full px-6 py-2 shadow-sm"
              >
                <span className="text-gray-700 font-medium text-sm">✓ {cert}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 bg-gradient-to-r from-[#0a192f] to-[#1e2a3a]">
        <div className="container-custom text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Find Your Dream Property?</h2>
            <p className="text-white/70 mb-8 max-w-2xl mx-auto">
              Get in touch with our experts today for personalized assistance.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/contact">
                <button className="bg-[#c8a45e] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#b8923a] transition">
                  Contact Our Team
                </button>
              </Link>
              <Link to="/projects">
                <button className="border border-white/30 text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition">
                  Browse Properties
                </button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 pt-16 pb-8">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-[#c8a45e] rounded-lg flex items-center justify-center">
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

export default About;