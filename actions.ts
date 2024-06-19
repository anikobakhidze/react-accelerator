"use server";
import {
  createUser,
  deleteUser,
  getProducts,
  createMessage,
  editUser,
  createProduct,
  deleteProduct,
  editProduct,
  getProduct,
  getProductsQuantity,
  updateCartQuantity,
  createBlog,
  getBlogs,
  editBlog,
  getBlog,
  deleteBlog,
  deleteCart,
} from "./api";
import { revalidatePath, revalidateTag } from "next/cache";
export async function deleteUserAction(id: number) {
  await deleteUser(id);
  revalidatePath("/admin");
}

export async function createUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const age = parseInt(formData.get("age") as string, 10);
  if (age < 18) {
    throw new Error("Age must be at least 18.");
  }
  await createUser(name, email, age);
  revalidatePath("/admin");
}

export async function editUserAction(formData: FormData) {
  const name = formData.get("name") as string;
  const nickname = formData.get("nickname") as string;
  await editUser(name, nickname);
  revalidatePath("/profile");
}

// create message
export async function createMessageAction(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = parseInt(formData.get("phone") as string);
  const email = formData.get("email") as string;
  const subject = formData.get("subject") as string;
  const message = formData.get("message") as string;

  try {
    const response = await createMessage(name, phone, email, subject, message);
    return response;
  } catch (error) {
    throw new Error("Failed to send message");
  }
}

export async function createProductAction(product: Product) {
  try {
    const price = Number(product.price);
    const userSub = product.userSub as string;

    await createProduct(
      product.image,
      product.title,
      product.description,
      price,

      product.category,
      userSub
    );
    revalidatePath("/product");
  } catch (error) {
    console.error("Error uploading product:", error);
    throw new Error("Error uploading product");
  }
}
export async function getProductsAction() {
  const products = await getProducts();
  revalidatePath("/", "layout");
  return products;
}

export async function editProductAction(product: IProductDetails) {
  await editProduct(product);
  revalidatePath("/product");
}

export async function deleteProductAction(id: number) {
  await deleteProduct(id);
  revalidatePath("/");
}
// get products action
export async function getProductAction(id: number): Promise<IProductDetails> {
  const product = await getProduct(id);
  revalidateTag(`/editproduct/${id}`);
  revalidatePath("/");
  return product;
}

//  get selected products quantity
export async function getQuantityAction(userId: string) {
  const quantity = await getProductsQuantity(userId);
  // revalidatePath("/", "layout");
  return quantity;
}
export async function updateCartQuantityAction(
  productId: number,
  userId: string,
  action: "increase" | "decrease" | "remove"
) {
  await updateCartQuantity(productId, userId, action);
  revalidatePath("/cart");
}

// create blog action
export async function createBlogAction(blog: IBlogCreate) {
  try {
    const userSub = blog.userSub as string;
    await createBlog(
      blog.image,
      blog.title,
      blog.description,
      blog.category,
      userSub
    );
  } catch (error) {
    console.error("Error creating blog:", error);
    throw new Error("Error creating blog");
  }
}

// get blogs action
export async function getBlogsAction() {
  const blogs = await getBlogs();
  revalidatePath("/blogs", "layout");
  return blogs;
}

//  edit blog action
export async function editBlogAction(blog: IBlog) {
  await editBlog(blog);
  revalidatePath("/blog", "layout");
}

// get blog action
export async function getBlogAction(id: number) {
  const blog = await getBlog(id);
  revalidateTag(`/editblog/${id}`);
  revalidatePath("/", "layout");
  return blog;
}

// delete blog action
export async function deleteBlogAction(id: number) {
  await deleteBlog(id);
  revalidatePath("/blog");
}

export async function deleteCartAction(userId: string) {
  await deleteCart(userId);
  revalidatePath("/cart");
}
