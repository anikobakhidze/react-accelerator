import { CiCircleCheck } from "react-icons/ci";

function SuccessMessage({
  success,
  closeModal,
}: {
  success: string;
  closeModal: () => void;
}) {
  return (
    <>
      {success && (
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white bg-opacity-75 dark:bg-black">
          <div className="text-green-color animate-fadeInUp font-bold text-sm md:text-lg mb-4 flex items-center">
            <CiCircleCheck className="mr-2 text-3xl" />
            {success}
          </div>
          <button
            onClick={closeModal}
            className="mt-4 bg-green-color text-white py-2 px-4 rounded hover:bg-green-600"
          >
            Close
          </button>
        </div>
      )}
    </>
  );
}

export default SuccessMessage;
