"use client";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { useEffect } from "react";
import { FaCamera } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

export default function AvatarUpload({ userImage }: { userImage: string }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useUser();

  useEffect(() => {
    const updateUser = async () => {
      if (!blob || !user) return;
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload-user-image`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              blobUrl: blob.url,
              sub: user.sub,
            }),
          }
        );

        if (!response.ok) {
          console.error("Failed to update user picture");
          setError("Failed to update user picture");
        } else {
          console.log("User picture updated successfully");
          setError(null);
        }
      } catch (error) {
        console.error("Error updating user picture:", error);
        setError("Error updating user picture");
      }
    };

    updateUser();
  }, [blob, user]);

  return (
    <>
      <div className="relative rounded-full ">
        {blob ? (
          <Image
            src={blob.url}
            priority={true}
            alt="Person-logo"
            className="h-auto "
            width={150}
            height={150}
          />
        ) : (
          <Image
            src={userImage}
            priority={true}
            alt="Person-logo"
            className="h-auto"
            width={150}
            height={150}
          />
        )}
        <p>Upload Image</p>
        <div className="absolute right-1 bottom-1">
          <FaCamera fontSize={20} />
        </div>
        <input
          className="text-[10px] hidden"
          name="file"
          ref={inputFileRef}
          type="file"
          id="files"
          required
        />
        <label htmlFor="files" className="absolute right-0 bottom-0 opacity-0">
          text
        </label>
      </div>
      <form
        className="flex flex-col justify-center items-center gap-3"
        onSubmit={async (event) => {
          event.preventDefault();

          if (!inputFileRef.current?.files) {
            setError("No file selected");
            return;
          }

          const file = inputFileRef.current.files[0];
          console.log(file.name);
          setLoading(true);
          setError(null);
          try {
            const response = await fetch(
              `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload?filename=${file.name}`,
              {
                method: "POST",
                body: file,
              }
            );

            if (!response.ok) {
              throw new Error("Failed to upload file");
            }

            const newBlob = (await response.json()) as PutBlobResult;
            setBlob(newBlob);
          } catch (error) {
            console.error("Error uploading file:", error);
            setError("Error uploading file");
          } finally {
            setLoading(false);
          }
        }}
      >
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <button
          className="bg-blue-500 w-32 text-white text-[12px] py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75"
          type="submit"
        >
          {loading ? (
            <ImSpinner9 fontSize={20} className="animate-spin" />
          ) : (
            "Upload"
          )}
        </button>
      </form>
    </>
  );
}
