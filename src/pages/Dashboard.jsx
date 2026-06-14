import { useState, useEffect } from 'react';
import { useAuth } from '../context/AuthContext';
import { useFavorites } from '../context/FavoritesContext';
import { getUserEnquiries } from '../utils/api';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Home, Building2, Trash2, Eye, LogOut, MessageCircle, Mail, Phone, Clock } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { favorites, removeFromFavorites, getFavoritesCount, loading } = useFavorites();
  const [enquiries, setEnquiries] = useState([]);
  const [enquiriesLoading, setEnquiriesLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('favorites');

  useEffect(() => {
    if (user) {
      fetchEnquiries();
    }
  }, [user]);

  const fetchEnquiries = async () => {
    try {
      const response = await getUserEnquiries(user.email);
      setEnquiries(response.data);
    } catch (error) {
      console.error('Error fetching enquiries:', error);
    } finally {
      setEnquiriesLoading(false);
    }
  };

  const formatPrice = (price, listingType) => {
    if (listingType === 'Rent') {
      if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L/month`;
      return `₹${price.toLocaleString('en-IN')}/month`;
    }
    if (listingType === 'Lease') {
      if (price >= 100000) return `₹${(price / 100000).toFixed(1)}L/year`;
      return `₹${price.toLocaleString('en-IN')}/year`;
    }
    if (price >= 10000000) return `₹${(price / 10000000).toFixed(2)} Cr`;
    if (price >= 100000) return `₹${(price / 100000).toFixed(1)} Lakhs`;
    return `₹${price.toLocaleString('en-IN')}`;
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'New': return <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">New</span>;
      case 'In Progress': return <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded-full text-xs">In Progress</span>;
      case 'Completed': return <span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Completed</span>;
      default: return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">New</span>;
    }
  };

  if (loading || enquiriesLoading) {
    return (
      <div className="pt-32 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#d4af37]"></div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-28 pb-16 bg-gray-50 min-h-screen"
    >
      <div className="container-custom">
        {/* Welcome Header */}
        <div className="bg-gradient-to-r from-[#0a192f] to-[#1e2a3a] rounded-2xl p-8 mb-8 text-white">
          <div className="flex justify-between items-center flex-wrap gap-4">
            <div>
              <h1 className="text-3xl font-bold mb-2">Welcome back, {user?.name?.split(' ')[0]}!</h1>
              <p className="text-white/70">Manage your saved properties and enquiries</p>
            </div>
            <button
              onClick={logout}
              className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20 transition"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Saved Properties</p>
                <p className="text-3xl font-bold text-[#0a192f]">{getFavoritesCount()}</p>
              </div>
              <Heart size={40} className="text-[#d4af37] opacity-50" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Total Enquiries</p>
                <p className="text-3xl font-bold text-[#0a192f]">{enquiries.length}</p>
              </div>
              <MessageCircle size={40} className="text-[#d4af37] opacity-50" />
            </div>
          </div>
          <div className="bg-white rounded-xl shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-500 text-sm">Properties Viewed</p>
                <p className="text-3xl font-bold text-[#0a192f]">0</p>
              </div>
              <Eye size={40} className="text-[#d4af37] opacity-50" />
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('favorites')}
              className={`flex-1 px-6 py-3 font-semibold transition ${
                activeTab === 'favorites' 
                  ? 'text-[#d4af37] border-b-2 border-[#d4af37]' 
                  : 'text-gray-500 hover:text-[#0a192f]'
              }`}
            >
              ❤️ Saved Properties
            </button>
            <button
              onClick={() => setActiveTab('enquiries')}
              className={`flex-1 px-6 py-3 font-semibold transition ${
                activeTab === 'enquiries' 
                  ? 'text-[#d4af37] border-b-2 border-[#d4af37]' 
                  : 'text-gray-500 hover:text-[#0a192f]'
              }`}
            >
              📧 My Enquiries ({enquiries.length})
            </button>
          </div>

          {/* Favorites Tab */}
          {activeTab === 'favorites' && (
            <div className="p-6">
              {favorites.length === 0 ? (
                <div className="text-center py-12">
                  <Heart size={60} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No saved properties yet</p>
                  <Link to="/projects" className="text-[#d4af37] hover:underline mt-2 inline-block">
                    Browse properties and click the ❤️ to save →
                  </Link>
                </div>
              ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favorites.map((property) => (
                    <div key={property.id} className="flex gap-4 border rounded-lg p-4 hover:shadow-md transition">
                      <img 
                        src={property.images?.[0] || 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800'} 
                        alt={property.title}
                        className="w-28 h-28 object-cover rounded-lg"
                        onError={(e) => {
                          e.target.src = 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800';
                        }}
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-[#0a192f]">{property.title}</h3>
                        <p className="text-gray-500 text-sm">📍 {property.location}</p>
                        <p className="text-[#d4af37] font-bold mt-1">
                          {formatPrice(property.price, property.listingType)}
                        </p>
                        <div className="flex gap-3 mt-2">
                          <Link to={`/property/${property.id}`}>
                            <button className="text-sm text-[#d4af37] hover:underline flex items-center gap-1">
                              <Eye size={14} /> View Details
                            </button>
                          </Link>
                          <button 
                            onClick={() => removeFromFavorites(property.id)}
                            className="text-sm text-red-500 hover:underline flex items-center gap-1"
                          >
                            <Trash2 size={14} /> Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Enquiries Tab */}
          {activeTab === 'enquiries' && (
            <div className="p-6">
              {enquiries.length === 0 ? (
                <div className="text-center py-12">
                  <MessageCircle size={60} className="mx-auto text-gray-300 mb-4" />
                  <p className="text-gray-500">No enquiries yet</p>
                  <Link to="/contact" className="text-[#d4af37] hover:underline mt-2 inline-block">
                    Submit your first enquiry →
                  </Link>
                </div>
              ) : (
                <div className="space-y-4">
                  {enquiries.map((enquiry) => (
                    <div key={enquiry._id} className="border rounded-lg p-4 hover:shadow-md transition">
                      <div className="flex justify-between items-start mb-3">
                        <div>
                          <p className="font-semibold text-[#0a192f]">{enquiry.name}</p>
                          <p className="text-xs text-gray-400">{new Date(enquiry.createdAt).toLocaleString()}</p>
                        </div>
                        {getStatusBadge(enquiry.status)}
                      </div>
                      <p className="text-gray-600 text-sm mb-3">{enquiry.message}</p>
                      <div className="flex gap-4 text-xs text-gray-400">
                        <span className="flex items-center gap-1"><Mail size={12} /> {enquiry.email}</span>
                        <span className="flex items-center gap-1"><Phone size={12} /> {enquiry.phone}</span>
                      </div>
                      {enquiry.propertyName && (
                        <p className="text-xs text-[#d4af37] mt-2">Regarding: {enquiry.propertyName}</p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Dashboard;