// export const BASE_URL = "http://localhost:3000";

import { getSession } from "@auth0/nextjs-auth0";
import { revalidatePath } from "next/cache";

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
// export async function createUser() {
//   try {
//     const response = await fetch(
//       `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-user`
//     );
//     if (!response.ok) {
//       throw new Error("Failed to fetch user");
//     }
//   } catch (error) {
//     console.error("Error fetching user:", error);
//   }
// }
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

export async function uploadProduct(
  image: string,
  title: string,
  description: string,
  price: number,
  quantity: number,
  category: string,
  userSub: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/upload-product`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          title,
          description,
          price,
          quantity,
          category,
          userSub,
        }),
      }
    );
    revalidatePath("/");
    if (!response.ok) {
      throw new Error("Failed to upload product");
    }
    return "Product uploaded successfully";
  } catch (error) {
    return error;
  }
}

//  get all products
export async function getProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-products`,
    {
      cache: "no-store",
    }
  );

  const { products } = await response.json();
  return products.rows;
}
export async function updateProduct(product: IProductDetails) {
  const { id, image, title, description, price, quantity, category } = product;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/edit-product/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id,
        image,
        title,
        description,
        price,
        quantity,
        category,
      }),
    }
  );

  return response;
}

// get selected product

export async function getProduct(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-product/${id}`,
    {
      cache: "no-store",
    }
  );
  const productInfo = await response.json();
  const product = productInfo.product.rows[0];

  return product;
}

//  delete product
export async function deleteProduct(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-product/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
}

// add to cart
export async function addToCart(product: IProductDetails, userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/add-to-cart`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ product, userId }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to add product to cart");
  }

  const data = await response.json();
  return data;
}

//  user's selected products quantity

export async function getTotalSelectedQuantity(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/selected-products-quantity`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ userId }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to get total selected quantity");
  }

  const data = await response.json();
  return data.totalSelectedQuantity;
}

//  get selected products

export async function getCartItems(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-cart-items/${userId}`
  );
  if (!response.ok) {
    throw new Error("Failed to get selected products");
  }
  const cartItems = await response.json();

  return cartItems.products;
}

// update cart quantity

export async function updateCartQuantity(
  productId: number,
  userId: string,
  action: "increase" | "decrease" | "remove"
) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/item-quantity`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ productId, userId, action }),
      cache: "no-store",
    }
  );

  if (!response.ok) {
    throw new Error("Failed to update product quantity in cart");
  }

  const data = await response.json();
  return data;
}

// create blog
export async function createBlog(
  image: string,
  title: string,
  description: string,
  category: string,
  userSub: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-blog`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          image,
          title,
          description,
          category,
          userSub,
        }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to create blog");
    }
    return await response.json();
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Error creating blog");
  }
}
