"use client";

import { useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Logo from "@/app/icons/logo.svg";
import { IoIosSearch } from "react-icons/io";
import { RxPerson } from "react-icons/rx";

// SearchComponent to filter and display items
const SearchComponent = () => {
  const [query, setQuery] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [selectedIndex, setSelectedIndex] = useState(-1); 

  const items = [
    "Restaurants",
    "Hotels",
    "Beauty Spa",
    "Home Decor",
    "Rent & Hire",
    "Contractors",
    "Pet Shops",
    "Gym",
    "Dentist",
    "Consultant",
    "Event Planner",
    "Packer and Mover",
    "Salon",
    "Jewellery",
  ];

  const handleSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setQuery(value);
    setSelectedIndex(-1); 

    if (value === "") {
      setFilteredItems([]);
    } else {
      const filtered = items.filter((item) =>
        item.toLowerCase().includes(value)
      );
      setFilteredItems(filtered);
    }
  };

  const handleKeyDown = (e: Event) => {
    if (e.key === "ArrowDown") {
      // Navigate down
      setSelectedIndex((prevIndex) =>
        prevIndex < filteredItems.length - 1 ? prevIndex + 1 : prevIndex
      );
    } else if (e.key === "ArrowUp") {
      // Navigate up
      setSelectedIndex((prevIndex) =>
        prevIndex > 0 ? prevIndex - 1 : prevIndex
      );
    } else if (e.key === "Enter" && selectedIndex >= 0) {
      // Select the item on Enter key
      setQuery(filteredItems[selectedIndex]);
      setFilteredItems([]);
    }
  };

  return (
    <div className="relative">
    <div className="flex items-center px-4 py-2 bg-[#F3F9FB] rounded-md w-full max-w-lg h-12">
      <span className="mr-2 text-red-500 h-4 w-4 text-sm">
        <IoIosSearch />
      </span>
      <input
        type="text"
        placeholder="Search for great deals..."
        value={query}
        onChange={handleSearch}
        onKeyDown={handleKeyDown}
        className="bg-transparent outline-none w-full sm:w-3/4 md:w-2/3 lg:w-[440px]"
      />
    </div>
    {filteredItems.length > 0 && (
      <ul className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto z-10">
        {filteredItems.map((item, index) => (
          <li
            key={index}
            className={`p-2 hover:bg-gray-200 cursor-pointer ${
              selectedIndex === index ? "bg-gray-200" : ""
            }`}
            onMouseEnter={() => setSelectedIndex(index)}
            onClick={() => {
              setQuery(item);
              setFilteredItems([]);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    )}
  </div>
  
  );
};

// LocationComponent to filter and display locations
const LocationComponent = () => {
  const [locationQuery, setLocationQuery] = useState("");
  const [filteredLocations, setFilteredLocations] = useState([]);
  const [selectedLocation, setSelectedLocation] = useState("Mumbai");

  const locations = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Chennai",
    "Kolkata",
    "Hyderabad",
    "Pune",
    "Ahmedabad",
  ];

  const handleLocationSearch = (e) => {
    const value = e.target.value.toLowerCase();
    setLocationQuery(value);

    if (value === "") {
      setFilteredLocations([]);
    } else {
      const filtered = locations.filter((location) =>
        location.toLowerCase().includes(value)
      );
      setFilteredLocations(filtered);
    }
  };

  const handleLocationSelect = (location) => {
    setSelectedLocation(location);
    setFilteredLocations([]);
    setLocationQuery("");
  };

  return (
    <div className="relative flex items-center px-4 py-2 bg-[#F3F9FB] rounded-md w-56 h-12">
      <span className="text-red-500 h-5 w-5">
        <HiOutlineLocationMarker />
      </span>
      <input
        type="text"
        placeholder={selectedLocation}
        value={locationQuery}
        onChange={handleLocationSearch}
        className="bg-transparent outline-none w-full ml-2"
      />
      {filteredLocations.length > 0 && (
        <ul className="absolute top-full left-0 mt-1 w-full bg-white border rounded-md shadow-lg max-h-40 overflow-y-auto z-10">
          {filteredLocations.map((location, index) => (
            <li
              key={index}
              className="p-2 hover:bg-gray-200 cursor-pointer"
              onClick={() => handleLocationSelect(location)}
            >
              {location}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

// Main SearchBar component
const SearchBar = () => {
  return (
    <div className="flex justify-center items-center">
      <nav className="flex items-center h-20 w-full justify-center space-x-3 bg-white border">
        <div className="flex items-center">
          <a href="/" className="cursor-pointer">
            <Logo className="w-30 h-10" />
          </a>
        </div>

        <div className="flex items-center space-x-3 w-[721px] h-12">
          {/* Integrate the LocationComponent here */}
          <LocationComponent />

          {/* Integrate the SearchComponent here */}
          <SearchComponent />
        </div>

        <div className="flex items-center p-2">
        <button className="flex items-center justify-center w-full max-w-[300px] h-12 rounded-md bg-red-600 p-2 md:p-4">
  <div className="flex items-center justify-center h-6 w-6 text-white mr-2">
    <RxPerson />
  </div>
  <p className="text-white font-bold text-sm md:text-base">Sign Up/Sign In</p>
</button>

</div>

      </nav>
    </div>
  );
};

export default SearchBar;
// hello
