import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from 'lucide-react';
import sam1 from "../../assets/heroImage/sam1.jpeg"

const  BarBookingForm =() =>{
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: 2,
    tableType: 'regular',
    specialRequests: ''
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const tableTypes = [
    { value: 'regular', label: 'Regular Table (2-4 people)', price: 'Free' },
    { value: 'high-top', label: 'High-Top Table (4-6 people)', price: '$20 deposit' },
    { value: 'booth', label: 'Private Booth (6-8 people)', price: '$50 deposit' },
    { value: 'vip', label: 'VIP Section (8+ people)', price: '$100 deposit' }
  ];

  const timeSlots = [
    '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', 
    '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.date) newErrors.date = 'Date is required';
    if (!formData.time) newErrors.time = 'Time is required';
    
    // Check if date is not in the past
    const selectedDate = new Date(formData.date);
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (selectedDate < today) {
      newErrors.date = 'Date cannot be in the past';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setIsSubmitted(true);
      // Here you would typically send data to your backend
      console.log('Booking submitted:', formData);
    }
  };


  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-[#142746] flex items-center justify-center p-4">
        <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center">
          <div className="mb-6">
            <CheckCircle className="w-20 h-20 text-green-500 mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-gray-800 mb-2">Booking Confirmed!</h2>
            <p className="text-gray-600">
              Thank you, {formData.name}! Your table reservation has been confirmed.
            </p>
          </div>
          
          <div className="bg-gray-50 rounded-xl p-6 mb-6 text-left">
            <h3 className="font-semibold text-gray-800 mb-3">Reservation Details:</h3>
            <div className="space-y-2 text-sm text-gray-600">
              <p><span className="font-medium">Date:</span> {new Date(formData.date).toLocaleDateString()}</p>
              <p><span className="font-medium">Time:</span> {formData.time}</p>
              <p><span className="font-medium">Guests:</span> {formData.guests}</p>
              <p><span className="font-medium">Table:</span> {tableTypes.find(t => t.value === formData.tableType)?.label}</p>
            </div>
          </div>

          <button
            onClick={() => {
              setIsSubmitted(false);
              setFormData({
                name: '', email: '', phone: '', date: '', time: '',
                guests: 2, tableType: 'regular', specialRequests: ''
              });
            }}
            className="w-full bg-[#142746] hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }
return (
    <div
  style={{ backgroundImage: `url(${sam1})` }}
  className="min-h-screen bg-cover bg-center w-full py-8 px-4"
>
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-5xl font-bold text-white mb-4">Reserve Your Table</h1>
          <p className="text-xl text-blue-200">Book the perfect spot for your evening</p>
        </div>

        {/* Form Container */}
        <div className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-8">
          <div className="space-y-6">
            
            {/* Personal Information */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <User className="w-5 h-5 mr-2 text-[#142746]" />
                  Full Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.name ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                  placeholder="Enter your full name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Mail className="w-5 h-5 mr-2 text-[#142746]" />
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.email ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
            </div>

            <div>
              <label className="flex items-center text-gray-700 font-semibold mb-2">
                <Phone className="w-5 h-5 mr-2 text-[#142746]" />
                Phone Number
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                  errors.phone ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                }`}
                placeholder="+1 (555) 123-4567"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
            </div>

            {/* Reservation Details */}
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Calendar className="w-5 h-5 mr-2 text-[#142746]" />
                  Date
                </label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.date ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                />
                {errors.date && <p className="text-red-500 text-sm mt-1">{errors.date}</p>}
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Clock className="w-5 h-5 mr-2 text-[#142746]" />
                  Time
                </label>
                <select
                  name="time"
                  value={formData.time}
                  onChange={handleInputChange}
                  className={`w-full px-4 py-3 border-2 rounded-xl focus:outline-none transition-colors ${
                    errors.time ? 'border-red-400 focus:border-red-500' : 'border-gray-200 focus:border-purple-500'
                  }`}
                >
                  <option value="">Select time</option>
                  {timeSlots.map(time => (
                    <option key={time} value={time}>{time}</option>
                  ))}
                </select>
                {errors.time && <p className="text-red-500 text-sm mt-1">{errors.time}</p>}
              </div>

              <div>
                <label className="flex items-center text-gray-700 font-semibold mb-2">
                  <Users className="w-5 h-5 mr-2 text-[#142746]" />
                  Guests
                </label>
                <select
                  name="guests"
                  value={formData.guests}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors"
                >
                  {[...Array(12)].map((_, i) => (
                    <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'guest' : 'guests'}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Table Type */}
            <div>
              <label className="text-gray-700 font-semibold mb-4 block">Table Type</label>
              <div className="grid md:grid-cols-2 gap-4">
                {tableTypes.map(table => (
                  <label
                    key={table.value}
                    className={`relative cursor-pointer p-4 border-2 rounded-xl transition-all hover:shadow-md ${
                      formData.tableType === table.value 
                        ? 'border-purple-500 bg-purple-50' 
                        : 'border-gray-200 hover:border-purple-300'
                    }`}
                  >
                    <input
                      type="radio"
                      name="tableType"
                      value={table.value}
                      checked={formData.tableType === table.value}
                      onChange={handleInputChange}
                      className="sr-only"
                    />
                    <div className="font-medium text-gray-800">{table.label}</div>
                    <div className="text-sm text-gray-600 mt-1">{table.price}</div>
                  </label>
                ))}
              </div>
            </div>

            {/* Special Requests */}
            <div>
              <label className="text-gray-700 font-semibold mb-2 block">Special Requests</label>
              <textarea
                name="specialRequests"
                value={formData.specialRequests}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-purple-500 transition-colors resize-none"
                placeholder="Any special requests or dietary restrictions..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="button"
              onClick={handleSubmit}
              className="w-full bg-[#142746] hover:from-purple-700 hover:to-blue-700 text-white font-bold py-4 px-8 rounded-xl text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
            >
              Reserve Table
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-8 text-blue-200">
          <p>Questions? Call us at (255)74-145-9567</p>
        </div>
      </div>
    </div>
  );
}

export default BarBookingForm;