import React from "react";
import contactData from "../../data/contactData";
import ContactUsForm from "../../components/ContactUsForm";
import ContactCard from "../../components/ContactCard";
import SocialIcons from "../../components/SocialIcons";

function Contact() {
  return (
    <section className="flex flex-col overflow-auto items-center ">
      <div className="flex flex-col justify-center items-center h-80 w-full font-bold bg-[#c7d8dc] pb-10">
        <h2 className="pt-8 text-3xl ">Contact Us</h2>
        <SocialIcons />
      </div>
      <ContactUsForm />
      <div className="flex justify-between mt-8 w-1100 mb-10">
        {contactData.map((data) => (
          <ContactCard key={data.type} data={data} />
        ))}
      </div>
    </section>
  );
}

export default Contact;
