import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { MapPin, Heart } from 'lucide-react';
import { propertiesData, getFilterOptions } from '../data/propertiesData';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

const Projects = () => {
  const { isAuthenticated } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [searchParams] = useSearchParams();
  const statusFromUrl = searchParams.get('status');
  const categoryFromUrl = searchParams.get('category');
  
  const getInitialStatus = () => {
    if (statusFromUrl) {
      return statusFromUrl.charAt(0).toUpperCase() + statusFromUrl.slice(1);
    }
    return 'All';
  };
  
  const getInitialCategory = () => {
    if (categoryFromUrl) {
      return categoryFromUrl;
    }
    return 'All';
  };
  
  const [filters, setFilters] = useState({
    category: getInitialCategory(),
    listingType: 'All',
    propertyType: 'All',
    status: getInitialStatus(),
    maxPrice: 50000000
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileFilters, setShowMobileFilters] = useState(false);
  const [priceRangeType, setPriceRangeType] = useState('thousands');
  
  const filterOptions = getFilterOptions();
  
  const getFilteredProperties = () => {
    let filtered = propertiesData.filter(property => {
      // Category filter
      if (filters.category !== 'All' && property.category !== filters.category) return false;
      
      // Listing Type filter
      if (filters.listingType !== 'All' && property.listingType !== filters.listingType) return false;
      
      // Property Type filter
      if (filters.propertyType !== 'All' && property.propertyType !== filters.propertyType) return false;
      
      // Status filter
      const propertyStatus = property.status ? property.status.charAt(0).toUpperCase() + property.status.slice(1) : '';
      if (filters.status !== 'All' && propertyStatus !== filters.status) return false;
      
      // Price filter
      if (property.price > filters.maxPrice) return false;
      
      return true;
    });
    
    // Search filter
    if (searchQuery.trim() !== '') {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(property => 
        property.title.toLowerCase().includes(query) ||
        property.location.toLowerCase().includes(query) ||
        (property.description && property.description.toLowerCase().includes(query))
      );
    }
    
    return filtered;
  };
  
  const filteredProperties = getFilteredProperties();
  
  const getCurrentPropertyTypes = () => {
    if (filters.category === 'Residential') return filterOptions.propertyTypes.Residential;
    if (filters.category === 'Commercial') return filterOptions.propertyTypes.Commercial;
    return ['All'];
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
  
  const getListingTypeColor = (type) => {
    switch(type) {
      case 'Sale': return 'bg-green-500 text-white';
      case 'Rent': return 'bg-blue-500 text-white';
      case 'Lease': return 'bg-purple-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };
  
  const getStatusColor = (status) => {
    switch(status?.toLowerCase()) {
      case 'ongoing': return 'bg-yellow-500 text-white';
      case 'completed': return 'bg-green-500 text-white';
      case 'upcoming': return 'bg-blue-500 text-white';
      default: return 'bg-gray-500 text-white';
    }
  };

  const handleFavoriteClick = (e, property) => {
    e.stopPropagation();
    if (!isAuthenticated) {
      alert('Please login to save favorites');
      return;
    }
    toggleFavorite(property);
  };

  const getSliderValue = () => {
    if (priceRangeType === 'thousands') return filters.maxPrice / 1000;
    if (priceRangeType === 'lakhs') return filters.maxPrice / 100000;
    return filters.maxPrice / 10000000;
  };

  const handlePriceChange = (sliderValue) => {
    let actualPrice;
    if (priceRangeType === 'thousands') actualPrice = sliderValue * 1000;
    else if (priceRangeType === 'lakhs') actualPrice = sliderValue * 100000;
    else actualPrice = sliderValue * 10000000;
    setFilters({...filters, maxPrice: actualPrice});
  };

  const getSliderMax = () => {
    if (priceRangeType === 'thousands') return 50000;
    if (priceRangeType === 'lakhs') return 500;
    return 5;
  };

  const getSliderStep = () => {
    if (priceRangeType === 'thousands') return 1;
    if (priceRangeType === 'lakhs') return 1;
    return 0.1;
  };

  const getDisplayPrice = () => {
    if (priceRangeType === 'thousands') {
      return `₹${(filters.maxPrice / 1000).toFixed(0)}K`;
    } else if (priceRangeType === 'lakhs') {
      return `₹${(filters.maxPrice / 100000).toFixed(1)}L`;
    } else {
      return `₹${(filters.maxPrice / 10000000).toFixed(2)}Cr`;
    }
  };

  const categoryFilters = ['All', 'Residential', 'Commercial'];
  const listingTypeFilters = ['All', 'Sale', 'Rent', 'Lease'];
  const statusFilters = ['All', 'Ongoing', 'Completed', 'Upcoming'];

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container-custom">
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">Find Your Dream Property</h1>
          <p className="text-gray-500 text-sm">Discover residential & commercial properties in Nashik</p>
        </div>
        
        {/* Search Bar */}
        <div className="mb-6">
          <div className="relative max-w-md mx-auto">
            <input
              type="text"
              placeholder="Search by property name, location..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-2 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-[#c8a45e] text-gray-700 placeholder:text-gray-400"
            />
          </div>
        </div>
        
        {/* Filter Toggle for Mobile */}
        <div className="lg:hidden mb-4">
          <button
            onClick={() => setShowMobileFilters(!showMobileFilters)}
            className="w-full bg-white border border-gray-300 rounded-lg py-2 text-gray-600 text-sm"
          >
            {showMobileFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {/* Filters Section */}
        <div className={`bg-white rounded-xl p-4 mb-6 shadow-sm ${showMobileFilters ? 'block' : 'hidden lg:block'}`}>
          <div className="flex flex-wrap items-center gap-3">
            {/* Category Filter */}
            <select
              value={filters.category}
              onChange={(e) => setFilters({...filters, category: e.target.value, propertyType: 'All'})}
              className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm"
            >
              {categoryFilters.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
            
            {/* Listing Type Filter */}
            <select
              value={filters.listingType}
              onChange={(e) => setFilters({...filters, listingType: e.target.value})}
              className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm"
            >
              {listingTypeFilters.map(type => <option key={type} value={type}>{type}</option>)}
            </select>
            
            {/* Property Type Filter */}
            {(filters.category === 'Residential' || filters.category === 'Commercial') && (
              <select
                value={filters.propertyType}
                onChange={(e) => setFilters({...filters, propertyType: e.target.value})}
                className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm"
              >
                {getCurrentPropertyTypes().map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            )}
            
            {/* Status Filter */}
            <select
              value={filters.status}
              onChange={(e) => setFilters({...filters, status: e.target.value})}
              className="px-3 py-1.5 bg-gray-50 border border-gray-300 rounded-lg text-gray-700 text-sm"
            >
              {statusFilters.map(status => <option key={status} value={status}>{status}</option>)}
            </select>
            
            {/* Price Filter */}
            <div className="flex items-center gap-2 bg-gray-50 px-3 py-1 rounded-lg border border-gray-200">
              <span className="text-gray-600 text-xs font-medium">Max:</span>
              <select
                value={priceRangeType}
                onChange={(e) => setPriceRangeType(e.target.value)}
                className="bg-transparent text-gray-700 text-xs focus:outline-none"
              >
                <option value="thousands">Thousands (K)</option>
                <option value="lakhs">Lakhs (L)</option>
                <option value="crores">Crores (Cr)</option>
              </select>
              <input
                type="range"
                min={priceRangeType === 'thousands' ? 1 : priceRangeType === 'lakhs' ? 0.1 : 0.01}
                max={getSliderMax()}
                step={getSliderStep()}
                value={getSliderValue()}
                onChange={(e) => handlePriceChange(parseFloat(e.target.value))}
                className="w-28 h-1"
              />
              <span className="text-[#c8a45e] text-xs font-bold min-w-[55px]">
                {getDisplayPrice()}
              </span>
            </div>
            
            {/* Reset Button */}
            <button
              onClick={() => setFilters({ 
                category: 'All', 
                listingType: 'All', 
                propertyType: 'All', 
                status: 'All',
                maxPrice: 50000000 
              })}
              className="px-3 py-1.5 bg-gray-100 text-gray-600 rounded-lg text-xs hover:bg-gray-200"
            >
              Reset
            </button>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-gray-500 text-sm">{filteredProperties.length} properties found</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <div key={property.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition group">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={property.images[0]} 
                  alt={property.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <button
                  onClick={(e) => handleFavoriteClick(e, property)}
                  className="absolute top-3 right-3 p-1.5 bg-white/80 rounded-full hover:bg-white transition shadow-sm"
                >
                  <Heart size={18} className={isFavorite(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-500'} />
                </button>
                
                {/* Listing Type Badge */}
                <div className="absolute top-3 left-3">
                  <span className={`${getListingTypeColor(property.listingType)} text-xs px-2 py-1 rounded`}>
                    {property.listingType}
                  </span>
                </div>
                
                {/* Status Badge */}
                {property.status && (
                  <div className="absolute bottom-3 right-3">
                    <span className={`${getStatusColor(property.status)} text-xs px-2 py-1 rounded`}>
                      {property.status.charAt(0).toUpperCase() + property.status.slice(1)}
                    </span>
                  </div>
                )}
                
                {/* Property Type Badge */}
                <div className="absolute bottom-3 left-3">
                  <span className="bg-[#c8a45e]/10 text-[#c8a45e] text-xs px-2 py-1 rounded">{property.propertyType}</span>
                </div>
              </div>
              
              <div className="p-4">
                <h3 className="text-lg font-bold text-gray-800 mb-1">{property.title}</h3>
                <p className="text-gray-500 text-sm mb-2 flex items-center gap-1"><MapPin size={12} /> {property.location}</p>
                <p className="text-[#c8a45e] font-bold text-lg">{formatPrice(property.price, property.listingType)}</p>
                <div className="flex gap-3 mt-2 text-gray-400 text-xs">
                  {property.bedrooms > 0 && <span>🛏️ {property.bedrooms} BHK</span>}
                  <span>📐 {property.area_sqft} sq.ft</span>
                </div>
                <Link to={`/property/${property.id}`}>
                  <button className="w-full mt-3 bg-[#c8a45e] text-white py-2 rounded-md hover:bg-[#b8923a] transition text-sm font-medium">
                    View Details
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProperties.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500">No properties match your filters.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;