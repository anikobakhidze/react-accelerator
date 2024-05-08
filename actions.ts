"use server";
import { createUser, deleteUser, updateUser } from "./api";
import { revalidatePath } from "next/cache";
export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function createUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const age = parseInt(formData.get("age") as string, 10);

  await createUser(name, email, age);
  revalidatePath("/admin");
}

export async function updateUserAction(formData: FormData) {
  const id = formData.get("id") as string;
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const age = parseInt(formData.get("age") as string, 10);
  await updateUser(id, name, email, age);
  revalidatePath("/admin");
}
