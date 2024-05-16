export const BASE_URL = "http://localhost:3000";

export async function getUsers() {
  const response = await fetch(`${BASE_URL}/api/get-users`);
  const { users } = await response.json();
  console.log(users);

  return users.rows;
}

export async function deleteUser(id: number) {
  const response = await fetch(`${BASE_URL}/api/delete-user/${id}`, {
    method: "DELETE",
  });
  return response;
}

export async function createUser(name: string, email: string, age: number) {
  const response = await fetch(`${BASE_URL}/api/create-user`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, email, age }),
  });

  return response;
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: number
) {
  const response = await fetch(`${BASE_URL}/api/update-user/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ id, name, email, age }),
  });
  return response;
}

// add To cart

export async function createCartItem(userId: number, productId: number) {
  const response = await fetch(`${BASE_URL}/api/create-cart-item`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ userId, productId }),
  });
  console.log(response);

  return response;
}
