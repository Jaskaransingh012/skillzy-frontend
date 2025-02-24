import React from 'react';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";

const Courses = () => {
  // Mock data based on your schema
  const navigate = useNavigate();
  const courses = [
    {
      _id: '1',
      title: 'Web Development Bootcamp',
      description: 'Complete full-stack web development course covering modern technologies',
      price: 299,
      seller: { name: 'John Doe' },
      thumbnail: 'https://via.placeholder.com/400x250',
      categories: ['Programming', 'Web Development'],
      ratings: { average: 4.5, count: 120 },
      enrollmentCount: 450,
      createdAt: '2023-07-15',
      duration: '32 hours',
      difficulty: 'Intermediate'
    },
    {
      _id: '2',
      title: 'Mobile App Development',
      description: 'Build native iOS and Android apps using React Native',
      price: 199,
      seller: { name: 'Jane Smith' },
      thumbnail: 'https://via.placeholder.com/400x250',
      categories: ['Mobile Development', 'React'],
      ratings: { average: 4.8, count: 85 },
      enrollmentCount: 300,
      createdAt: '2023-08-01',
      duration: '28 hours',
      difficulty: 'Advanced'
    },
  ];

  const renderRatingStars = (average) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-4 h-4 ${i <= average ? 'text-yellow-400' : 'text-gray-300'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      );
    }
    return stars;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#E5FF80] to-transparent py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Explore Courses</h1>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search courses..."
              className="w-full max-w-md px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E5FF80]"
            />
            <div className="flex space-x-2">
              <button className="px-4 py-2 bg-white border rounded-lg hover:bg-gray-50">
                Filter
              </button>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course._id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 bg-gray-200">
                <img
                  src={course.thumbnail}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-sm font-medium text-[#E5FF80]">
                    {course.categories.join(', ')}
                  </span>
                  <span className="text-lg font-bold text-gray-900">
                    ${course.price}
                  </span>
                </div>

                <h3 className="text-xl font-semibold mb-2">
                  <Link to={`/courses/${course._id}`} className="hover:text-[#E5FF80]">
                    {course.title}
                  </Link>
                </h3>

                <p className="text-gray-600 mb-4">{course.description}</p>

                <div className="flex items-center space-x-4 mb-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    {renderRatingStars(course.ratings.average)}
                    <span className="ml-2">({course.ratings.count})</span>
                  </div>
                  <span>•</span>
                  <span>{course.enrollmentCount} students</span>
                </div>

                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Duration</p>
                    <p className="text-gray-600">{course.duration}</p>
                  </div>
                  <div>
                    <p className="font-medium">Difficulty</p>
                    <p className="text-gray-600">{course.difficulty}</p>
                  </div>
                  <div>
                    <p className="font-medium">Instructor</p>
                    <p className="text-gray-600">{course.seller.name}</p>
                  </div>
                  <div>
                    <p className="font-medium">Created</p>
                    <p className="text-gray-600">
                      {new Date(course.createdAt).toLocaleDateString()}
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => navigate(`/courses/${course._id}`)}
                  className="w-full mt-4 bg-[#E5FF80] text-gray-900 py-2 px-4 rounded-lg hover:bg-[#d2f06d] transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;