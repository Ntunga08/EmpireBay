import { useState } from 'react';
import { Users, Calendar, Clock, MapPin, User, Mail, Phone, Utensils, Check, Star } from 'lucide-react';

export default function TableBookingForm() {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    partySize: '',
    tablePreference: '',
    seatingArrangement: '',
    menuType: '',
    dietaryRestrictions: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    specialRequests: '',
    accessibilityNeeds: false,
    childrenSeats: '',
    celebrationReason: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const tablePreferences = [
    { value: 'window', label: 'Window View' },
    { value: 'private', label: 'Private Section' },
    { value: 'center', label: 'Center Hall' },
    { value: 'quiet', label: 'Quiet Area' },
    { value: 'stage-view', label: 'Stage View' },
    { value: 'no-preference', label: 'No Preference' }
  ];

  const seatingArrangements = [
    { value: 'round', label: 'Round Table (8-10 people)' },
    { value: 'rectangular', label: 'Rectangular Table (6-8 people)' },
    { value: 'booth', label: 'Booth Seating (4-6 people)' },
    { value: 'cocktail', label: 'Cocktail Table (4 people)' },
    { value: 'long', label: 'Long Table (10+ people)' },
    { value: 'mixed', label: 'Mixed Arrangement' }
  ];

  const menuTypes = [
    'Buffet Style',
    'Plated Dinner',
    'Cocktail Reception',
    'Family Style',
    'Tasting Menu',
    'Custom Menu'
  ];

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!formData.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
    if (!formData.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formData.eventName.trim()) newErrors.eventName = 'Event name is required';
    if (!formData.eventDate) newErrors.eventDate = 'Event date is required';
    if (!formData.eventTime) newErrors.eventTime = 'Event time is required';
    if (!formData.partySize) newErrors.partySize = 'Party size is required';
    if (!formData.tablePreference) newErrors.tablePreference = 'Table preference is required';
    if (!formData.seatingArrangement) newErrors.seatingArrangement = 'Seating arrangement is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = () => {
    if (validateForm()) {
      setSubmitted(true);
      console.log('Table booking submitted:', formData);
    }
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 flex items-center justify-center p-4">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl p-12 shadow-2xl text-center max-w-md mx-auto border border-white/20">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="w-10 h-10 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Table Reserved!</h2>
          <p className="text-gray-600 mb-6">
            Your table has been successfully reserved for {formData.eventName}. We'll send you a confirmation email shortly.
          </p>
          <div className="bg-amber-50 rounded-xl p-4 mb-6">
            <p className="text-sm text-gray-700">
              <strong>Event:</strong> {formData.eventName}<br/>
              <strong>Date:</strong> {formData.eventDate}<br/>
              <strong>Time:</strong> {formData.eventTime}<br/>
              <strong>Party Size:</strong> {formData.partySize} people
            </p>
          </div>
          <button
            onClick={() => {
              setSubmitted(false);
              setFormData({
                eventName: '', eventDate: '', eventTime: '', partySize: '', tablePreference: '',
                seatingArrangement: '', menuType: '', dietaryRestrictions: '', firstName: '',
                lastName: '', email: '', phone: '', specialRequests: '', accessibilityNeeds: false,
                childrenSeats: '', celebrationReason: ''
              });
            }}
            className="bg-gradient-to-r from-amber-600 to-orange-600 text-white px-8 py-3 rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
          >
            Book Another Table
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-500 via-orange-500 to-red-500 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-8 md:p-12 border border-white/20">
          {/* Header */}
          <div className="text-center mb-10">
            <div className="flex items-center justify-center mb-4">
              <Utensils className="w-12 h-12 text-amber-600 mr-4" />
              <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                Reserve Your Table
              </h1>
            </div>
            <p className="text-gray-600 text-lg">
              Book the perfect table for your special event
            </p>
          </div>

          <div className="space-y-8">
            {/* Event Information */}
            <div className="bg-amber-50/80 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <Calendar className="w-6 h-6 mr-3 text-amber-600" />
                Event Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Name *</label>
                  <input
                    type="text"
                    name="eventName"
                    value={formData.eventName}
                    onChange={handleInputChange}
                    placeholder="e.g., Sarah's Birthday Party, Corporate Gala"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${errors.eventName ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.eventName && <p className="text-red-500 text-sm mt-1">{errors.eventName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Date *</label>
                  <input
                    type="date"
                    name="eventDate"
                    value={formData.eventDate}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split('T')[0]}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${errors.eventDate ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.eventDate && <p className="text-red-500 text-sm mt-1">{errors.eventDate}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Event Time *</label>
                  <input
                    type="time"
                    name="eventTime"
                    value={formData.eventTime}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${errors.eventTime ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.eventTime && <p className="text-red-500 text-sm mt-1">{errors.eventTime}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Party Size *</label>
                  <select
                    name="partySize"
                    value={formData.partySize}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200 ${errors.partySize ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Select party size</option>
                    {[...Array(20)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1} {i === 0 ? 'person' : 'people'}</option>
                    ))}
                    <option value="20+">20+ people</option>
                  </select>
                  {errors.partySize && <p className="text-red-500 text-sm mt-1">{errors.partySize}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Children Seats Needed</label>
                  <select
                    name="childrenSeats"
                    value={formData.childrenSeats}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-amber-500 focus:border-amber-500 transition-all duration-200"
                  >
                    <option value="">No children</option>
                    <option value="1">1 high chair</option>
                    <option value="2">2 high chairs</option>
                    <option value="3">3 high chairs</option>
                    <option value="4+">4+ high chairs</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Table Preferences */}
            <div className="bg-orange-50/80 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <MapPin className="w-6 h-6 mr-3 text-orange-600" />
                Table Preferences
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Table Location *</label>
                  <select
                    name="tablePreference"
                    value={formData.tablePreference}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${errors.tablePreference ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Select preference</option>
                    {tablePreferences.map(pref => (
                      <option key={pref.value} value={pref.value}>{pref.label}</option>
                    ))}
                  </select>
                  {errors.tablePreference && <p className="text-red-500 text-sm mt-1">{errors.tablePreference}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Seating Arrangement *</label>
                  <select
                    name="seatingArrangement"
                    value={formData.seatingArrangement}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200 ${errors.seatingArrangement ? 'border-red-500' : 'border-gray-200'}`}
                  >
                    <option value="">Select arrangement</option>
                    {seatingArrangements.map(arrangement => (
                      <option key={arrangement.value} value={arrangement.value}>{arrangement.label}</option>
                    ))}
                  </select>
                  {errors.seatingArrangement && <p className="text-red-500 text-sm mt-1">{errors.seatingArrangement}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Menu Type</label>
                  <select
                    name="menuType"
                    value={formData.menuType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  >
                    <option value="">Select menu type</option>
                    {menuTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Celebration Reason</label>
                  <input
                    type="text"
                    name="celebrationReason"
                    value={formData.celebrationReason}
                    onChange={handleInputChange}
                    placeholder="Birthday, Anniversary, etc."
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                  />
                </div>
              </div>

              <div className="mt-6">
                <label className="block text-sm font-semibold text-gray-700 mb-2">Dietary Restrictions</label>
                <input
                  type="text"
                  name="dietaryRestrictions"
                  value={formData.dietaryRestrictions}
                  onChange={handleInputChange}
                  placeholder="Vegetarian, Gluten-free, Allergies, etc."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-all duration-200"
                />
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-red-50/80 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center">
                <User className="w-6 h-6 mr-3 text-red-600" />
                Contact Information
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    placeholder="Enter first name"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${errors.firstName ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    placeholder="Enter last name"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${errors.lastName ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter email address"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${errors.email ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Enter phone number"
                    className={`w-full px-4 py-3 border-2 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-all duration-200 ${errors.phone ? 'border-red-500' : 'border-gray-200'}`}
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>
              </div>
            </div>

            {/* Additional Preferences */}
            <div className="bg-yellow-50/80 rounded-2xl p-6">
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Additional Preferences</h3>
              
              <div className="mb-6">
                <label className="flex items-center space-x-3 cursor-pointer group">
                  <input
                    type="checkbox"
                    name="accessibilityNeeds"
                    checked={formData.accessibilityNeeds}
                    onChange={handleInputChange}
                    className="w-5 h-5 text-yellow-600 border-2 border-gray-300 rounded focus:ring-yellow-500"
                  />
                  <span className="text-gray-700 group-hover:text-yellow-700 transition-colors">Accessibility accommodations needed</span>
                </label>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Special Requests</label>
                <textarea
                  name="specialRequests"
                  value={formData.specialRequests}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Any special requests, cake cutting, decorations, music preferences, or additional information..."
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-yellow-500 focus:border-yellow-500 transition-all duration-200 resize-none"
                />
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center pt-6">
              <button
                onClick={handleSubmit}
                className="bg-gradient-to-r from-amber-600 via-orange-600 to-red-600 text-white px-12 py-4 rounded-2xl text-lg font-semibold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 focus:ring-4 focus:ring-amber-300 flex items-center mx-auto"
              >
                <Utensils className="w-5 h-5 mr-2" />
                Reserve Table
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}