import React from "react";

const teamMembers = [
  {
    name: "Geetika Sharma",
    className: "MSc IT - Final Year",
    rollNumber: "2341313",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Rippan Choudhary",
    className: "MSc IT - Final Year",
    rollNumber: "2440229",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Simranjit Kaur",
    className: "MSc IT - Final Year",
    rollNumber: "2460457",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
  {
    name: "Kajal",
    className: "MSc IT - Final Year",
    rollNumber: "2323992",
    branch: "Information Technology",
    image:
      "https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png",
  },
];

const AboutUsScreen = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#181c87] mb-10">
          About Our Project
        </h1>

        {/* Project Info */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-12 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-[#181c87] mb-4">
            Project Overview
          </h2>
          <p className="leading-relaxed text-gray-800">
            Public Holiday Tracker is a web-based project developed by MSc IT
            final year students as part of their academic curriculum. The main
            objective of this application is to help users easily explore
            upcoming public holidays worldwide using a modern, responsive
            interface.
            <br />
            <br />
            Built with React and Tailwind CSS, and powered by the Calendarific
            API, this app showcases the integration of real-time data, dynamic
            country selection, and keyword-based filtering. The focus was on
            creating a useful tool while learning practical frontend development
            skills.
          </p>
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-semibold text-[#181c87] mb-8 text-center">
          Our Team
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-gray-100 p-5 rounded-xl text-center hover:shadow-[#181c87] hover:scale-[1.02] transition-all duration-300 shadow-md">
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 mx-auto mb-4 rounded-full border-4 border-[#181c87]"
              />
              <h3 className="text-xl font-bold text-[#181c87]">
                {member.name}
              </h3>
              <p className="text-gray-600 text-sm">{member.className}</p>
              <p className="text-gray-600 text-sm">{member.branch}</p>
              <p className="text-gray-600 text-sm">
                Roll No. {member.rollNumber}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AboutUsScreen;
