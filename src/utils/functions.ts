import type { User } from "@/auth/utils/types";

function isAuthenticated(): boolean {
  const user: User | null = JSON.parse(localStorage.getItem("user") || "null");
  return user?.emailVerification && user?.$id ? true : false;
}

export { isAuthenticated };
