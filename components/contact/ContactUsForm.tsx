"use client";
import { createMessageAction } from "@/actions";
import { useI18n } from "../../locales/client";
import { useState } from "react";

function ContactUsForm() {
  const t = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [updateMessage, setUpdateMessage] = useState("");
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!name) {
      newErrors.name = t("contactPage.nameRequired");
    }

    if (!phone) {
      newErrors.phone = t("contactPage.phoneRequired");
    } else if (!/^\d+$/.test(phone)) {
      newErrors.phone = t("contactPage.phoneInvalid");
    }

    if (!email) {
      newErrors.email = t("contactPage.emailRequired");
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = t("contactPage.emailInvalid");
    }

    if (!subject) {
      newErrors.subject = t("contactPage.subjectRequired");
    }

    if (!message) {
      newErrors.message = t("contactPage.messageRequired");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted:", { name, phone, email, subject, message });
    }
    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("email", email);
    formData.append("subject", subject);
    formData.append("message", message);
    try {
      await createMessageAction(formData);
      setUpdateMessage("Message Sent");
    } catch (error) {
      setUpdateMessage("Ups... Unable to send message");
    }
  };

  return (
    <form
      className="flex flex-col gap-3 max-w-container items-center justify-center w-800"
      onSubmit={handleSubmit}
    >
      <div className="flex justify-between mt-8 w-full">
        <div className="w-48%">
          <input
            type="text"
            placeholder={t("contactPage.name")}
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div className="w-48%">
          <input
            type="number"
            placeholder={t("contactPage.phone")}
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
            onKeyPress={(e) => {
              if (!/[0-9]/.test(e.key)) {
                e.preventDefault();
              }
            }}
            onPaste={(e) => {
              const paste = e.clipboardData.getData("text");
              if (!/^\d+$/.test(paste)) {
                e.preventDefault();
              }
            }}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
          )}
        </div>
      </div>
      <div className="w-full">
        <input
          type="email"
          placeholder={t("contactPage.email")}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mt-1">{errors.email}</p>
        )}
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder={t("contactPage.subject")}
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
          className="w-full h-10 outline-none pl-3 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc]"
        />
        {errors.subject && (
          <p className="text-red-500 text-sm mt-1">{errors.subject}</p>
        )}
      </div>
      <div className="w-full">
        <textarea
          placeholder={t("contactPage.message")}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full h-24 outline-none pl-3 mb-6 placeholder:text-[#5f8d8f] rounded-xl bg-[#c7d8dc] resize-none"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mt-1">{errors.message}</p>
        )}
      </div>
      <button className="h-10 w-48 rounded-xl bg-[#5f8d8f] text-white hover:bg-[#9ec7d0]">
        {t("contactPage.contactUs")}
      </button>
      {updateMessage && <div>{updateMessage}</div>}
    </form>
  );
}

export default ContactUsForm;
