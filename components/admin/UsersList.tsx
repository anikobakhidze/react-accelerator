import { getUsers } from "../../api";
import React from "react";
import UserTableRow from "./UserTableRow";
async function UsersList() {
  const users = await getUsers();
  return (
    <ul className="flex flex-col mx-auto w-4/5 gap-5 bg-light-green p-4 rounded-lg shadow overflow-auto">
      <div className="flex font-bold border-b-2 border-medium-green justify-around">
        <li className="w-28 text-center text-dark-green">Name</li>
        <li className="w-56 text-center text-dark-green">Email</li>
        <li className="w-28 text-center text-dark-green">Edit user</li>
        <li className="w-28 text-center text-dark-green">Remove User</li>
      </div>
      {users.map((user: IUser) => (
        <li
          key={user.id}
          className="flex border-medium-green border-b-2 justify-around items-center py-2  hover:bg-medium-green"
        >
          <UserTableRow user={user} />
        </li>
      ))}
    </ul>
  );
}

export default UsersList;
