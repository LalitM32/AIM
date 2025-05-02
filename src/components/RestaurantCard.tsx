import React from 'react';

interface RestaurantCardProps {
  name: string;
  description: string;
  address: string;
  phone: string;
  website: string;
  rating: number;
  image: string;
}

const RestaurantCard: React.FC<RestaurantCardProps> = ({
  name,
  description,
  address,
  phone,
  website,
  rating,
  image,
}) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="font-bold text-xl">{name} <span className="text-yellow-500">⭐ {rating}</span></h2>
        <p className="text-gray-600">{description}</p>
        <p className="text-gray-500">{address}</p>
        <p className="text-gray-500">{phone}</p>
        <a href={website} className="text-blue-500 hover:underline">Explore Website</a>
      </div>
    </div>
  );
};

export default RestaurantCard; 