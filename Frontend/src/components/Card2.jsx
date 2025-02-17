import React from "react";
const Card2 = ({ image, title, description }) => {
    return (
      <div className="flex bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition-shadow">
        <img src={image} alt={title} className="w-24 h-24 rounded-lg object-cover" />
        <div className="ml-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
        </div>
      </div>
    );
  };
export default Card2;