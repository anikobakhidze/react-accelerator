import { getUsers } from "@/api";
import DeleteUser from "@/components/sharedComponents/UI/DeleteUser";
// import { deleteUser } from "@/api";
export default async function Users() {
  const users = await getUsers();
  //   const deleteUserAction = async (id: number) => {
  //     "use server";
  //     await deleteUser(id);
  //   };

  return (
    <div>
      {users.map((user: IUser) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>{users.email}</p>
          <DeleteUser id={user.id} />
        </div>
      ))}
    </div>
  );
}
