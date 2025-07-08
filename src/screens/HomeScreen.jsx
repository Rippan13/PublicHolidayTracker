import React, { useEffect, useState } from "react";

const HomeScreen = () => {
  const API_KEY = "zitQOeYJdJ5hdkgJi0UeRCMRxm2LV47o";
  const [holidays, setHolidays] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchHolidays = async () => {
    try {
      const response = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=IN&year=2025`
      );
      const data = await response.json();
      setHolidays(data.response.holidays.slice(0, 10)); // Limiting to top 10 holidays
      setLoading(false);
    } catch (error) {
      console.error("Failed to fetch holidays:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHolidays();
  }, []);

  return (
    <div className="bg-white min-h-screen">
      {/* Banner Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1521295121783-8a321d551ad2?auto=format&fit=crop&w=1500&q=80"
          alt="Banner"
          className="absolute w-full h-full object-cover blur-sm"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6 z-10">
          <h1 className="text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Welcome to Public Holiday Tracker
          </h1>
          <p className="mt-4 text-lg md:text-xl text-white max-w-2xl">
            Easily discover upcoming public holidays around the world. Plan
            better and stay informed with our global holiday database.
          </p>
        </div>
      </section>

      {/* Upcoming Holidays Section */}
      <section className="px-4 md:px-12 py-12">
        <h2 className="text-3xl font-semibold mb-6 text-center text-[#181c87]">
          Upcoming Global Holidays
        </h2>

        {loading ? (
          <p className="text-center text-[#181c87] font-medium">
            Loading holidays...
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {holidays.map((holiday) => (
              <div
                key={holiday.name}
                className="border border-[#181c87] rounded-lg p-6 hover:shadow-xl transition duration-300">
                <h3 className="text-xl font-bold text-[#181c87] mb-2">
                  {holiday.name}
                </h3>
                <p className="text-gray-600 mb-1">
                  <strong>Date:</strong>{" "}
                  {new Date(holiday.date.iso).toLocaleDateString()}
                </p>
                <p className="text-gray-600 mb-1">
                  <strong>Country:</strong> {holiday.country.name}
                </p>
                <p className="text-gray-600 text-sm">
                  {holiday.description || "No description available."}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default HomeScreen;
