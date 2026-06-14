import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { propertiesData } from '../data/propertiesData';
import { MapPin, Bed, Bath, Ruler, Car, Heart, ChevronLeft, ChevronRight } from 'lucide-react';
import { useFavorites } from '../context/FavoritesContext';
import { useAuth } from '../context/AuthContext';

const PropertyDetails = () => {
  const { id } = useParams();
  const { isAuthenticated } = useAuth();
  const { isFavorite, toggleFavorite } = useFavorites();
  
  const [property, setProperty] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const foundProperty = propertiesData.find(p => String(p.id) === String(id));
    setProperty(foundProperty);
    setLoading(false);
  }, [id]);

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

  const handleFavorite = () => {
    if (!isAuthenticated) {
      alert('Please login to save favorites');
      return;
    }
    toggleFavorite(property);
  };

  if (loading) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center pt-24">
        <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-[#c8a45e]"></div>
      </div>
    );
  }

  if (!property) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center pt-24">
        <div className="text-center">
          <p className="text-gray-500">Property not found</p>
          <Link to="/projects" className="text-[#c8a45e] hover:underline mt-2 inline-block text-sm">← Back to Properties</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pt-24 pb-16">
      <div className="container-custom">
        {/* Breadcrumb */}
        <div className="mb-6 text-sm">
          <Link to="/" className="text-gray-500 hover:text-[#c8a45e]">Home</Link>
          <span className="text-gray-400 mx-2">/</span>
          <Link to="/projects" className="text-gray-500 hover:text-[#c8a45e]">Properties</Link>
          <span className="text-gray-400 mx-2">/</span>
          <span className="text-[#c8a45e]">{property.title}</span>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Images Section */}
          <div className="lg:col-span-2">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden mb-3">
              <img src={property.images[currentImage]} alt={property.title} className="w-full h-[400px] object-cover" />
              {property.images.length > 1 && (
                <>
                  <button 
                    onClick={() => setCurrentImage(prev => (prev - 1 + property.images.length) % property.images.length)} 
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition shadow-md"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button 
                    onClick={() => setCurrentImage(prev => (prev + 1) % property.images.length)} 
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 bg-white/80 text-gray-800 p-2 rounded-full hover:bg-white transition shadow-md"
                  >
                    <ChevronRight size={18} />
                  </button>
                </>
              )}
            </div>
            
            <div className="flex gap-2 overflow-x-auto pb-2">
              {property.images.map((img, idx) => (
                <button 
                  key={idx} 
                  onClick={() => setCurrentImage(idx)} 
                  className={`w-16 h-12 rounded-lg overflow-hidden border-2 transition ${currentImage === idx ? 'border-[#c8a45e]' : 'border-gray-200'}`}
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>

            <div className="mt-6 bg-white rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-bold text-gray-800 mb-3">Description</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
            </div>

            {property.amenities && property.amenities.length > 0 && (
              <div className="mt-5 bg-white rounded-xl p-6 shadow-sm">
                <h2 className="text-xl font-bold text-gray-800 mb-3">Amenities</h2>
                <div className="grid grid-cols-2 gap-3">
                  {property.amenities.map((amenity, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-gray-600 text-sm">
                      <span className="text-[#c8a45e]">✓</span> {amenity}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Info Sidebar */}
          <div>
            <div className="bg-white rounded-xl p-6 shadow-sm sticky top-24">
              <div className="flex justify-between items-start mb-3">
                <h1 className="text-xl font-bold text-gray-800">{property.title}</h1>
                <button 
                  onClick={handleFavorite} 
                  className="p-2 rounded-full hover:bg-gray-100 transition"
                >
                  <Heart size={20} className={isFavorite(property.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'} />
                </button>
              </div>
              
              <div className="flex items-center gap-2 mb-3">
                <MapPin size={14} className="text-gray-400" />
                <p className="text-gray-500 text-sm">{property.location}</p>
              </div>

              <div className="mb-4">
                <span className="text-2xl font-bold text-[#c8a45e]">{formatPrice(property.price, property.listingType)}</span>
              </div>

              <div className="flex flex-wrap gap-2 mb-5">
                <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs">{property.listingType}</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{property.category}</span>
                <span className="bg-gray-100 text-gray-700 px-2 py-0.5 rounded text-xs">{property.propertyType}</span>
              </div>

              <div className="border-t border-b border-gray-100 py-4 mb-5">
                <h3 className="text-sm font-semibold text-gray-800 mb-3">Key Specifications</h3>
                <div className="grid grid-cols-2 gap-3 text-sm">
                  {property.bedrooms > 0 && (
                    <div className="flex items-center gap-2 text-gray-600">
                      <Bed size={14} className="text-gray-400" /> {property.bedrooms} BHK
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-gray-600">
                    <Bath size={14} className="text-gray-400" /> {property.specifications?.bathrooms || 2} Bathrooms
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Ruler size={14} className="text-gray-400" /> {property.area_sqft} sq.ft
                  </div>
                  <div className="flex items-center gap-2 text-gray-600">
                    <Car size={14} className="text-gray-400" /> {property.specifications?.carParking || 1} Parking
                  </div>
                </div>
                {property.specifications?.furnishing && (
                  <p className="text-sm text-gray-500 mt-3">Furnishing: {property.specifications.furnishing}</p>
                )}
              </div>

              <Link to="/contact">
                <button className="w-full bg-[#c8a45e] text-white py-2.5 rounded-lg font-semibold hover:bg-[#b8923a] transition text-sm">
                  📞 Enquire Now
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;