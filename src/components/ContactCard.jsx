import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
function ContactCard({ data: { type, title, paragraph, href } }) {
  let image;
  switch (type) {
    case "mobile":
      image = <AiOutlinePhone />;
      break;
    case "email":
      image = <HiOutlineMailOpen />;
      break;
    case "address":
      image = <FiMapPin />;
      break;
    default:
      image = null;
  }
  return (
    <div className="w-80 rounded-xl odd:bg-medium-green even:bg-light-green p-8">
      <h3 className="flex items-center justify-center pb-6 font-bold  text-lg gap-3">
        {href ? (
          <Link to={href} className="flex items-center gap-3">
            {image} {title}
          </Link>
        ) : (
          <>
            {image}
            {title}
          </>
        )}
      </h3>
      <p className="text-justify">{paragraph}</p>
    </div>
  );
}

export default ContactCard;
