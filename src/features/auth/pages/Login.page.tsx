import { LoginForm } from "@/features/auth/components/LoginForm";
import { account, ID } from "@/lib/appwrite";
import { GalleryVerticalEnd } from "lucide-react";
import { useState } from "react";

const LoginPage = () => {
  const [loggedInUser, setLoggedInUser] = useState<null | Awaited<
    ReturnType<typeof account.get>
  >>(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  async function login(email: string, password: string) {
    console.log("data", { email, password });
    await account.createEmailPasswordSession(email, password); // login with appwrite
    const user = await account.get();

    console.log("user", user);
    setLoggedInUser(user);

    // vérification
    const secret = "birthday"; // you can use any secret, here we use 'birthday' for simplicity
    const userId = user.$id;
    const verify_url = `http://localhost:5173/verify?userId=${userId}&secret=${secret}`;

    const createVerification = await account.createVerification(verify_url);
    console.log("createVerification", createVerification);

    console.log("verify_url", verify_url);
  }

  return (
    <div className="bg-muted flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      <div className="flex w-full max-w-sm flex-col gap-6">
        <a href="#" className="flex items-center gap-2 self-center font-medium">
          <div className="bg-primary text-primary-foreground flex size-6 items-center justify-center rounded-md">
            <GalleryVerticalEnd className="size-4" />
          </div>
          Acme Inc.
        </a>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
