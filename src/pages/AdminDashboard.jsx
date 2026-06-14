import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  MessageCircle, Home, LogOut, Eye, 
  CheckCircle, Clock, AlertCircle, Trash2, 
  Edit, Plus, Search, Users
} from 'lucide-react';
import { getAllEnquiries } from '../utils/api';

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('enquiries');
  const [enquiries, setEnquiries] = useState([]);
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const adminToken = localStorage.getItem('adminToken');
    if (!adminToken) {
      navigate('/admin/login');
      return;
    }
    fetchData();
  }, [navigate]);

  const fetchData = async () => {
    setLoading(true);
    try {
      const enquiriesRes = await getAllEnquiries();
      setEnquiries(enquiriesRes.data || []);
      setProperties([
        { _id: '1', title: 'Sunrise Heights', category: 'Residential', price: 4500000, status: 'Available', images: ['https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=100'] },
        { _id: '2', title: 'Business Plaza', category: 'Commercial', price: 15000000, status: 'Available', images: ['https://images.unsplash.com/photo-1497366216548-37526070297c?w=100'] },
        { _id: '3', title: 'Green Valley Villas', category: 'Residential', price: 25000000, status: 'Sold', images: ['https://images.unsplash.com/photo-1560185127-6ed189bf02f4?w=100'] },
      ]);
    } catch (error) {
      console.error('Error fetching data:', error);
      setEnquiries([
        { _id: '1', name: 'John Doe', email: 'john@test.com', phone: '9876543210', message: 'Interested in 2 BHK flat', interestedIn: 'Residential', status: 'New', createdAt: new Date().toISOString() },
        { _id: '2', name: 'Jane Smith', email: 'jane@test.com', phone: '9876543211', message: 'Looking for commercial space', interestedIn: 'Commercial', status: 'In Progress', createdAt: new Date().toISOString() },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('adminToken');
    navigate('/admin/login');
  };

  const updateEnquiryStatus = (id, newStatus) => {
    setEnquiries(enquiries.map(e => e._id === id ? { ...e, status: newStatus } : e));
  };

  const deleteEnquiry = (id) => {
    if (window.confirm('Delete this enquiry?')) {
      setEnquiries(enquiries.filter(e => e._id !== id));
    }
  };

  const getStatusBadge = (status) => {
    switch(status) {
      case 'New': return <span className="flex items-center gap-1 bg-yellow-100 text-yellow-800 px-2 py-1 rounded-full text-xs font-medium"><Clock size={12} /> New</span>;
      case 'In Progress': return <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium"><AlertCircle size={12} /> In Progress</span>;
      case 'Completed': return <span className="flex items-center gap-1 bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs font-medium"><CheckCircle size={12} /> Completed</span>;
      default: return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">New</span>;
    }
  };

  const filteredEnquiries = enquiries.filter(e => 
    e.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
    e.phone?.includes(searchTerm)
  );

  const stats = {
    totalEnquiries: enquiries.length,
    newEnquiries: enquiries.filter(e => e.status === 'New').length,
    inProgress: enquiries.filter(e => e.status === 'In Progress').length,
    completed: enquiries.filter(e => e.status === 'Completed').length,
    totalProperties: properties.length,
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#c8a45e]"></div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Admin Navbar */}
      <nav className="bg-white shadow-sm py-3 px-6 fixed top-0 w-full z-50 border-b border-gray-200">
        <div className="container-custom">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 bg-[#c8a45e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">A</span>
              </div>
              <div>
                <span className="font-bold text-gray-800 text-lg">Admin Dashboard</span>
                <p className="text-xs text-gray-500">Swabhagya Realty</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-red-600 hover:text-red-700 transition text-sm font-medium"
            >
              <LogOut size={18} /> Logout
            </button>
          </div>
        </div>
      </nav>

      <div className="pt-20 pb-8 px-6">
        <div className="container-custom">
          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-5 mb-6">
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Total Enquiries</p>
                  <p className="text-2xl font-bold text-gray-800">{stats.totalEnquiries}</p>
                </div>
                <MessageCircle size={32} className="text-[#c8a45e] opacity-50" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">New Enquiries</p>
                  <p className="text-2xl font-bold text-yellow-600">{stats.newEnquiries}</p>
                </div>
                <Clock size={32} className="text-yellow-500 opacity-50" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">In Progress</p>
                  <p className="text-2xl font-bold text-blue-600">{stats.inProgress}</p>
                </div>
                <AlertCircle size={32} className="text-blue-500 opacity-50" />
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-5 border border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-gray-500 text-sm">Completed</p>
                  <p className="text-2xl font-bold text-green-600">{stats.completed}</p>
                </div>
                <CheckCircle size={32} className="text-green-500 opacity-50" />
              </div>
            </div>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden border border-gray-100">
            <div className="flex border-b border-gray-200">
              <button
                onClick={() => setActiveTab('enquiries')}
                className={`px-5 py-3 font-semibold transition flex items-center gap-2 text-sm ${
                  activeTab === 'enquiries' 
                    ? 'text-[#c8a45e] border-b-2 border-[#c8a45e]' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <MessageCircle size={16} /> Enquiries ({stats.totalEnquiries})
              </button>
              <button
                onClick={() => setActiveTab('properties')}
                className={`px-5 py-3 font-semibold transition flex items-center gap-2 text-sm ${
                  activeTab === 'properties' 
                    ? 'text-[#c8a45e] border-b-2 border-[#c8a45e]' 
                    : 'text-gray-600 hover:text-gray-800'
                }`}
              >
                <Home size={16} /> Properties ({stats.totalProperties})
              </button>
            </div>

            {/* Search Bar */}
            <div className="p-4 border-b border-gray-100">
              <div className="relative max-w-xs">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={16} />
                <input
                  type="text"
                  placeholder="Search enquiries..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#c8a45e] focus:ring-1 focus:ring-[#c8a45e] text-gray-700 text-sm bg-white"
                />
              </div>
            </div>

            {/* Enquiries Tab */}
            {activeTab === 'enquiries' && (
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr className="border-b border-gray-200">
                      <th className="p-3 text-left font-semibold text-gray-700">Date</th>
                      <th className="p-3 text-left font-semibold text-gray-700">Name</th>
                      <th className="p-3 text-left font-semibold text-gray-700">Contact</th>
                      <th className="p-3 text-left font-semibold text-gray-700">Interested In</th>
                      <th className="p-3 text-left font-semibold text-gray-700">Message</th>
                      <th className="p-3 text-left font-semibold text-gray-700">Status</th>
                      <th className="p-3 text-left font-semibold text-gray-700">Actions</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredEnquiries.map((enquiry) => (
                      <tr key={enquiry._id} className="border-b border-gray-100 hover:bg-gray-50">
                        <td className="p-3 text-gray-700">{new Date(enquiry.createdAt).toLocaleDateString()}</td>
                        <td className="p-3 font-medium text-gray-800">{enquiry.name}</td>
                        <td className="p-3">
                          <div className="text-gray-700">{enquiry.email}</div>
                          <div className="text-xs text-gray-500">{enquiry.phone}</div>
                        </td>
                        <td className="p-3 text-gray-700">{enquiry.interestedIn || 'General'}</td>
                        <td className="p-3 text-gray-700 max-w-xs truncate">{enquiry.message}</td>
                        <td className="p-3">
                          <select
                            value={enquiry.status || 'New'}
                            onChange={(e) => updateEnquiryStatus(enquiry._id, e.target.value)}
                            className="text-sm border border-gray-300 rounded-lg px-2 py-1 bg-white text-gray-700 focus:outline-none focus:border-[#c8a45e]"
                          >
                            <option value="New">New</option>
                            <option value="In Progress">In Progress</option>
                            <option value="Completed">Completed</option>
                          </select>
                        </td>
                        <td className="p-3">
                          <button
                            onClick={() => deleteEnquiry(enquiry._id)}
                            className="text-red-500 hover:text-red-700 transition"
                          >
                            <Trash2 size={16} />
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
                {filteredEnquiries.length === 0 && (
                  <div className="text-center py-12">
                    <p className="text-gray-500">No enquiries found</p>
                  </div>
                )}
              </div>
            )}

            {/* Properties Tab */}
            {activeTab === 'properties' && (
              <div>
                <div className="p-4 border-b border-gray-100 flex justify-between items-center">
                  <h3 className="font-semibold text-gray-800">Property List</h3>
                  <button className="flex items-center gap-2 bg-[#c8a45e] text-white px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-[#b8923a] transition">
                    <Plus size={14} /> Add Property
                  </button>
                </div>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead className="bg-gray-50">
                      <tr className="border-b border-gray-200">
                        <th className="p-3 text-left font-semibold text-gray-700">Image</th>
                        <th className="p-3 text-left font-semibold text-gray-700">Title</th>
                        <th className="p-3 text-left font-semibold text-gray-700">Category</th>
                        <th className="p-3 text-left font-semibold text-gray-700">Price</th>
                        <th className="p-3 text-left font-semibold text-gray-700">Status</th>
                        <th className="p-3 text-left font-semibold text-gray-700">Actions</th>
                      </tr>
                    </thead>
                    <tbody>
                      {properties.map((property) => (
                        <tr key={property._id} className="border-b border-gray-100 hover:bg-gray-50">
                          <td className="p-3">
                            <img src={property.images?.[0] || 'https://via.placeholder.com/40'} alt="" className="w-10 h-10 object-cover rounded" />
                          </td>
                          <td className="p-3 font-medium text-gray-800">{property.title}</td>
                          <td className="p-3 text-gray-700">{property.category}</td>
                          <td className="p-3 text-gray-700">₹{(property.price / 100000).toFixed(1)}L</td>
                          <td className="p-3">
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${property.status === 'Available' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                              {property.status}
                            </span>
                          </td>
                          <td className="p-3">
                            <div className="flex gap-2">
                              <button className="text-blue-500 hover:text-blue-700 transition"><Edit size={16} /></button>
                              <button className="text-red-500 hover:text-red-700 transition"><Trash2 size={16} /></button>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;