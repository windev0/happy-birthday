import type { RegisterData, User } from "@/auth/utils/types";
import { account } from "@/lib/appwrite";
import { v4 as uuidv4 } from "uuid";

export async function signUp(data: RegisterData): Promise<User | null> {
  try {
    const { email, password, username } = data;

    console.log("data", { email, password });
    const userId = uuidv4();
    const user = await account.create(userId, email, password, username);

    console.log("register user", user);
    return user;
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
}
