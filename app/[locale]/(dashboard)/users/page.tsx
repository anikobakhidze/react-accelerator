import { getUsers } from "@/api";
import DeleteUser from "@/components/sharedComponents/UI/DeleteUser";
export default async function Users() {
  const users = await getUsers();
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
