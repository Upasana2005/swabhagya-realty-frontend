import { useState } from 'react';

const WhatsAppButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  // YOUR PHONE NUMBER - Updated
  const phoneNumber = '919272560005'; // 9272560005 with 91 prefix
  
  const sendMessage = () => {
    const text = message || "Hi Swabhagya Rality, I'm interested in your properties. Please share more details.";
    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(text)}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {isOpen && (
        <div className="absolute bottom-16 right-0 mb-2 w-80 bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-green-500 text-white p-4 flex justify-between items-center">
            <div className="flex items-center gap-2">
              <span className="text-2xl">💬</span>
              <span className="font-semibold">Chat with Swabhagya Rality</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-xl">✕</button>
          </div>
          <div className="p-4">
            <p className="text-gray-600 mb-3">Hi there! 👋</p>
            <p className="text-gray-600 mb-3">How can we help you with your property search?</p>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message here..."
              className="w-full p-3 border rounded-lg mb-3 focus:outline-none focus:border-green-500"
              rows="3"
            />
            <button
              onClick={sendMessage}
              className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition font-semibold"
            >
              Send on WhatsApp
            </button>
          </div>
        </div>
      )}
      
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-green-500 text-white p-4 rounded-full shadow-lg hover:bg-green-600 transition-all duration-300 hover:scale-110"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.032 2.001c-5.514 0-9.996 4.482-9.996 9.996 0 1.764.458 3.421 1.259 4.858L2 22l5.305-1.3c1.381.746 2.947 1.142 4.597 1.142 5.514 0 9.996-4.482 9.996-9.996s-4.482-9.995-9.996-9.995zm0 18.391c-1.491 0-2.894-.413-4.111-1.142l-3.015.738.783-2.894c-.836-1.284-1.308-2.778-1.308-4.366 0-4.607 3.748-8.355 8.355-8.355 4.607 0 8.355 3.748 8.355 8.355 0 4.607-3.748 8.355-8.355 8.355zm4.582-6.258c-.251-.126-1.482-.734-1.712-.818-.229-.085-.398-.126-.566.126-.167.252-.652.818-.799.986-.147.168-.294.189-.545.063-.251-.126-1.059-.392-2.016-1.25-.746-.666-1.251-1.489-1.397-1.741-.147-.252-.015-.388.111-.514.111-.111.252-.294.378-.441.126-.147.168-.252.252-.42.084-.168.042-.315-.021-.441-.063-.126-.566-1.364-.775-1.867-.204-.493-.411-.426-.566-.434-.146-.008-.314-.008-.482-.008-.168 0-.441.063-.672.315-.231.252-.882.861-.882 2.099 0 1.238.902 2.435 1.027 2.603.126.168 1.748 2.678 4.246 3.747.593.253 1.055.403 1.416.516.595.189 1.136.162 1.564.098.477-.071 1.482-.605 1.692-1.189.21-.584.21-1.084.147-1.189-.063-.105-.231-.168-.482-.294z"/>
        </svg>
      </button>
    </div>
  );
};

export default WhatsAppButton;