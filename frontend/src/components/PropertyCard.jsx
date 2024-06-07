import React from "react";
import { FaWifi } from "react-icons/fa";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { GiBabyBottle } from "react-icons/gi";
import { IoLocationOutline } from "react-icons/io5";

export default function PropertyCard(props) {
  return (
    <div className="w-1/3 border-2 border-gray-300  shadow-md rounded-lg mx-auto p-2">
      <div className="w-full flex flex-row justify-center">
        <div className="p-2 w-1/2">
          <img
            className="rounded-lg"
            src={props.img}
            alt="Error Loading img"
          />
        </div>
        <div className="w-1/2 p-2">
          <h1 className="text-xl font-medium">{props.name}</h1>
          <p>{props.p1}</p>
          <p>{props.p2}</p>
          <p>{props.p3}</p>
        </div>
      </div>

      <div className="mx-auto p-2 border-t-2 w-11/12 border-t-gray-300">
        <div className="flex flex-row justify-start gap-x-1">
          <FaWifi className="size-4 mt-1"/>
          <p className="w-10/12 ">Free high Speed Internet (Wifi)</p>
        </div>
        <div className="flex flex-row justify-start gap-x-1">
          <MdOutlineFreeBreakfast className="size-4 mt-1"/>
          <p className="w-10/12 ">Breakfast available</p>
        </div>
        <div className="flex flex-row justify-start gap-x-1">
          <GiBabyBottle className="size-4 mt-1"/>
          <p className="w-10/12 ">Babysitting</p>
        </div>
        <div className="flex flex-row justify-start gap-x-1">
          <IoLocationOutline className="size-4 mt-1"/>
          <p className="w-full ">
            charming hotel boasting affiliation with sister properties for added
            amenities. Spacious duplex rooms ideal for families. Complimentary
            snacks and drinks available throughtout the day. Prime location
            near...
          </p>
        </div>
      </div>
    </div>
  );
}
