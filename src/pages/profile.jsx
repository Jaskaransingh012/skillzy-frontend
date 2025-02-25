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

  return (
    <div className="max-w-5xl mx-auto p-6">
      {/* Profile Header */}
      <div className="bg-white shadow-lg rounded-lg p-6 flex flex-col md:flex-row items-center gap-6">
        <img
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACUCAMAAABGFyDbAAAAMFBMVEXk5ueutLepsLPZ3N7n6erIzM7P0tTq7O2yuLvBxsje4eLV2NrR1da2u767wMPEycvljgLtAAADY0lEQVR4nO2byXLbMAxAuYDiou3//7akXLfxIosABciZ4bskMz3kDQiBC1ClOp1Op9PpdDqdTqfT6XR+DQDPv1wOeGUHF5dMjG6yX2EGaopaa6Nv5J8hWnWxGaR1vhv9x4ThWrGoX6VuXCcGbleqRGy8xAvSsut0I15hZQ+kcsDmJG41HVoVkuxCwrSfVQ9YSS8Y6qRKvAStxspYZYKcVwrVVlrPUsvoZ4SVNk7GC4b6JdwYRbSOC9YTQSJc/qi4v2AGfi+wyCXUMl8jOlgiWY/OrA1uLYj4Nczh4j7kAMVK64XZCrHt/IQ56YGQ8AUzsWop1L7zg8iaXLTvsOA5tYiplVeR0wocWctyakWiVc55xuTCnbQe4Nx/POZY+gjnp+ipqZXrfNfqWh+1vjTlv7NA0A6BBdZy+qWbT8NWzXuwIec868GGch3bgsV7DKQeIQzvOwTlTl3gvlcT6zxnjS/QSgT79ZV4yeD9DhUt6c3AbaVU+s6HJI/eF1n3w38kdLBE3nTRT7pCL/OwYLykHsAV7oFkYS8OdzBbkGBzRcFYrSXaG65+FRRt3NXGK4j30SF96J/fMItw8/XG0e4oVxkegOnjwIFwWv3wgjW8FzNBZB/cFUvuVcyYebp8ygZsnENW+Wukw+wuyfQXQNlxWMukVHTD+B2DUgXY8N5vP6+2UUXIg0o5WIPbGHK0bMqG132F+boxuvh6+y+TZcs62iQ+kQc+jW6ZjdmtW/mfstuQxMzyH7Ku/sC1jkqgWOR6sM77QXoXtxCZq1jO7oH2ksQ4xQh+3B8FPIzZwjMsCGp8MzOJIbjTxcBPqOvO+4jNZ4tZ4ivgM+HE1whIa3Ok7pjltGNY/TWnSuyUlQRFbhHsec3tAQO7c/5sovWUXz3IicO0DfDSezxHhBYtNqvsRU4waCzrnzHUE397Xf8MKV5Ab2nWQokXY17dwb99wXn7zScvZLioU21IsP081DB1ixdqUrahg4/1wiwh9uW9AcSMpdQSblQPM+K7Ok1Uv9uLWtVmPX3SjsZcFyvRzNK1TVDJz/DGXJNdDcNQREzN1kho+rayHic9OHGrqqQ/6f6MoeKAI/0dFiomcOgz3g1ax/dGmYPWE4eNY/qYXQuHlQsWcwWHBdVegcx/fut0Op1O5xfyBzfiKaWdaPkVAAAAAElFTkSuQmCC"
          alt="User Avatar"
          className="w-32 h-32 rounded-full border-4 border-blue-500"
        />
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-2xl font-bold text-gray-800">{profile.name}</h1>
          <p className="text-gray-500">{profile.title}</p>
          <p className="flex items-center justify-center md:justify-start gap-2 text-gray-500">
            📍 {profile.location}
          </p>
        </div>
        <button
          onClick={handleEditClick}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
          {isEditing ? "Save Profile" : "Edit Profile"}
        </button>
      </div>

      {/* Skills Section */}
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
        <DetailCard title="Experience" content={profile.experience} />
        <DetailCard title="Education" content={profile.education} />
        <DetailCard
          title="Contact"
          content={
            <>
              📧 {profile.email} <br /> 📱 {profile.phone}
            </>
          }
        />
      </div>
    </div>
  );
};

const DetailCard = ({ title, content }) => (
  <div className="bg-white shadow-lg rounded-lg p-4">
    <h3 className="text-lg font-semibold text-blue-600 mb-2">{title}</h3>
    <p className="text-gray-700">{content}</p>
  </div>
);

export default UserProfile;