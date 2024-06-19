import { handleAuth, handleLogin } from "@auth0/nextjs-auth0";

export const GET = handleAuth({
  login: handleLogin({
    returnTo: "/api/create-user",
    authorizationParams: {
      prompt: "login",
    },
  }),
  signup: handleLogin({
    authorizationParams: { screen_hint: "signup" },
  }),
});
