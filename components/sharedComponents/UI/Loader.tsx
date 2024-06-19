import React from "react";

function Loader() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white dark:bg-black bg-opacity-75 z-50">
      <div className="loader">Loading...</div>
    </div>
  );
}

export default Loader;
