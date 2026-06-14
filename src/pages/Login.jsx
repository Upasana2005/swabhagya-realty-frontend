import { useState } from 'react';
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Phone } from 'lucide-react';

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  
  const { login, signup } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    let result;
    if (isLogin) {
      result = await login(formData.email, formData.password);
    } else {
      if (!formData.name.trim()) {
        setError('Name is required');
        setLoading(false);
        return;
      }
      if (!formData.phone.trim()) {
        setError('Phone number is required');
        setLoading(false);
        return;
      }
      result = await signup(formData);
    }

    if (result.success) {
      navigate('/');
    } else {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="max-w-md mx-auto">
          <div className="bg-white rounded-xl shadow-md p-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                {isLogin ? 'Welcome Back' : 'Create Account'}
              </h2>
              <p className="text-gray-500 text-sm mt-1">
                {isLogin ? 'Login to your account' : 'Sign up to get started'}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-50 text-red-600 rounded-lg text-sm border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit}>
              {!isLogin && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Full Name</label>
                    <div className="relative">
                      <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="text"
                        name="name"
                        placeholder="Enter your full name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 font-medium mb-1">Phone Number</label>
                    <div className="relative">
                      <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                      <input
                        type="tel"
                        name="phone"
                        placeholder="9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                        required={!isLogin}
                      />
                    </div>
                  </div>
                </>
              )}

              <div className="mb-4">
                <label className="block text-gray-700 font-medium mb-1">Email Address</label>
                <div className="relative">
                  <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="email"
                    name="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-1">Password</label>
                <div className="relative">
                  <Lock size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  <input
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={handleChange}
                    className="w-full pl-10 pr-3 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-800 bg-white"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full bg-[#c8a45e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#b8923a] transition disabled:opacity-50"
              >
                {loading ? 'Please wait...' : (isLogin ? 'Login' : 'Sign Up')}
              </button>
            </form>

            <div className="text-center mt-5">
              <button
                onClick={() => {
                  setIsLogin(!isLogin);
                  setError('');
                  setFormData({ name: '', email: '', phone: '', password: '' });
                }}
                className="text-[#c8a45e] hover:underline text-sm"
              >
                {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;