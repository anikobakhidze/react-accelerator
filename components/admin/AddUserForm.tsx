import { createUserAction } from "@/actions";
import { MdError } from "react-icons/md";
import { useError } from "@/hook/useError";
function AddUserForm({ isVisible, setIsVisible }: IUserFormProps) {
  const { error, handleError, clearError } = useError();
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);
    try {
      await createUserAction(formData);
      setIsVisible(false);
    } catch (error: any) {
      handleError(error.message);
    }
  };

  const handleClose = () => {
    setIsVisible(false);
  };
  if (!isVisible) return null;
  const handleInputChange = () => {
    clearError();
  };

  return (
    <section className="absolute inset-0 w-full h-full bg-light-green bg-opacity-75 z-10 flex items-center justify-center ">
      <div className="flex flex-col w-4/5 max-w-md mx-auto rounded-lg gap-4 bg-white p-10 shadow-lg border border-medium-green">
        {error && (
          <div className="flex items-center space-x-2 bg-red-100 text-red-800 p-2 rounded-md ">
            <MdError className="text-red-500" />
            <p>{error}</p>
          </div>
        )}
        <button
          onClick={handleClose}
          className=" self-end w-10 px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-md transition duration-300 ease-in-out"
        >
          X
        </button>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            required
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medium-green focus:border-medium-green"
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            required
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medium-green focus:border-medium-green"
          />
          <input
            type="number"
            name="age"
            placeholder="Age"
            required
            onChange={handleInputChange}
            className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-medium-green focus:border-medium-green"
          />
          <div className="flex justify-between items-center">
            <button
              type="submit"
              className="px-4 py-2 bg-medium-green hover:bg-dark-green text-white font-bold rounded-md transition duration-300 ease-in-out"
            >
              Save
            </button>
            <button
              onClick={handleClose}
              className="px-4 py-2 bg-gray-500 hover:bg-gray-700 text-white font-bold rounded-md transition duration-300 ease-in-out"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default AddUserForm;
