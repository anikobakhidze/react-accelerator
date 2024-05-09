"use client";
import { deleteUserAction } from "@/actions";
function DeleteUser({ id }: { id: number }) {
  return <button onClick={() => deleteUserAction(id)}>x</button>;
}

export default DeleteUser;
