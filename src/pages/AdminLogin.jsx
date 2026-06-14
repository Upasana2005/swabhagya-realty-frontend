import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Shield, Lock, Mail } from 'lucide-react';

const AdminLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (email === 'admin@swabhagya.com' && password === 'admin123') {
      localStorage.setItem('adminToken', 'admin-logged-in');
      navigate('/admin/dashboard');
    } else {
      setError('Invalid admin credentials');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen flex items-center justify-center pt-16 pb-16">
      <div className="bg-white rounded-xl shadow-md p-8 w-full max-w-md">
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#c8a45e]/10 rounded-full flex items-center justify-center mx-auto mb-3">
            <Shield size={28} className="text-[#c8a45e]" />
          </div>
          <h2 className="text-2xl font-bold text-gray-800">Admin Login</h2>
          <p className="text-gray-500 text-sm mt-1">Enter your credentials to access dashboard</p>
        </div>

        {error && (
          <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-1">Admin Email</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                placeholder="admin@swabhagya.com"
                required
              />
            </div>
          </div>

          <div className="mb-5">
            <label className="block text-gray-700 font-medium mb-1">Password</label>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                placeholder="••••••••"
                required
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#c8a45e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#b8923a] transition disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Login to Admin Panel'}
          </button>
        </form>

        <div className="mt-5 text-center text-sm text-gray-500 border-t pt-4">
          <p className="text-xs">Demo Credentials:</p>
          <p className="text-xs mt-1">Email: admin@swabhagya.com</p>
          <p className="text-xs">Password: admin123</p>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;