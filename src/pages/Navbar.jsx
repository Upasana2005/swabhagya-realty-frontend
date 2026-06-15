import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { Menu, X, Home, Building2, Calculator, Phone, LogIn, User, LogOut, Shield } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { user, logout, isAuthenticated } = useAuth();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
    setIsDropdownOpen(false);
  };

  const navLinks = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Properties', path: '/projects', icon: Building2 },
    { name: 'EMI', path: '/emi-calculator', icon: Calculator },
    { name: 'Contact', path: '/contact', icon: Phone },
  ];

  const isAdmin = user?.email === 'admin@swabhagya.com' || user?.role === 'admin';

  return (
    <>
      <div className="h-16"></div>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-3' : 'bg-white py-4'}`}>
        <div className="container-custom">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <div className="w-10 h-10 bg-[#c8a45e] rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">S</span>
              </div>
              <div>
                <span className="text-gray-800 font-bold text-xl tracking-wide">SWABHAGYA</span>
                <span className="text-[#c8a45e] font-bold text-xl"> REALITY</span>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`font-medium text-sm transition-all duration-300 ${
                    location.pathname === link.path 
                      ? 'text-[#c8a45e]' 
                      : 'text-gray-600 hover:text-[#c8a45e]'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/admin/login"
                className="text-gray-600 hover:text-[#c8a45e] transition text-sm"
              >
                Admin
              </Link>
              
              <a 
                href="https://wa.me/919272560005?text=Hi%20Swabhagya%20Reality%2C%20I'm%20interested%20in%20your%20properties"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#c8a45e] text-white px-5 py-2 rounded-md hover:bg-[#b8923a] transition text-sm font-medium"
              >
                Enquire Now
              </a>
              
              {isAuthenticated ? (
                <div className="relative">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className="flex items-center gap-2 text-gray-600 hover:text-[#c8a45e] transition"
                  >
                    <div className="w-8 h-8 rounded-full bg-[#c8a45e]/10 flex items-center justify-center">
                      <User size={16} className="text-[#c8a45e]" />
                    </div>
                    <span className="text-sm">{user?.name?.split(' ')[0]}</span>
                  </button>
                  
                  {isDropdownOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border">
                      <Link
                        to="/dashboard"
                        onClick={() => setIsDropdownOpen(false)}
                        className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                      >
                        <User size={16} /> Dashboard
                      </Link>
                      {isAdmin && (
                        <Link
                          to="/admin/dashboard"
                          onClick={() => setIsDropdownOpen(false)}
                          className="flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-50 transition"
                        >
                          <Shield size={16} /> Admin Panel
                        </Link>
                      )}
                      <hr className="my-1" />
                      <button
                        onClick={handleLogout}
                        className="flex items-center gap-3 w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 transition"
                      >
                        <LogOut size={16} /> Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to="/login"
                  className="border border-[#c8a45e] text-[#c8a45e] px-5 py-2 rounded-md hover:bg-[#c8a45e] hover:text-white transition text-sm font-medium"
                >
                  Login / Signup
                </Link>
              )}
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden text-gray-800"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          
          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center gap-3 py-3 text-gray-600 hover:text-[#c8a45e] transition border-b"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <link.icon size={18} />
                  {link.name}
                </Link>
              ))}
              
              <Link
                to="/admin/login"
                className="flex items-center gap-3 py-3 text-gray-600 hover:text-[#c8a45e] transition border-b"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Shield size={18} /> Admin
              </Link>
              
              <a 
                href="https://wa.me/919272560005?text=Hi%20Swabhagya%20Reality"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full bg-[#c8a45e] text-white py-2 rounded-md text-center mt-3"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Enquire Now
              </a>
              
              <div className="pt-3 mt-2">
                {isAuthenticated ? (
                  <>
                    <Link
                      to="/dashboard"
                      className="flex items-center gap-3 py-3 text-gray-600 hover:text-[#c8a45e]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <User size={18} /> Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-3 py-3 text-red-600 w-full"
                    >
                      <LogOut size={18} /> Logout
                    </button>
                  </>
                ) : (
                  <Link
                    to="/login"
                    className="block text-center py-3 text-[#c8a45e] font-semibold border-t"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Login / Signup
                  </Link>
                )}
              </div>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;