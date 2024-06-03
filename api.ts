// export const BASE_URL = "http://localhost:3000";

import { getSession } from "@auth0/nextjs-auth0";

export async function getUsers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-users`
  );
  const { users } = await response.json();
  return users.rows;
}

export async function deleteUser(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-user/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
}

// export async function createUser(name: string, email: string, age: number) {
//   const response = await fetch(
//     `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-user`,
//     {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ name, email, age }),
//     }
//   );

//   return response;
// }

export async function updateUser(name: string, nickname: string) {
  const session = await getSession();
  const user = session?.user;
  const sub = user?.sub;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/update-user/${sub}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, nickname, sub }),
    }
  );
  return response;
}
export async function createUser() {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-user`
    );
    if (!response.ok) {
      throw new Error("Failed to fetch user");
    }
  } catch (error) {
    console.error("Error fetching user:", error);
  }
}
export async function getUser() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-user/${id}`,
    {
      cache: "no-store",
    }
  );
  const userInfo = await response.json();
  const userDetail = userInfo.user.rows[0];
  return userDetail;
}

export async function sendMessage(
  name: string,
  phone: number,
  email: string,
  subject: string,
  message: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/send-message`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, phone, email, subject, message }),
      }
    );
    if (!response.ok) {
      throw new Error("Failed to send message");
    }
    console.log("Message sent successfully");
  } catch (error) {
    console.error("Error sending message:", error);
  }
}
