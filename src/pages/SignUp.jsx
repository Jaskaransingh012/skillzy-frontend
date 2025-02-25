import React, { useContext, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import { toast } from 'react-toastify';
import { Toaster } from 'react-hot-toast';

const SignUp = () => {
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        password: '',
        role: 'user'
    });
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [apiError, setApiError] = useState('');

    const validateForm = () => {
        const newErrors = {};
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.username.trim()) {
            newErrors.username = 'Username is required';
        }
        if (!formData.email.trim()) {
            newErrors.email = 'Email is required';
        } else if (!emailRegex.test(formData.email)) {
            newErrors.email = 'Invalid email format';
        }
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setApiError('');

        if (!validateForm()) return;

        setIsSubmitting(true);
        try {
            const response = await axios.post('http://localhost:5000/api/auth/register', formData);
            if (response.status === 201) {
                login();
                toast.success("Signed Up successfully");                
                navigate('/signin');
            }
        } catch (error) {
            if (error.response?.data?.error) {
                setApiError(error.response.data.error);
            } else {
                setApiError('Signup failed. Please try again.');
            }
        } finally {
            setIsSubmitting(false);
        }
    };

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 flex items-center justify-center p-6">
            <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-gray-800 text-center mb-2">Join SkillZy</h2>
                <p className="text-gray-600 text-center mb-6">Start your learning journey today</p>

                {apiError && (
                    <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
                        {apiError}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                        <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.username ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                        />
                        {errors.username && (
                            <p className="text-sm text-red-500 mt-1">{errors.username}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.email ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                        />
                        {errors.email && (
                            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${errors.password ? 'border-red-500 focus:ring-red-200' : 'border-gray-300 focus:ring-blue-200'
                                }`}
                        />
                        {errors.password && (
                            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
                        )}
                    </div>

                    <div>
                        <label htmlFor="role" className="block text-sm font-medium text-gray-700 mb-1">
                            Account Type
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-200"
                        >
                            <option value="user">Learner</option>
                            <option value="seller">Course Seller</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200 disabled:bg-blue-300 disabled:cursor-not-allowed"
                    >
                        {isSubmitting ? 'Creating Account...' : 'Sign Up'}
                    </button>
                </form>

                <p className="text-center text-gray-600 mt-6">
                    Already have an account?{' '}
                    <a href="/login" className="text-blue-600 hover:text-blue-700 font-medium">
                        Sign in
                    </a>
                </p>
            </div>
            <Toaster/>
        </div>
    );
};

export default SignUp;