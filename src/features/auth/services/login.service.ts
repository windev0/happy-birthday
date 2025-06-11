import type { LoginData, User } from "@/auth/utils/types";
import { account } from "@/lib/appwrite";

export async function singIn(data: LoginData): Promise<User | null> {
  try {
    const { email, password } = data;

    console.log("data", { email, password });
    const session = await account.createEmailPasswordSession(email, password); // login with appwrite

    if (session.$id) {
      const user = await account.get();
      window.localStorage.setItem("user", JSON.stringify(user));
      window.localStorage.setItem("email", email);
      return user;
    }
    return null;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
