"use client";
import React, { useState, useEffect } from "react";

const ShareOnFacebook = () => {
  const [shareUrl, setShareUrl] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      const currentUrl = window.location.href;
      setShareUrl(
        `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
          currentUrl
        )}`
      );
    }
  }, []);

  return (
    <>
      {shareUrl && (
        <a href={shareUrl} target="_blank" rel="noopener noreferrer">
          Share on Facebook
        </a>
      )}
    </>
  );
};

export default ShareOnFacebook;
