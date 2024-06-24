import AddUserToggle from "./AddUserToggle";
import UsersList from "./UsersList";

function UsersContainer() {
  return (
    <div className="w-4/5 mx-auto overflow-auto bg-light-bg-color dark:bg-gray-color mt-28 mb-10 lg:mt-40 lg:mb-14">
      <AddUserToggle />
      <UsersList />
    </div>
  );
}

export default UsersContainer;
