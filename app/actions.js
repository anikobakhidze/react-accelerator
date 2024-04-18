"use server";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "@/constants";
export async function login(username, password) {
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });
  if (response.ok) {
    const user = await response.json();
    console.log(user);
    const cookieStore = cookies();
    cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user));
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
}
