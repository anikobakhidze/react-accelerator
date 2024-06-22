"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaRegCircleUser } from "react-icons/fa6";
import Image from "next/image";
import { useI18n } from "@/locales/client";
import { useState, FormEvent } from "react";

function ReviewsForm({
  submitForm,
  id,
}: {
  submitForm: (formData: FormData) => Promise<void>;
  id: number;
}) {
  const { user } = useUser();
  const userName = user?.nickname;
  const userImage = user?.picture;
  const [writeReview, setWriteReview] = useState("");
  const t = useI18n();

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget as HTMLFormElement);
    await submitForm(formData);
    setWriteReview("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex items-center gap-4 mb-4">
        {userName && userImage ? (
          <Image
            src={userImage}
            alt={userName}
            width={50}
            height={50}
            className="w-12 h-12 rounded-full object-cover"
          />
        ) : (
          <FaRegCircleUser className="w-12 h-12 text-btn-primary-color" />
        )}
        <input
          type="text"
          placeholder="Name"
          name="name"
          defaultValue={userName || ""}
          readOnly
          className="bg-transparent text-sm block font-bold  w-full p-2.5 outline-none"
        />
      </div>
      <textarea
        placeholder={t("writeReview")}
        name="text"
        value={writeReview}
        onChange={(e) => setWriteReview(e.target.value)}
        className="dark:border border-b-2 bg-transparent border-btn-primary-color dark:text-white dark:border-gray-300 text-gray-900 text-sm md:text-base placeholder:font-bold dark:rounded-lg block w-full p-2.5 outline-none mb-4"
      ></textarea>
      <input type="hidden" value={id} name="id" />
      <input type="hidden" name="image" value={userImage || ""} />
      <button
        type="submit"
        className="bg-transparent dark:text-white text-btn-primary-color border-btn-primary-color font-semibold dark:hover:text-white py-2 px-4 border dark:border-white rounded mt-5 hover:bg-btn-primary-color hover:text-white"
      >
        {t("send")}
      </button>
    </form>
  );
}

export default ReviewsForm;
