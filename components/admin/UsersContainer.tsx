import AddUserToggle from "./AddUserToggle";
import UsersList from "./UsersList";

function UsersContainer() {
  return (
    <div className="w-4/5 mx-auto overflow-auto">
      <AddUserToggle />
      <UsersList />
    </div>
  );
}

export default UsersContainer;
