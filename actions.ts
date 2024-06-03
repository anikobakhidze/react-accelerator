"use server";
import { deleteUser, updateUser } from "./api";
import { revalidatePath } from "next/cache";
export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

// export async function createUserAction(formData: FormData) {
//   const name = formData.get("name") as string;
//   const email = formData.get("email") as string;
//   const age = parseInt(formData.get("age") as string, 10);
//   if (age < 18) {
//     throw new Error("Age must be at least 18.");
//   }
//   await createUser(name, email, age);
//   revalidatePath("/admin");
// }

export async function updateUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const nickname = formData.get("nickname") as string;
  await updateUser(name, nickname);
  revalidatePath("/profile");
}
