import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Users, ChevronDown } from 'lucide-react';
import { outlets } from '../data/outlets';
import { Restaurant } from '../types/index';

const timeSlots = [
  '12:00 PM', '12:30 PM', '1:00 PM', '1:30 PM', '2:00 PM', '2:30 PM',
  '3:00 PM', '3:30 PM', '4:00 PM', '4:30 PM', '5:00 PM', '5:30 PM',
  '6:00 PM', '6:30 PM', '7:00 PM', '7:30 PM', '8:00 PM', '8:30 PM',
  '9:00 PM', '9:30 PM', '10:00 PM'
];

const BookingForm = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const navigate = useNavigate();
  
  const [selectedRestaurant, setSelectedRestaurant] = useState<Restaurant | null>(null);
  const [date, setDate] = useState<string>('');
  const [time, setTime] = useState<string>('');
  const [guests, setGuests] = useState<number>(2);
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [specialRequests, setSpecialRequests] = useState<string>('');
  const [isTimeDropdownOpen, setIsTimeDropdownOpen] = useState<boolean>(false);
  const [isRestaurantDropdownOpen, setIsRestaurantDropdownOpen] = useState<boolean>(false);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  
  // Set minimum date to today
  const today = new Date().toISOString().split('T')[0];
  
  useEffect(() => {
    // If restaurantId is provided, find the matching restaurant
    if (restaurantId) {
      const restaurant = outlets.find(outlet => outlet.id === restaurantId);
      if (restaurant) {
        setSelectedRestaurant(restaurant);
      }
    }
  }, [restaurantId]);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedRestaurant || !date || !time || !name || !email || !phone) {
      return;
    }
    
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        navigate('/restaurants');
      }, 3000);
    }, 1500);
  };
  
  return (
    <div className="min-h-screen bg-deep-black text-cream py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/restaurants')}
          className="flex items-center gap-2 text-cream/70 hover:text-cream mb-8 transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Restaurants
        </button>
        
        <div className="bg-deep-black border border-cream/20 rounded-xl p-8 md:p-10">
          <h1 className="font-playfair text-4xl md:text-5xl mb-8 text-center">Reserve Your Table</h1>
          
          {isSuccess ? (
            <div className="text-center py-12 space-y-6">
              <div className="w-20 h-20 bg-green-500/20 rounded-full flex items-center justify-center mx-auto">
                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h2 className="text-2xl font-medium">Booking Confirmed!</h2>
              <p className="text-cream/70">
                Thank you for your reservation at {selectedRestaurant?.name}. We've sent a confirmation to your email.
              </p>
              <p className="text-cream/70">Redirecting you back to restaurants...</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Restaurant Selection */}
              <div className="space-y-2">
                <label className="block text-cream/80 text-sm font-medium mb-1">
                  Restaurant
                </label>
                <div className="relative">
                  <button
                    type="button"
                    className="w-full flex items-center justify-between bg-deep-black border border-cream/30 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-cream/50"
                    onClick={() => setIsRestaurantDropdownOpen(!isRestaurantDropdownOpen)}
                  >
                    {selectedRestaurant ? (
                      <span>{selectedRestaurant.name}</span>
                    ) : (
                      <span className="text-cream/50">Select a restaurant</span>
                    )}
                    <ChevronDown className={`w-5 h-5 transition-transform ${isRestaurantDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {isRestaurantDropdownOpen && (
                    <div className="absolute z-10 mt-1 w-full bg-deep-black border border-cream/30 rounded-lg shadow-lg max-h-60 overflow-auto">
                      {outlets.map(restaurant => (
                        <button
                          key={restaurant.id}
                          type="button"
                          className="w-full text-left px-4 py-3 hover:bg-cream/10 transition-colors"
                          onClick={() => {
                            setSelectedRestaurant(restaurant);
                            setIsRestaurantDropdownOpen(false);
                          }}
                        >
                          <div className="font-medium">{restaurant.name}</div>
                          <div className="text-sm text-cream/60">{restaurant.city}</div>
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              </div>
              
              {/* Date and Time */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="date" className="block text-cream/80 text-sm font-medium mb-1">
                    Date
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      id="date"
                      min={today}
                      value={date}
                      onChange={(e) => setDate(e.target.value)}
                      className="w-full bg-deep-black border border-cream/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cream/50"
                      required
                    />
                    <Calendar className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cream/50 pointer-events-none w-5 h-5" />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label className="block text-cream/80 text-sm font-medium mb-1">
                    Time
                  </label>
                  <div className="relative">
                    <button
                      type="button"
                      className="w-full flex items-center justify-between bg-deep-black border border-cream/30 rounded-lg px-4 py-3 text-left focus:outline-none focus:ring-2 focus:ring-cream/50"
                      onClick={() => setIsTimeDropdownOpen(!isTimeDropdownOpen)}
                    >
                      {time ? (
                        <span>{time}</span>
                      ) : (
                        <span className="text-cream/50">Select a time</span>
                      )}
                      <ChevronDown className={`w-5 h-5 transition-transform ${isTimeDropdownOpen ? 'rotate-180' : ''}`} />
                    </button>
                    
                    {isTimeDropdownOpen && (
                      <div className="absolute z-10 mt-1 w-full bg-deep-black border border-cream/30 rounded-lg shadow-lg max-h-60 overflow-auto">
                        {timeSlots.map(slot => (
                          <button
                            key={slot}
                            type="button"
                            className="w-full text-left px-4 py-2 hover:bg-cream/10 transition-colors"
                            onClick={() => {
                              setTime(slot);
                              setIsTimeDropdownOpen(false);
                            }}
                          >
                            {slot}
                          </button>
                        ))}
                      </div>
                    )}
                    <Clock className="absolute right-10 top-1/2 transform -translate-y-1/2 text-cream/50 pointer-events-none w-5 h-5" />
                  </div>
                </div>
              </div>
              
              {/* Number of Guests */}
              <div className="space-y-2">
                <label htmlFor="guests" className="block text-cream/80 text-sm font-medium mb-1">
                  Number of Guests
                </label>
                <div className="relative">
                  <input
                    type="number"
                    id="guests"
                    min="1"
                    max="20"
                    value={guests}
                    onChange={(e) => setGuests(parseInt(e.target.value))}
                    className="w-full bg-deep-black border border-cream/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cream/50"
                    required
                  />
                  <Users className="absolute right-4 top-1/2 transform -translate-y-1/2 text-cream/50 pointer-events-none w-5 h-5" />
                </div>
              </div>
              
              {/* Contact Information */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="block text-cream/80 text-sm font-medium mb-1">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full bg-deep-black border border-cream/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cream/50"
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="block text-cream/80 text-sm font-medium mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full bg-deep-black border border-cream/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cream/50"
                    required
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="block text-cream/80 text-sm font-medium mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-deep-black border border-cream/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cream/50"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="special-requests" className="block text-cream/80 text-sm font-medium mb-1">
                  Special Requests (Optional)
                </label>
                <textarea
                  id="special-requests"
                  rows={3}
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full bg-deep-black border border-cream/30 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cream/50"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting || !selectedRestaurant || !date || !time || !name || !email || !phone}
                className="w-full bg-cream text-deep-black font-semibold rounded-lg py-4 hover:bg-cream/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-5 w-5 text-deep-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Processing...
                  </span>
                ) : (
                  'Confirm Reservation'
                )}
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingForm; 