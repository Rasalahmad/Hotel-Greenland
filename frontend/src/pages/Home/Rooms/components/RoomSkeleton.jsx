import React from "react";

const RoomCardSkeleton = () => {
  return (
    <div className="w-96 bg-white rounded-lg shadow-md overflow-hidden animate-pulse">
      <div className="h-56 bg-gray-300"></div>
      <div className="p-4">
        <div className="h-6 bg-gray-300 rounded w-3/4 mb-4"></div>
        <div className="flex gap-4 mb-4">
          <div className="h-4 bg-gray-300 rounded w-1/3"></div>
          <div className="h-4 bg-gray-300 rounded w-1/4"></div>
        </div>
        <div className="h-4 bg-gray-300 rounded w-full mb-4"></div>
        <div className="flex justify-between">
          <div className="h-8 bg-gray-300 rounded w-24"></div>
          <div className="h-8 bg-gray-300 rounded w-20"></div>
        </div>
      </div>
    </div>
  );
};

export default RoomCardSkeleton;
