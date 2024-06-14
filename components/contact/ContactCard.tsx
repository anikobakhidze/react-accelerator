import React from "react";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FiMapPin } from "react-icons/fi";
function ContactCard({ data: { type, title, paragraph, href } }: IContactCard) {
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
    <div className="w-80 rounded-xl bg-light-bg-color p-8 dark:bg-gray-color dark:bg-opacity-50">
      <h3 className="flex items-center justify-center pb-6 font-bold  text-lg gap-3 hover:text-btn-primary-color transition-all duration-300">
        {href ? (
          <a href={href} className="flex items-center gap-3">
            {image} {title}
          </a>
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
