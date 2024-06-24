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

export async function editUser(name: string, nickname: string) {
  const session = await getSession();
  const user = session?.user;
  const sub = user?.sub;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/edit-user/${sub}`,
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

export async function createMessage(
  name: string,
  phone: number,
  email: string,
  subject: string,
  message: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-message`,
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
    return "Message sent successfully";
  } catch (error) {
    return error;
  }
}

export async function createProduct(
  image: string,
  title: string,
  description: string,
  price: number,

  category: string,
  userSub: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-product`,
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
          category,
          userSub,
        }),
        cache: "no-store",
      }
    );

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
export async function editProduct(product: IProductDetails) {
  const { id, image, title, description, price, category } = product;
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

export async function getProductsQuantity(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-products-quantity`,
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
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/edit-product-quantity`,
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

// get blogs
export async function getBlogs() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-blogs`,
    {
      cache: "no-store",
    }
  );

  const { blogs } = await response.json();
  return blogs.rows;
}

// edit blog
export async function editBlog(blog: IBlog) {
  const { id, image, title, description, category } = blog;
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/edit-blog/${id}`,
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
        category,
      }),
    }
  );

  return response;
}

// get blog
export async function getBlog(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-blog/${id}`,
    {
      cache: "no-store",
    }
  );
  const blogInfo = await response.json();
  const blog = blogInfo.blog.rows[0];

  return blog;
}

// delete blog
export async function deleteBlog(id: number) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-blog/${id}`,
    {
      method: "DELETE",
    }
  );
  return response;
}

// delete cart

export async function deleteCart(userId: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/delete-cart/${userId}`,
    {
      method: "DELETE",
      cache: "no-store",
    }
  );
  return response;
}

// create rating
export async function createRating(
  rating: number | null,
  product_id: number,
  user_sub: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-rating`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ rating, product_id, user_sub }),
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create rating");
    }
    return "You rated successfully";
  } catch (error) {
    return error;
  }
}
// getRating

export async function getRating(product_id: number): Promise<number> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-rating/${product_id}`,
      {
        cache: "no-store",
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch rating");
    }

    const data = await response.json();
    return data.averageRating;
  } catch (error) {
    console.error("Error fetching rating:", error);
    return 0;
  }
}

// check user rating

export async function checkUserRating(
  product_id: number,
  user_sub: string
): Promise<boolean> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/check-user-rating?product_id=${product_id}&user_sub=${user_sub}`,
      {
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to check user rating");
    }
    const data = await response.json();
    return data.hasRated;
  } catch (error) {
    console.error("Error checking user rating:", error);
    return false;
  }
}

//  createorder checkout
export async function createCheckout(
  userId: string,
  products: ICartProduct[],
  deliveryAddress: string
) {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/create-checkout`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ userId, products, deliveryAddress }),
        cache: "no-store",
      }
    );
    if (!response.ok) {
      throw new Error("Failed to create rating");
    }
    return "You rated successfully";
  } catch (error) {
    return error;
  }
}
// get my products
export async function getMyProducts() {
  const session = await getSession();
  const user = session?.user;
  const id = user?.sub;

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_VERCEL_URL}/api/get-my-products/${id}`,
    {
      cache: "no-store",
    }
  );
  const getMyProducts = await response.json();
  const { rows: products } = getMyProducts;
  return products;
}
