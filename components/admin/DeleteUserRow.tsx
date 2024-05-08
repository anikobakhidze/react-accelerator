import { deleteUserAction } from "@/actions";

function DeleteUserRow({ setIsVisible, id }: IDeleteUserRow) {
  const handleCancel = () => {
    setIsVisible();
  };
  const handleDeleteUser = async () => {
    await deleteUserAction(id);
    handleCancel();
  };

  return (
    <section className="absolute inset-0 flex items-center justify-center bg-slate-400 bg-opacity-75">
      <div className="w-4/5 bg-white p-6 rounded-lg">
        <h3>Do you want to delete user</h3>
        <div className="mt-4">
          <button
            className="mr-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            onClick={handleDeleteUser}
          >
            Yes
          </button>
          <button
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded hover:bg-gray-400"
            onClick={handleCancel}
          >
            No
          </button>
        </div>
      </div>
    </section>
  );
}

export default DeleteUserRow;
