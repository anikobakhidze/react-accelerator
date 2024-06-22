"use client";
import React, { useState } from "react";
import Heading from "../sharedComponents/UI/Heading";
import BackButton from "../sharedComponents/UI/BackBtn";
import { useI18n } from "@/locales/client";
import { createCheckout } from "@/api";

function CheckoutDetails({
  userId,
  products,
  userEmail,
}: {
  userId: string;
  products: ICartProduct[];
  userEmail: string;
}) {
  const t = useI18n();
  const [address, setAddress] = useState("");
  const [updateMessage, setUpdateMessage] = useState("");
  const [addressError, setAddressError] = useState("");

  const handleAddressChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setAddress(e.target.value);
    setUpdateMessage("");
    if (e.target.value) {
      setAddressError("");
    }
  };
  const buy = async (products: ICartProduct[], userId: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/buy`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ products, userId, userEmail }),
        }
      );
      const data = await response.json();
      if (data.url) {
        window.location.href = data.url;
      }
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!address) {
      setAddressError("Address is required");
      return;
    }
    try {
      await createCheckout(userId, products, address);
      await buy(products, userId);
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
    <div className="flex-1 flex">
      <div className="bg-light-bg-color dark:bg-black w-full max-w-4xl mt-24 sm:mt-24 md:mt-24 mx-auto  lg:my-44 p-4 md:p-8 rounded-lg shadow-lg ">
        <Heading heading={t("checkoutPage.orders")} />

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
              className="grid grid-cols-4 gap-4 items-center dark:bg-gray-color bg-white p-3 md:p-4 rounded-lg shadow-md transition duration-300 ease-in-out hover:shadow-xl"
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
            } focus:ring-2 focus:ring-btn-primary-color outline-none dark:bg-gray-color dark:text-white`}
          />
          {addressError && (
            <span className="text-xs md:text-sm lg:text-base text-dark-cream-color">
              {addressError}
            </span>
          )}
          <button
            type="submit"
            className="relative bg-black dark:bg-white dark:text-black py-2 px-6  text-white overflow-hidden group"
          >
            <span className="relative z-10 w-full h-full flex justify-center items-center">
              {t("checkoutPage.buy")}
            </span>
            <span className="absolute left-0 bottom-0 w-full h-full bg-btn-primary-color transition-transform duration-300 transform scale-x-0 group-hover:scale-x-100 origin-left"></span>
          </button>
          <BackButton />
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
    </div>
  );
}

export default CheckoutDetails;
