import React, { createContext, useState, useContext, useEffect } from 'react';
import { useAuth } from './AuthContext';

const FavoritesContext = createContext();

export const useFavorites = () => useContext(FavoritesContext);

export const FavoritesProvider = ({ children }) => {
  const { user, isAuthenticated } = useAuth();
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load favorites from localStorage when user changes
  useEffect(() => {
    if (isAuthenticated && user) {
      const savedFavorites = localStorage.getItem(`favorites_${user.email}`);
      if (savedFavorites) {
        setFavorites(JSON.parse(savedFavorites));
      } else {
        setFavorites([]);
      }
    } else {
      setFavorites([]);
    }
    setLoading(false);
  }, [isAuthenticated, user]);

  // Save favorites to localStorage whenever they change
  useEffect(() => {
    if (isAuthenticated && user) {
      localStorage.setItem(`favorites_${user.email}`, JSON.stringify(favorites));
    }
  }, [favorites, isAuthenticated, user]);

  // Add property to favorites
  const addToFavorites = (property) => {
    console.log("Adding to favorites:", property);
    setFavorites(prev => {
      if (prev.some(p => p.id === property.id)) {
        return prev;
      }
      return [...prev, property];
    });
  };

  // Remove property from favorites
  const removeFromFavorites = (propertyId) => {
    console.log("Removing from favorites:", propertyId);
    setFavorites(prev => prev.filter(p => p.id !== propertyId));
  };

  // Check if property is favorite
  const isFavorite = (propertyId) => {
    return favorites.some(p => p.id === propertyId);
  };

  // Toggle favorite
  const toggleFavorite = (property) => {
    console.log("Toggling favorite for:", property.title);
    if (isFavorite(property.id)) {
      removeFromFavorites(property.id);
    } else {
      addToFavorites(property);
    }
  };

  // Get favorites count
  const getFavoritesCount = () => favorites.length;

  return (
    <FavoritesContext.Provider value={{
      favorites,
      addToFavorites,
      removeFromFavorites,
      isFavorite,
      toggleFavorite,
      getFavoritesCount,
      loading
    }}>
      {children}
    </FavoritesContext.Provider>
  );
};