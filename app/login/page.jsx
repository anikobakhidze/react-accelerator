"use server";
import LogInForm from "@/components/LogInForm";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../constants";
import { redirect } from "next/navigation";
import { login } from "../actions";
import ThemeSwitch from "@/components/ThemeSwitch";
export default async function LogIn() {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  if (cookie) {
    redirect("/");
  }
  const handleLogIn = async (username, password) => {
    "use server";
    await login(username, password);
  };

  return (
    <main className="w-full h-[100vh] flex flex-col items-center justify-around bg-medium-green dark:bg-slate-800 ">
      <div className="flex items-center ">
        <h1 className="text-lg mr-2 text-white">Change Webpage Theme</h1>
        <ThemeSwitch />
      </div>
      <LogInForm handleLogIn={handleLogIn} />
    </main>
  );
}
