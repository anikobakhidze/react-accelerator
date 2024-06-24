"use client";
import type { PutBlobResult } from "@vercel/blob";
import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { useUser } from "@auth0/nextjs-auth0/client";
import { FaCamera } from "react-icons/fa";
import { ImSpinner9 } from "react-icons/im";

export default function AvatarUpload({ userImage }: { userImage: string }) {
  const inputFileRef = useRef<HTMLInputElement>(null);
  const [blob, setBlob] = useState<PutBlobResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const [currentImage, setCurrentImage] = useState(userImage);
  const { user } = useUser();

  useEffect(() => {
    const updateUser = async () => {
      if (!blob || !user) return;
      try {
        const response = await fetch(`/api/upload-user-image`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            blobUrl: blob.url,
            sub: user.sub,
          }),
        });

        if (!response.ok) {
          setError("Failed to update user picture");
        } else {
          setError(null);
          setSuccess("User picture updated successfully");
        }
      } catch (error) {
        setError("Error updating user picture");
      }
    };

    updateUser();
  }, [blob, user]);

  useEffect(() => {
    setCurrentImage(userImage);
  }, [userImage]);

  const handleFileChange = async () => {
    setError(null);
    setSuccess(null);

    if (!inputFileRef.current?.files) {
      setError("No file selected");
      return;
    }

    const file = inputFileRef.current.files[0];
    setLoading(true);
    try {
      const response = await fetch(`/api/upload?filename=${file.name}`, {
        method: "POST",
        body: file,
      });

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
  };

  return (
    <div className="flex flex-col gap-4 items-center md:w-1/2 w-full">
      <div className="relative rounded-full ">
        {blob ? (
          <Image
            src={blob.url}
            priority={true}
            alt="User Avatar"
            className="object-cover object-center rounded-full"
            layout="fixed"
            width={300}
            height={300}
          />
        ) : (
          <Image
            src={currentImage}
            priority={true}
            alt="User Avatar"
            className="object-cover object-center rounded-full"
            layout="fixed"
            width={300}
            height={300}
          />
        )}
        <div
          className="absolute right-1 bottom-1 cursor-pointer"
          onClick={() => inputFileRef.current?.click()}
        >
          <FaCamera fontSize={20} />
        </div>
        <input
          className="hidden"
          name="file"
          ref={inputFileRef}
          type="file"
          id="files"
          required
          onChange={handleFileChange}
        />
      </div>
      {loading && <ImSpinner9 fontSize={20} className="animate-spin" />}
      {error && (
        <div className="text-dark-cream-color font-bold text-sm animate-fadeInUp">
          {error}
        </div>
      )}
      {success && (
        <div className="text-purple-color  dark:text-btn-primary-color font-bold text-sm animate-fadeInUp">
          {success}
        </div>
      )}
    </div>
  );
}
