"use client";
import { createMessageAction } from "@/actions";
import { useI18n } from "../../locales/client";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
function ContactUsForm() {
  const t = useI18n();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<FormErrors>({});
  const [updateMessage, setUpdateMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const validateForm = () => {
    const newErrors: FormErrors = {};

    if (!name) {
      newErrors.name = t("contactPage.nameRequired");
    }

    if (!phone) {
      newErrors.phone = t("contactPage.phoneRequired");
    } else if (!/^\d+$/.test(phone.toString())) {
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

  const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
    if (errors.name) {
      setErrors({ ...errors, name: "" });
    }
    if (updateMessage) {
      setUpdateMessage("");
    }
  };

  const handleChangePhone = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(e.target.value);
    if (errors.phone) {
      setErrors({ ...errors, phone: "" });
    }
    if (updateMessage) {
      setUpdateMessage("");
    }
  };

  const handleChangeEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
    if (errors.email) {
      setErrors({ ...errors, email: "" });
    }
    if (updateMessage) {
      setUpdateMessage("");
    }
  };

  const handleChangeSubject = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSubject(e.target.value);
    if (errors.subject) {
      setErrors({ ...errors, subject: "" });
    }
    if (updateMessage) {
      setUpdateMessage("");
    }
  };

  const handleChangeMessage = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.target.value);
    if (errors.message) {
      setErrors({ ...errors, message: "" });
    }
    if (updateMessage) {
      setUpdateMessage("");
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("phone", phone.toString());
      formData.append("email", email);
      formData.append("subject", subject);
      formData.append("message", message);
      setLoading(true);
      try {
        const response = (await createMessageAction(formData)) as any;

        setUpdateMessage(response);
        setName("");
        setPhone("");
        setEmail("");
        setSubject("");
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
        setUpdateMessage("Ups... Unable to send message");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <form
      className="flex flex-col gap-3 max-w-container items-center justify-center w-4/5 xl:w-[1100px] lg:w-800 px-10"
      onSubmit={handleSubmit}
    >
      <div className="flex lg:flex-row flex-col justify-between lg:mt-8 w-full gap-3 lg:gap-0">
        <div className="lg:w-47% w-full lg:mr-2">
          <input
            type="text"
            placeholder={t("contactPage.name")}
            value={name}
            onChange={handleChangeName}
            className="w-full h-10 dark:placeholder:text-white outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color dark:text-white dark:bg-gray-color "
          />
          {errors.name && (
            <p className="text-dark-cream-color font-semibold  text-sm mt-1">
              {errors.name}
            </p>
          )}
        </div>
        <div className="lg:w-47% w-full">
          <input
            type="number"
            placeholder={t("contactPage.phone")}
            value={phone}
            onChange={handleChangePhone}
            className="dark:placeholder:text-white appearance-none dark:bg-gray-color  dark:text-white w-full h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color no-spinner"
            onPaste={(e) => {
              const paste = e.clipboardData.getData("text");
              if (!/^\d+$/.test(paste)) {
                e.preventDefault();
              }
            }}
          />
          {errors.phone && (
            <p className="text-dark-cream-color font-semibold  text-sm mt-1">
              {errors.phone}
            </p>
          )}
        </div>
      </div>
      <div className="w-full">
        <input
          type="email"
          placeholder={t("contactPage.email")}
          value={email}
          onChange={handleChangeEmail}
          className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
        />
        {errors.email && (
          <p className="text-dark-cream-color font-semibold text-sm mt-1">
            {errors.email}
          </p>
        )}
      </div>
      <div className="w-full">
        <input
          type="text"
          placeholder={t("contactPage.subject")}
          value={subject}
          onChange={handleChangeSubject}
          className="w-full dark:placeholder:text-white dark:bg-gray-color dark:text-white h-10 outline-none pl-3 placeholder:text-btn-primary-color rounded-xl bg-light-bg-color"
        />
        {errors.subject && (
          <p className="text-dark-cream-color font-semibold  text-sm mt-1 ">
            {errors.subject}
          </p>
        )}
      </div>
      <div className="w-full">
        <textarea
          placeholder={t("contactPage.message")}
          value={message}
          onChange={handleChangeMessage}
          className="w-full dark:bg-gray-color dark:placeholder:text-white dark:text-white pt-2  h-24 outline-none pl-3 pt- placeholder:text-btn-primary-color rounded-xl bg-light-bg-color resize-none"
        />
        {errors.message && (
          <p className="text-dark-cream-color font-semibold text-sm mt-1 mb-3">
            {errors.message}
          </p>
        )}
      </div>
      <button className="w-30 h-8 text-sm px-2 lg:text-base rounded-sm lg:h-10 lg:w-48 bg-btn-primary-color text-white hover:opacity-50">
        {loading ? <PulseLoader /> : t("contactPage.contactUs")}
      </button>
      {updateMessage && (
        <div className="animate-fadeInUp text-purple-color text-base lg:text-xl font-bold ">
          {updateMessage}
        </div>
      )}
    </form>
  );
}

export default ContactUsForm;
