import React from "react";
import { useParams } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { RxSpaceEvenlyVertically } from "react-icons/rx";
import { BiBed, BiLaptop, BiDrink } from "react-icons/bi";
import { SlCalender } from "react-icons/sl";
import { MdBathroom } from "react-icons/md";
import ImageGallery from "react-image-gallery";
import { useGetRoomQuery } from "../../../../features/rooms/roomApi";
import Loader from "../../../../component/Loader/Loader";
import Checkout from "../../../../component/Checkout/Checkout";

const Details = () => {
  const { roomId } = useParams();
  const { data: room, isLoading, isError, error } = useGetRoomQuery(roomId);
  const { name, images, guests, price, weekPrice, desc } = room?.data || {};

  const Images = images?.map((item) => ({
    original: `${process.env.REACT_APP_IMAGE_URL}/images/${item?.original}`,
    thumbnail: `${process.env.REACT_APP_IMAGE_URL}/images/${item?.thumbnail}`,
    _id: item?._id,
  }));

  if (isLoading) return <Loader type="Details" />;
  if (isError) return <div className="text-red-500 p-4">{error}</div>;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Header Section */}
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-3">{name}</h1>
        <div className="flex items-center space-x-2 text-gray-500">
          <span className="font-semibold">HOTEL GREENLAND</span>
          <span>•</span>
          <span>{guests} guests</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Image Gallery Section */}
        <div className="lg:col-span-2 rounded-xl overflow-hidden shadow-lg">
          <ImageGallery
            items={Images}
            showPlayButton={false}
            showFullscreenButton={true}
            showBullets={true}
            showThumbnails={true}
            className="rounded-xl overflow-hidden"
          />
        </div>

        {/* Booking Section */}
        <div className="lg:col-span-1">
          <div className="sticky top-8">
            <Checkout
              noImage
              btnText="Book Now"
              route={`/booking/${roomId}`}
              price={price}
              guests={guests}
              className="bg-white rounded-xl shadow-lg p-6"
            />
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <BsPersonCircle className="w-12 h-12 text-blue-600 mb-4" />
          <p className="text-gray-900 font-medium">{guests} Guests</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <RxSpaceEvenlyVertically className="w-12 h-12 text-blue-600 mb-4" />
          <p className="text-gray-900 font-medium">15 Ft</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <BiBed className="w-12 h-12 text-blue-600 mb-4" />
          <p className="text-gray-900 font-medium">${price} / Night</p>
        </div>
        <div className="bg-gray-50 rounded-xl p-6 flex flex-col items-center text-center transition-transform hover:scale-105">
          <SlCalender className="w-12 h-12 text-blue-600 mb-4" />
          <p className="text-gray-900 font-medium">${weekPrice} / Week</p>
        </div>
      </div>

      {/* Description Section */}
      <div className="mt-16">
        <p className="text-gray-600 leading-relaxed text-lg">{desc}</p>
      </div>

      {/* Room Services Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Room Services</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
            <BiLaptop className="w-8 h-8 text-blue-600" />
            <span className="text-gray-700 font-medium">Television</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
            <MdBathroom className="w-8 h-8 text-blue-600" />
            <span className="text-gray-700 font-medium">Private Bathroom</span>
          </div>
          <div className="flex items-center space-x-4 bg-gray-50 p-4 rounded-lg">
            <BiDrink className="w-8 h-8 text-blue-600" />
            <span className="text-gray-700 font-medium">Welcome Drinks</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
