import { useState } from 'react';
import { submitEnquiry } from '../utils/api';
import { useAuth } from '../context/AuthContext';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  const { user } = useAuth();
  const [formData, setFormData] = useState({ 
    name: '', 
    email: '', 
    phone: '', 
    message: '', 
    interestedIn: 'General' 
  });
  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone is required';
    else if (!/^\d{10}$/.test(formData.phone)) newErrors.phone = 'Phone must be 10 digits';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    return newErrors;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: '' });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setIsSubmitting(true);
      try {
        const enquiryData = {
          ...formData,
          userId: user?.id || null,
          status: 'New'
        };
        await submitEnquiry(enquiryData);
        setSuccess(true);
        setFormData({ name: '', email: '', phone: '', message: '', interestedIn: 'General' });
        setTimeout(() => setSuccess(false), 5000);
      } catch (error) {
        alert('Failed to submit. Please try again.');
      } finally {
        setIsSubmitting(false);
      }
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <h1 className="text-4xl font-bold text-center mb-3 text-gray-800">Contact Us</h1>
        <p className="text-center text-gray-500 mb-12">Get in touch with us for any inquiries</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6">
            {success && (
              <div className="mb-4 bg-green-50 text-green-600 p-3 rounded-lg border border-green-200">
                ✓ Message sent! We'll contact you soon.
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Full Name <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full p-2.5 border ${errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white`}
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Email <span className="text-red-500">*</span></label>
                <input
                  type="email"
                  name="email"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full p-2.5 border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Phone (10 digits) <span className="text-red-500">*</span></label>
                <input
                  type="tel"
                  name="phone"
                  placeholder="9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full p-2.5 border ${errors.phone ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white`}
                />
                {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
              </div>
              
              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Interested In</label>
                <select
                  name="interestedIn"
                  value={formData.interestedIn}
                  onChange={handleChange}
                  className="w-full p-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                >
                  <option value="General">General Enquiry</option>
                  <option value="Residential">Residential Property</option>
                  <option value="Commercial">Commercial Property</option>
                </select>
              </div>
              
              <div className="mb-5">
                <label className="block text-gray-700 font-medium mb-1">Message <span className="text-red-500">*</span></label>
                <textarea
                  name="message"
                  placeholder="Tell us about your requirements..."
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className={`w-full p-2.5 border ${errors.message ? 'border-red-500' : 'border-gray-300'} rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white`}
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full bg-[#c8a45e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#b8923a] transition ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div>
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Get in Touch</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#c8a45e]/10 rounded-full flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-[#c8a45e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Visit Us</p>
                    <p className="text-gray-500 text-xs">Behind Indrakund Temple, Panchavati, Nashik - 422003</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#c8a45e]/10 rounded-full flex items-center justify-center shrink-0">
                    <Phone size={16} className="text-[#c8a45e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Call Us</p>
                    <p className="text-gray-500 text-xs">+91 92725 60005</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#c8a45e]/10 rounded-full flex items-center justify-center shrink-0">
                    <Mail size={16} className="text-[#c8a45e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Email Us</p>
                    <p className="text-gray-500 text-xs">upasanawagh05@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 bg-[#c8a45e]/10 rounded-full flex items-center justify-center shrink-0">
                    <Clock size={16} className="text-[#c8a45e]" />
                  </div>
                  <div>
                    <p className="font-semibold text-gray-800 text-sm">Office Hours</p>
                    <p className="text-gray-500 text-xs">Mon-Sat: 10AM - 7PM</p>
                    <p className="text-gray-500 text-xs">Sunday: By Appointment</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-md overflow-hidden mt-6">
              <iframe
                title="Swabhagya Rality Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3749.573525720545!2d73.7905918!3d20.0108889!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bddecacdb4f0e2b%3A0x0!2zMjDCsDAwJzM5LjIiTiA3M8KwNDcnMzUuNCJF!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
              ></iframe>
              <div className="p-3 bg-gray-50 text-center border-t border-gray-100">
                <a 
                  href="https://www.google.com/maps/place/20%C2%B000'39.2%22N+73%C2%B047'35.4%22E/@20.0108889,73.7905918,17z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c8a45e] hover:underline text-xs font-medium"
                >
                  Open in Google Maps →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;