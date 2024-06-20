"use client";
import React, { useState } from "react";
import Heading from "../sharedComponents/UI/Heading";
import BackButton from "../sharedComponents/UI/BackBtn";
import { useI18n } from "@/locales/client";

function CheckoutDetails({
  userId,
  products,
}: {
  userId: string;
  products: ICartProduct[];
}) {
  const t = useI18n();
  const [address, setAddress] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(e.target.value);
    if (e.target.value) {
      setAddressError("");
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!address) {
      setAddressError("Address is required");
      return;
    }
    try {
      // Implement your submit logic here, such as sending the address to your backend
      setUpdateMessage("Checkout completed successfully");
    } catch (error) {
      console.error("Failed to complete checkout", error);
      setUpdateMessage("Failed to complete checkout");
    }
  };

  const productPrice = products.map(
    (product: ICartProduct) =>
      Number(product.price) * Number(product.selectedQuantity)
  );
  const total = productPrice.reduce(
    (price: number, sum: number) => price + sum,
    0
  );
  console.log(products, userId);

  return (
    <div className="bg-light-bg-color w-full max-w-4xl mx-auto my-12 lg:my-24 p-4 md:p-8 rounded-lg shadow-lg">
      <Heading heading={t("checkoutPage.title")} />
      <BackButton />
      <h2 className="text-base md:text-lg lg:text-2xl font-bold mt-6 mb-4 text-center">
        {t("checkoutPage.orders")}
      </h2>
      <div className="grid grid-cols-4 gap-4 text-xs md:text-sm lg:text-base font-semibold mb-4">
        <span>{t("checkoutPage.title")}</span>
        <span>{t("checkoutPage.quantity")}</span>
        <span>{t("checkoutPage.price")}</span>
        <span>{t("checkoutPage.totalPrice")}</span>
      </div>
      <ul className="space-y-4">
        {products.map((item) => (
          <li
            key={item.id}
            className="grid grid-cols-4 gap-4 items-center bg-white p-3 md:p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl"
          >
            <span className="font-medium text-xs md:text-sm lg:text-base">
              {item.title}
            </span>
            <span className="text-xs md:text-sm lg:text-base">
              {item.selectedQuantity}
            </span>
            <span className="text-xs md:text-sm lg:text-base">
              ${item.price}
            </span>
            <span className="text-xs md:text-sm lg:text-base">
              ${(item.price * item.selectedQuantity).toFixed(2)}
            </span>
          </li>
        ))}
      </ul>
      <div className="text-base md:text-lg lg:text-xl font-semibold mb-6 text-right">
        Total: ${total.toFixed(2)}
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 md:gap-6 w-full"
      >
        <label
          htmlFor="address"
          className="text-base md:text-lg lg:text-xl font-semibold"
        >
          {t("checkoutPage.addressLabel")}
        </label>
        <textarea
          id="address"
          value={address}
          onChange={handleAddressChange}
          placeholder={t("checkoutPage.addressPlaceholder")}
          className={`h-16 md:h-20 lg:h-24 text-xs md:text-sm lg:text-base p-3 rounded-xl border ${
            addressError ? "border-dark-cream-color" : "border-gray-300"
          } focus:ring-2 focus:ring-btn-primary-color outline-none dark:bg-gray-800 dark:text-white`}
        />
        {addressError && (
          <span className="text-xs md:text-sm lg:text-base text-dark-cream-color">
            {addressError}
          </span>
        )}
        <button
          type="submit"
          className="bg-btn-primary-color cursor-pointer text-white h-8 md:h-10 lg:h-12 rounded-full text-xs md:text-sm lg:text-base hover:bg-black dark:hover:bg-white dark:hover:text-black transition duration-300 ease-in-out"
        >
          {t("checkoutPage.submitButton")}
        </button>
      </form>
      {updateMessage && (
        <div
          className={`text-sm pt-4 text-center font-bold ${
            updateMessage.includes("Failed")
              ? "text-dark-cream-color"
              : "text-green-color"
          } animate-fadeInUp`}
        >
          {updateMessage}
        </div>
      )}
    </div>
  );
}

export default CheckoutDetails;
