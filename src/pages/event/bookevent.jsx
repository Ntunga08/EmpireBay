import React, { useState } from 'react';
import { Calendar, Clock, Users, User, Mail, Phone, CheckCircle } from 'lucide-react';

export default function BarBookingForm() {
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
      <div className="min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center p-4">
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
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            Make Another Booking
          </button>
        </div>
      </div>
    );
  }
