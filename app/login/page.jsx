"use server";
import LogInForm from "@/components/LogInForm";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constants";
import { redirect } from "next/navigation";
import { login } from "../actions";
export default async function LogIn() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  console.log(cookie);
  if (cookie) {
    redirect("/");
  }
  const handleLogIn = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <main className="w-full h-[100vh] flex justify-center items-center">
      <LogInForm handleLogIn={handleLogIn} />
    </main>
  );
}
