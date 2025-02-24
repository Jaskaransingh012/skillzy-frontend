import React, { useState, useContext } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import axios from 'axios';

const CourseEnrollment = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { isAuthenticated } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Mock course data
  const course = {
    _id: '1',
    title: 'Web Development Bootcamp',
    price: 299,
    isPaid: true,
    // ... other course details
  };

  const handleEnrollment = async () => {
    if (!isAuthenticated) {
      navigate('/signin');
      return;
    }

    setLoading(true);
    setError('');

    try {
      if (course.price > 0) {
        // Handle paid course enrollment
        const response = await axios.post('/api/create-payment-intent', {
          courseId: id,
          amount: course.price
        });
        
        // Redirect to payment gateway
        window.location = response.data.paymentUrl;
      } else {
        // Handle free enrollment
        await axios.post('/api/enroll', { courseId: id });
        navigate(`/courses/${id}/content`);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'Enrollment failed');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5FF80] to-transparent py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h2 className="text-2xl font-bold mb-4">Enroll in {course.title}</h2>
          
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4">
              {error}
            </div>
          )}

          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-gray-50 rounded-lg">
              <span className="font-medium">Course Price</span>
              <span className={`text-xl ${course.price > 0 ? 'text-gray-900' : 'text-green-600'}`}>
                {course.price > 0 ? `$${course.price}` : 'Free'}
              </span>
            </div>

            <div className="p-4 bg-gray-50 rounded-lg">
              <h3 className="font-medium mb-2">What's included:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Full course access</li>
                <li>Certificate of completion</li>
                <li>Q&A support</li>
                {course.price > 0 && <li>Premium support</li>}
              </ul>
            </div>

            <button
              onClick={handleEnrollment}
              disabled={loading}
              className={`w-full py-3 px-6 rounded-lg font-medium transition-colors ${
                course.price > 0 
                  ? 'bg-[#E5FF80] hover:bg-[#d2f06d] text-gray-900'
                  : 'bg-green-500 hover:bg-green-600 text-white'
              } ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {loading ? 'Processing...' : (
                course.price > 0 ? `Purchase Course - $${course.price}` : 'Enroll for Free'
              )}
            </button>

            {course.price > 0 && (
              <div className="text-center text-sm text-gray-600 mt-4">
                Secure payment processing powered by Stripe
                <div className="flex justify-center mt-2 space-x-4">
                  <img src="/visa.svg" alt="Visa" className="h-6" />
                  <img src="/mastercard.svg" alt="Mastercard" className="h-6" />
                  <img src="/stripe.svg" alt="Stripe" className="h-6" />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseEnrollment;