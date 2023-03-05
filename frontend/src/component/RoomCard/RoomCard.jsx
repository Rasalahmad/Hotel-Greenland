import React from "react";
import { Link } from "react-router-dom";

const RoomCard = () => {
  const desc =
    "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown";
  return (
    <>
      <div className="lg:grid grid-cols-3 gap-2 lg:gap-3 px-28">
        {/*Single Room Card  */}
        <div className="shadow-xl shadow-indigo-200 lg:my-20 bg-white rounded-lg">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold pt-10 pb-6">Single Room</h3>
            <p className="mb-4">
              <span className="bg-black text-white p-2">
                <span className="text-xl font-bold">
                  From <span className="text-3xl">৳ 1200</span>
                </span>
                / night
              </span>
            </p>
            <p>{desc.slice(0, 300)}...</p>
            <Link to="/singlaRoom">
              <button className="text-center rounded-tr-md rounded-bl-md text-xl hover:bg-slate-800 mt-10 cursor-pointer font-bold bg-black py-2 px-4 text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
        {/* Double Room Card */}
        <div className="shadow-xl shadow-indigo-200 my-10 bg-slate-300 rounded-lg">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold pt-10 pb-6">
              Family Special Room
            </h3>
            <p className="mb-4">
              <span className="bg-black text-white p-2">
                <span className="text-xl font-bold">
                  From <span className="text-3xl">৳ 1600</span>
                </span>
                / night
              </span>
            </p>
            <p>{desc.slice(0, 300)}...</p>

            <Link to="/familySpecialRoom">
              <button className="text-center rounded-tr-md rounded-bl-md text-xl hover:bg-slate-800 mt-10 cursor-pointer font-bold bg-black py-2 px-4 text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
        {/*Family Special Room Card  */}
        <div className="shadow-xl shadow-indigo-200 lg:my-20  bg-white rounded-lg">
          <div className="p-6 text-center">
            <h3 className="text-2xl font-bold pt-10 pb-6">Double Room</h3>
            <p className="mb-4">
              <span className="bg-black text-white p-2">
                <span className="text-xl font-bold">
                  From <span className="text-3xl">৳ 1800</span>
                </span>
                / night
              </span>
            </p>
            <p>{desc.slice(0, 300)}...</p>

            <Link to="/doubleRoom">
              <button className="text-center rounded-tr-md rounded-bl-md text-xl hover:bg-slate-800 mt-10 cursor-pointer font-bold bg-black py-2 px-4 text-white">
                See Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};
export default RoomCard;
