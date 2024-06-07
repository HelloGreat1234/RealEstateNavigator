import React from "react";

export default function Form() {
  return (
    <div className="flex py-6 justify-center items-center h-screen bg-gray-100">
      <div className="flex flex-col justify-center shadow-md border-2 rounded-md p-6 bg-white mx-auto w-3/4">
        <div className="w-full">
          <h1 className="text-center text-xl font-bold pb-6 text-indigo-600">
            Let's list the property
          </h1>
        </div>
        <div>
          <form
            className="grid grid-cols-2 gap-3 justify-center items-center gap-y-5"
            action="/xyx"
            method="POST"
          >
            <input
              className="col-span-2 border-2 border-black p-3 rounded-md"
              type="text"
              name="flat"
              //   value=""
              placeholder="Flat / House no. / Floor / Building"
            />
            <input
              className="col-span-2 border-2 border-black p-3 rounded-md"
              type="text"
              name="landmark"
              //   value=""
              placeholder="Nearby Landmark"
            />
            <input
              className=" border-2 border-black p-3 rounded-md"
              type="text"
              name="area"
              //   value=""
              placeholder="Area / Sector / Locality"
            />
            <input
              className=" border-2 border-black p-3 rounded-md"
              type="text"
              name="city"
              //   value=""
              placeholder="City"
            />
            <input
              className=" border-2 border-black p-3 rounded-md"
              type="text"
              name="state"
              //   value=""
              placeholder="State"
            />
            <input
              className=" border-2 border-black p-3 rounded-md"
              type="number"
              name="pincode"
              //   value=""
              placeholder="Pincode"
            />
            <input
              className=" border-2 border-black p-3 rounded-md"
              type="number"
              name="size"
              //   value=""
              placeholder="Size of Property"
            />
            <input
              className=" border-2 border-black p-3 rounded-md"
              type="number"
              name="price"
              //   value=""
              placeholder="Price of Parcel per acre"
            />
            <button
              className="col-span-2 w-1/5 border-2 text-lg font-semibold text-white bg-indigo-600 hover:bg-indigo-500 rounded-md p-2 mx-auto focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
              type="submit"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
