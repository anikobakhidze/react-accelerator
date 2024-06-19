"use client";
import { createRatingAction } from "@/actions";
import React, { useState, useEffect } from "react";
import { getRating, checkUserRating } from "@/api";
import { useRouter } from "next/navigation";
export default function Rating({
  product_id,
  user_sub,
}: {
  product_id: number;
  user_sub: string;
}) {
  const [rating, setRating] = useState<number | null>(null);
  const [hover, setHover] = useState<number | null>(null);
  const [hasRated, setHasRated] = useState<boolean>(false);
  const [productRating, setProductRating] = useState<number | null | void>(
    null
  );
  const totalStars = 5;
  const router = useRouter();
  const handleClick = async (e: React.MouseEvent<HTMLInputElement>) => {
    const currentRating = parseInt(e.currentTarget.value, 10);
    setRating(currentRating);
    setHasRated(true);
    try {
      await createRatingAction(currentRating, product_id, user_sub);
      const rated = await getRating(product_id);
      setProductRating(rated);
      router.refresh();
    } catch (error) {
      console.error("Error updating rating:", error);
    }
  };
  useEffect(() => {
    async function fetchRating() {
      const currentRating = await getRating(product_id);
      setProductRating(currentRating);
      const userHasRated = await checkUserRating(product_id, user_sub);
      setHasRated(userHasRated);
    }
    fetchRating();
  }, [product_id, user_sub]);

  return (
    <div>
      {hasRated ? (
        <div className="mb-4">
          <p className="font-semibold">
            Rating:<span className="text-yellow-400"> &#9733;</span>{" "}
            {productRating ?? "Loading..."}
          </p>
        </div>
      ) : (
        <div>
          {[...Array(totalStars)].map((_, index) => {
            const currentRating = index + 1;
            return (
              <label key={index} className="inline-block">
                <input
                  type="radio"
                  name="rating"
                  value={currentRating}
                  onClick={handleClick}
                  className="hidden"
                />
                <span
                  className={`cursor-pointer text-2xl m-1 ${
                    currentRating <= (hover ?? rating ?? 0)
                      ? "text-yellow-400"
                      : "text-gray-300"
                  }`}
                  onMouseEnter={() => setHover(currentRating)}
                  onMouseLeave={() => setHover(null)}
                >
                  &#9733;
                </span>
              </label>
            );
          })}
        </div>
      )}
    </div>
  );
}
