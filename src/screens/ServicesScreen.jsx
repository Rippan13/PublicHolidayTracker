import React, { useEffect, useState } from "react";

// List of countries with flags and codes
const countries = [
  { code: "IN", name: "India", flag: "🇮🇳" },
  { code: "US", name: "United States", flag: "🇺🇸" },
  { code: "GB", name: "United Kingdom", flag: "🇬🇧" },
  { code: "CA", name: "Canada", flag: "🇨🇦" },
  { code: "AU", name: "Australia", flag: "🇦🇺" },
  { code: "DE", name: "Germany", flag: "🇩🇪" },
  { code: "FR", name: "France", flag: "🇫🇷" },
  { code: "JP", name: "Japan", flag: "🇯🇵" },
  { code: "CN", name: "China", flag: "🇨🇳" },
  { code: "BR", name: "Brazil", flag: "🇧🇷" },
];

const ServicesScreen = () => {
  const [query, setQuery] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(countries[0].code);
  const [holidays, setHolidays] = useState([]);
  const [filteredHolidays, setFilteredHolidays] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const API_KEY = "zitQOeYJdJ5hdkgJi0UeRCMRxm2LV47o";

  // Fetch holidays on country change
  useEffect(() => {
    fetchHolidays(selectedCountry);
  }, [selectedCountry]);

  const fetchHolidays = async (countryCode) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch(
        `https://calendarific.com/api/v2/holidays?&api_key=${API_KEY}&country=${countryCode}&year=2025`
      );
      const data = await res.json();
      const holidaysData = data.response.holidays.slice(0, 30);
      setHolidays(holidaysData);
      setFilteredHolidays(holidaysData);
    } catch (err) {
      console.error(err);
      setError("Error fetching holidays.");
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    if (!query.trim()) {
      setFilteredHolidays(holidays);
      setError("");
      return;
    }

    const lowerQuery = query.toLowerCase();
    const results = holidays.filter(
      (holiday) =>
        holiday.name.toLowerCase().includes(lowerQuery) ||
        holiday.description?.toLowerCase().includes(lowerQuery)
    );

    setFilteredHolidays(results);

    if (results.length === 0) {
      setError("No holiday events found for your search.");
    } else {
      setError("");
    }
  };

  return (
    <div className="min-h-screen bg-white text-black px-6 py-10">
      <div className="max-w-5xl mx-auto">
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-[#181c87] mb-6">
          Explore Public Holidays Worldwide
        </h1>

        {/* Dropdown + Search */}
        <div className="flex flex-col md:flex-row md:items-center gap-4 mb-8">
          {/* Country Dropdown */}
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="w-full md:w-1/3 px-4 py-2 border border-[#181c87] rounded-md text-black focus:outline-none">
            {countries.map((country) => (
              <option key={country.code} value={country.code}>
                {country.flag} {country.name}
              </option>
            ))}
          </select>

          {/* Search Bar */}
          <div className="flex flex-1 items-center gap-2">
            <input
              type="text"
              placeholder="Search holiday by name or keyword"
              className="w-full px-4 py-2 rounded-md text-black focus:outline-none border border-[#181c87]"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSearch()}
            />
            <button
              onClick={handleSearch}
              className="bg-[#181c87] text-white px-4 py-2 rounded-md hover:bg-opacity-90 transition cursor-pointer">
              Search
            </button>
          </div>
        </div>

        {/* Loading / Error */}
        {loading && (
          <p className="text-center text-[#181c87] font-medium">
            Loading holidays...
          </p>
        )}
        {error && <p className="text-center text-red-600 mb-4">{error}</p>}

        {/* Holiday Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredHolidays.map((holiday, index) => (
            <div
              key={index}
              className="border border-[#181c87] rounded-lg p-5 shadow-md hover:shadow-xl transition duration-300">
              <h2 className="text-xl font-bold text-[#181c87] mb-1">
                {holiday.name}
              </h2>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Date:</strong>{" "}
                {new Date(holiday.date.iso).toLocaleDateString()}
              </p>
              <p className="text-sm text-gray-600 mb-1">
                <strong>Type:</strong>{" "}
                {holiday.type?.join(", ") || "General Holiday"}
              </p>
              <p className="text-sm text-gray-600">
                {holiday.description || "No description available."}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesScreen;
