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
  const [showPaymentForm, setShowPaymentForm] = useState(false);
  const [cardDetails, setCardDetails] = useState({
    number: '',
    expiry: '',
    cvc: '',
    name: ''
  });

  // Mock course data
  const course = {
    _id: '1',
    title: 'Web Development Bootcamp',
    price: 299,
    isPaid: true,
  };

  const handleDummyPayment = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (!cardDetails.number || !cardDetails.expiry || !cardDetails.cvc || !cardDetails.name) {
      setError('Please fill all card details');
      setLoading(false);
      return;
    }

    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));

    try {
      // Simulate successful payment
      console.log('Dummy payment processed with:', cardDetails);
      
      // Complete enrollment
      await axios.post('/api/enroll', { courseId: id });
      navigate(`/courses/${id}/content`);
    } catch (err) {
      setError(err.response?.data?.message || 'Payment processing failed');
    } finally {
      setLoading(false);
    }
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
        setShowPaymentForm(true);
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

  const PaymentForm = () => (
    <form onSubmit={handleDummyPayment} className="space-y-4 mt-6">
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700">Card Number</label>
          <input
            type="text"
            placeholder="4242 4242 4242 4242"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
            value={cardDetails.number}
            onChange={(e) => setCardDetails({...cardDetails, number: e.target.value})}
            required
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Expiry Date</label>
            <input
              type="text"
              placeholder="MM/YY"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              value={cardDetails.expiry}
              onChange={(e) => setCardDetails({...cardDetails, expiry: e.target.value})}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">CVC</label>
            <input
              type="text"
              placeholder="123"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
              value={cardDetails.cvc}
              onChange={(e) => setCardDetails({...cardDetails, cvc: e.target.value})}
              required
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">Cardholder Name</label>
          <input
            type="text"
            placeholder="John Doe"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 p-2"
            value={cardDetails.name}
            onChange={(e) => setCardDetails({...cardDetails, name: e.target.value})}
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className="flex-1 py-3 px-6 bg-[#E5FF80] hover:bg-[#d2f06d] rounded-lg font-medium transition-colors disabled:opacity-50"
          >
            {loading ? 'Processing Payment...' : `Pay $${course.price}`}
          </button>

          <button
            type="button"
            onClick={() => setShowPaymentForm(false)}
            className="flex-1 py-3 px-6 bg-gray-200 hover:bg-gray-300 rounded-lg font-medium transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </form>
  );

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

            {!showPaymentForm && (
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
            )}

            {showPaymentForm && <PaymentForm />}

            {course.price > 0 && !showPaymentForm && (
              <div className="text-center text-sm text-gray-600 mt-4">
                Test Card Details:
                <div className="mt-2 text-left bg-gray-50 p-3 rounded-lg">
                  <p>Card Number: 4242 4242 4242 4242</p>
                  <p>Expiry: Any future date</p>
                  <p>CVC: Any 3 digits</p>
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