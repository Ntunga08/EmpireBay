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
  