import React, { useState } from "react";
import { FcLike } from "react-icons/fc";
import { MdProductionQuantityLimits } from "react-icons/md";
import { IoMdPerson } from "react-icons/io";
import { FiSearch } from "react-icons/fi";

const products = [
  { id: 1, name: "Gucci duffle bag" },
  { id: 2, name: "RGB Liquid CPU Cooler" },
  { id: 3, name: "GP11 Shooter USB Gamepad" },
];

const Header = () => {
  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const searchProducts = (event) => {
    const value = event.target.value;
    setQuery(value);

    if (value.trim() === "") {
      setSearchResults([]);
      return;
    }

    // Mahsulotlarni qidirish
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setSearchResults(filtered);
  };

  return (
    <header className="w-[1300px] -ml-20 flex justify-between items-center px-8 py-4 shadow-sm bg-white">
      <div className="flex items-center gap-10">
        <h1 className="text-2xl font-bold">Exclusive</h1>
        <nav className="flex ml-80 gap-10 text-sm text-gray-700">
          <a href="#" className="hover:text-black">
            Home
          </a>
          <a href="#" className="hover:text-black">
            Contact
          </a>
          <a href="#" className="hover:text-black">
            About
          </a>
          <a href="#" className="hover:text-black">
            Sign Up
          </a>
        </nav>
      </div>

      <div className="flex items-center gap-6 relative">
        <div className="flex items-center bg-gray-100 px-3 py-2 rounded-md relative">
          <input
            type="text"
            placeholder="What are you looking for?"
            className="bg-transparent outline-none text-sm w-48"
            value={query}
            onChange={searchProducts}
          />
          <FiSearch className="text-gray-500" />

          {/* Qidiruv natijalari */}
          {searchResults.length > 0 && (
            <div className="absolute top-full left-0 mt-2 w-full bg-white shadow-lg rounded-md p-2 max-h-48 overflow-y-auto z-10">
              {searchResults.map((product) => (
                <div
                  key={product.id}
                  className="py-1 px-2 hover:bg-gray-100 cursor-pointer rounded"
                >
                  {product.name}
                </div>
              ))}
            </div>
          )}
        </div>

        <div className="relative">
          <FcLike size={20} />
          <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1">
            4
          </span>
        </div>
        <MdProductionQuantityLimits size={22} />
        <IoMdPerson size={22} />
      </div>
    </header>
  );
};

export default Header;
