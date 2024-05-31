// export const BASE_URL = "http://localhost:3000";

import { getSession } from "@auth0/nextjs-auth0";

export async function getUsers() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-users`
  );
  const { users } = await response.json();
  console.log(users);

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
