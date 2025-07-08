import React from "react";

const OurProcessScreen = () => {
  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#181c87] mb-10">
          Our Process
        </h1>

        {/* Introduction */}
        <div className="bg-gray-100 p-6 rounded-xl shadow-md mb-8 hover:shadow-lg transition-all duration-300">
          <h2 className="text-2xl font-semibold text-[#181c87] mb-4">
            Project Overview
          </h2>
          <p className="leading-relaxed text-gray-800">
            The Public Holiday Tracker is a student-developed React web
            application that enables users to explore global public holidays by
            country and keyword. Built using modern web technologies and the
            Calendarific public API, the app focuses on user accessibility,
            responsive design, and practical utility—ideal for students,
            travelers, and planners alike.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 gap-6">
          {/* Step 1 */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-[#181c87] hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold text-[#181c87] mb-2">
              Step 1: UI Design
            </h3>
            <p className="text-gray-700">
              We designed the application using React and Tailwind CSS to
              maintain a consistent and responsive layout. Each screen—from Home
              to Services— features intuitive navigation, clear typography, and
              animated cards.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-[#181c87] hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold text-[#181c87] mb-2">
              Step 2: API Integration
            </h3>
            <p className="text-gray-700">
              We used the Calendarific API to fetch public holiday data across
              different countries. The integration is done using native
              JavaScript `fetch()` and supports both initial loads and
              user-triggered queries.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-[#181c87] hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold text-[#181c87] mb-2">
              Step 3: Dynamic Filtering
            </h3>
            <p className="text-gray-700">
              Users can search holiday events by keyword or switch countries
              using a styled dropdown with flag icons. This enhances
              interactivity and global utility, letting users quickly find what
              they need.
            </p>
          </div>

          {/* Step 4 */}
          <div className="bg-gray-100 p-5 rounded-xl shadow-md hover:shadow-[#181c87] hover:scale-[1.02] transition-all duration-300">
            <h3 className="text-xl font-bold text-[#181c87] mb-2">
              Step 4: Final Touches
            </h3>
            <p className="text-gray-700">
              Animations, hover effects, and transitions bring the UI to life.
              Carefully styled components ensure usability and accessibility
              across devices. This project also highlights how APIs can enrich
              frontend apps.
            </p>
          </div>
        </div>

        {/* Outro */}
        <div className="text-center mt-12">
          <p className="text-[#181c87] italic">
            “This application was created as part of a student project to learn
            API integration, design principles, and dynamic search handling in
            real-world applications.”
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurProcessScreen;
