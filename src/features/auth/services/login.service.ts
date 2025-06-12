import type { LoginData, User } from "@/auth/utils/types";
import { account } from "@/lib/appwrite";
import { ROUTES } from "@/utils/constants";
import type { OAuthProvider } from "appwrite";

export async function signInWithEmailPassword(
  data: LoginData
): Promise<User | null> {
  try {
    const { email, password } = data;
    const session = await account.createEmailPasswordSession(email, password);

    if (!session.$id) return null;

    const user = await account.get();
    window.localStorage.setItem("user", JSON.stringify(user));
    window.localStorage.setItem("email", email);
    return user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}

export function signInWithOAuth(provider: OAuthProvider): boolean {
  const baseUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5173";
  const authCallbackUrl = baseUrl + ROUTES.AUTH_CALLBACK;
  const onSuccessUrl = baseUrl + ROUTES.APP;

  try {
    if (!provider) {
      return false;
    }

    account.createOAuth2Session(provider, onSuccessUrl, authCallbackUrl, [
      "email",
      "openid",
      "profile",
    ]);

    // const user = await account.get();
    // window.localStorage.setItem("user", JSON.stringify(user));
    return true;
  } catch (error) {
    console.error("OAuth login failed:", error);
    throw error;
  }
}

export async function fetchLoggedInUser(): Promise<User | null> {
  try {
    const user = await account.get();
    window.localStorage.setItem("user", JSON.stringify(user));
    return user;
  } catch (err) {
    console.error("Erreur lors de la récupération de l'utilisateur :", err);
    return null;
  }
}
