import React from "react";
import contactData from "../constants/contactData";
import ContactCard from "../components/ContactCard";
import SocialIcons from "../components/SocialIcons";

function Contact() {
  return (
    <section className="flex flex-col overflow-auto items-center ">
      <div className="flex flex-col justify-center items-center h-80 w-full font-bold bg-[#c7d8dc] pb-10">
        <h2 className="pt-8 text-3xl ">Contact Us</h2>
        <SocialIcons />
      </div>
      <form className="flex flex-col gap-3 w-2/5 items-center justify-center">
        <div className="flex justify-between mt-8 w-full ">
          <input
            type="text"
            placeholder="Name"
            className="w-5/12 h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
          />
          <input
            type="text"
            placeholder="Phone"
            className="w-5/12 h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
          />
        </div>
        <input
          type="email"
          placeholder="Email"
          className="w-full h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
        />
        <textarea
          placeholder="Message"
          className="w-full h-24 outline-none pl-3 mb-6 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc] resize-x-none"
        />
        <button className="h-10 w-48 rounded-xl bg-[#5f8d8f] text-white hover:bg-[#9ec7d0]">
          Send Message
        </button>
      </form>
      <div className="w-4/5 flex justify-between mt-8">
        {contactData.map((data) => (
          <ContactCard key={data.type} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Contact;
