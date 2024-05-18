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

export async function createUser(name: string, email: string, age: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-user`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, age }),
    }
  );

  return response;
}

export async function updateUser(
  id: string,
  name: string,
  email: string,
  age: number
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/update-user/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, name, email, age }),
    }
  );
  return response;
}

// add To cart

export async function createCartItem(userId: number, productId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-cart-item`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId, productId }),
    }
  );

  return response;
}

// get cart items

export async function getCartItems(userId: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-cart-items/${userId}`
  );
  const { cart } = await response.json();
  return cart.rows;
}
