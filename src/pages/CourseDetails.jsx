import React from 'react';
import { useParams, Link } from 'react-router-dom';

const CourseDetails = () => {
  const { id } = useParams();

  // Mock data based on your schema
  const course = {
    _id: '1',
    title: 'Web Development Bootcamp',
    description: 'Complete full-stack web development course covering modern technologies',
    price: 299,
    seller: {
      name: 'John Doe',
      bio: 'Senior Full Stack Developer with 10+ years of experience',
      avatar: 'https://via.placeholder.com/150'
    },
    thumbnail: 'https://via.placeholder.com/800x400',
    content: [
      {
        sectionTitle: 'Introduction to Web Development',
        lectures: [
          { title: 'Course Overview', type: 'video', duration: '5:32' },
          { title: 'Setting Up Your Environment', type: 'text', duration: '10 min' }
        ]
      },
      {
        sectionTitle: 'HTML & CSS Fundamentals',
        lectures: [
          { title: 'HTML Basics', type: 'video', duration: '15:45' },
          { title: 'CSS Styling', type: 'video', duration: '20:10' }
        ]
      }
    ],
    categories: ['Programming', 'Web Development'],
    ratings: { average: 4.5, count: 120 },
    enrollmentCount: 450,
    duration: '32 hours',
    difficulty: 'Intermediate',
    createdAt: '2023-07-15'
  };

  const renderRatingStars = (average) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <svg
          key={i}
          className={`w-5 h-5 ${i <= average ? 'text-yellow-400' : 'text-gray-300'}`}
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
        {/* Course Header */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-8">
          <div className="h-64 bg-gray-200">
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

            <h1 className="text-3xl font-bold mb-4">{course.title}</h1>
            <p className="text-gray-600 mb-6">{course.description}</p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
              <div>
                <p className="text-sm text-gray-500">Duration</p>
                <p className="font-medium">{course.duration}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Difficulty</p>
                <p className="font-medium">{course.difficulty}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Students</p>
                <p className="font-medium">{course.enrollmentCount}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Rating</p>
                <div className="flex items-center">
                  {renderRatingStars(course.ratings.average)}
                  <span className="ml-2 text-sm">({course.ratings.count})</span>
                </div>
              </div>
            </div>

            <Link
              to={`/courses/${course._id}/enroll`}
              className="w-full mt-4 bg-[#E5FF80] text-gray-900 py-2 px-4 rounded-lg hover:bg-[#d2f06d] transition-colors font-medium"
            >
              Enroll Now
            </Link>
          </div>
        </div>

        {/* Course Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Syllabus Section */}
          <div className="lg:col-span-2 bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Course Content</h2>
            <div className="space-y-4">
              {course.content.map((section, index) => (
                <div key={index}>
                  <h3 className="text-lg font-semibold mb-2">
                    Section {index + 1}: {section.sectionTitle}
                  </h3>
                  <div className="space-y-2">
                    {section.lectures.map((lecture, idx) => (
                      <div key={idx} className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm text-gray-500">{idx + 1}</span>
                          <span>{lecture.title}</span>
                        </div>
                        <span className="text-sm text-gray-500">{lecture.duration}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Instructor Section */}
          <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-2xl font-bold mb-6">Instructor</h2>
            <div className="flex items-center space-x-4 mb-4">
              <img
                src={course.seller.avatar}
                alt={course.seller.name}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h3 className="text-lg font-semibold">{course.seller.name}</h3>
                <p className="text-sm text-gray-500">Senior Developer</p>
              </div>
            </div>
            <p className="text-gray-600 mb-6">{course.seller.bio}</p>
            <button className="w-full bg-[#E5FF80] text-gray-900 py-2 px-4 rounded-lg hover:bg-[#d2f06d] transition-colors">
              View Profile
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseDetails;