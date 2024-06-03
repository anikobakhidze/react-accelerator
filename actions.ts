"use server";
import { deleteUser, sendMessage, updateUser } from "./api";
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

export async function sendMessageAction(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = parseInt(formData.get("phone") as string);
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;
  await sendMessage(name, phone, email, subject, message);
}
