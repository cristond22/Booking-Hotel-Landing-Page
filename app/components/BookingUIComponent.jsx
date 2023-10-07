import React from "react";

const BookingUIComponent = () => {
  return (
    <>
      <div className="w-[22.5rem] h-[23rem] bg-white rounded-2xl p-7 text-black space-y-4">
        <h1 className="text-2xl font-semibold">Booking Hotel</h1>
        <h2 className="text-lg text-pgray">
          Let`'`s start your place to stay.
        </h2>

        <label className="block text-sm font-medium">Location</label>
        <input
          type="text"
          placeholder="Enter your location, city, etc..."
          className="input"
        />

        <div className="flex justify-between ">
          <div className="flex-1 mr-2">
            <label className="block text-sm font-medium ">Checkin</label>
            <input
              type="text"
              className="input"
              placeholder="14 May 2023"
            />
          </div>
          <div className="flex-1 ml-2">
            <label className="block text-sm font-medium ">Checkout</label>
            <input
              type="text"
              className="input"
              placeholder="20 May 2023"
            />
          </div>
        </div>

        <button className="button w-full p-3">Discover Place</button>
      </div>
    </>
  );
};

export default BookingUIComponent;
