import React, { useState } from "react";

const UserProfile = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState({
    name: "John Developer",
    title: "Full Stack Developer",
    location: "New York, USA",
    email: "john@example.com",
    phone: "+1 234 567 890",
    experience: "Senior Developer @ Tech Corp | 5+ years",
    education: "Computer Science BSc, MIT University",
  });

  const skills = [
    { name: "JavaScript", level: "expert" },
    { name: "React", level: "advanced" },
    { name: "Node.js", level: "intermediate" },
    { name: "Python", level: "expert" },
    { name: "AWS", level: "advanced" },
  ];

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleInputChange = (field, value) => {
    setProfile(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRT6NaU4Ur8LgGKKc8KqSQoX1KhcMnKgxVYQA&s"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
        <div className="flex-1 text-center md:text-left">
          {isEditing ? (
            <div className="space-y-2">
              <input
                type="text"
                value={profile.name}
                onChange={(e) => handleInputChange('name', e.target.value)}
                className="text-2xl font-bold text-gray-800 w-full p-1 border rounded"
              />
              <input
                type="text"
                value={profile.title}
                onChange={(e) => handleInputChange('title', e.target.value)}
                className="text-gray-500 w-full p-1 border rounded"
              />
              <input
                type="text"
                value={profile.location}
                onChange={(e) => handleInputChange('location', e.target.value)}
                className="text-gray-500 w-full p-1 border rounded"
              />
            </div>
          ) : (
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
              <p className="text-gray-500">{profile.title}</p>
              <p className="text-gray-500">📍 {profile.location}</p>
            </div>
          )}
        </div>
        <button
          onClick={handleEditClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>

      {/* Skills Section (Remains static for this example) */}
      <div className="bg-white shadow-lg rounded-lg p-6 mt-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-4">
          Skills & Expertise
        </h2>
        <div className="flex flex-wrap gap-3">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 rounded-full text-gray-700 bg-gray-200 flex items-center gap-2"
            >
              <span
                className={`w-3 h-3 rounded-full ${
                  skill.level === "expert"
                    ? "bg-green-500"
                    : skill.level === "advanced"
                    ? "bg-blue-500"
                    : "bg-yellow-500"
                }`}
              ></span>
              {skill.name}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Details */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        <DetailCard 
          title="Experience" 
          isEditing={isEditing}
          content={
            isEditing ? (
              <textarea
                value={profile.experience}
                onChange={(e) => handleInputChange('experience', e.target.value)}
                className="w-full p-2 border rounded"
                rows="4"
              />
            ) : (
              profile.experience
            )
          }
        />

        <DetailCard 
          title="Education" 
          isEditing={isEditing}
          content={
            isEditing ? (
              <textarea
                value={profile.education}
                onChange={(e) => handleInputChange('education', e.target.value)}
                className="w-full p-2 border rounded"
                rows="4"
              />
            ) : (
              profile.education
            )
          }
        />

        <DetailCard 
          title="Contact"
          isEditing={isEditing}
          content={
            isEditing ? (
              <div className="space-y-2">
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className="w-full p-1 border rounded"
                />
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full p-1 border rounded"
                />
              </div>
            ) : (
              <>
                📧 {profile.email} <br /> 📱 {profile.phone}
              </>
            )
          }
        />
      </div>
    </div>
  );
};

const DetailCard = ({ title, content, isEditing }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
    <div className="text-gray-700">
      {content}
    </div>
  </div>
);

export default UserProfile;