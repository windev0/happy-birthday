import { useState } from "react";
import { account, ID } from "../../../lib/appwrite";

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
    <div
      style={{
        maxWidth: 400,
        margin: "40px auto",
        padding: 24,
        border: "1px solid #ddd",
        borderRadius: 8,
        boxShadow: "0 2px 8px #eee",
      }}
    >
      <p
        style={{
          fontWeight: "bold",
          fontSize: 18,
          marginBottom: 24,
          textAlign: "center",
        }}
      >
        {loggedInUser ? `Logged in as ${loggedInUser.name}` : "Not logged in"}
      </p>

      <form style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          style={{
            padding: 10,
            borderRadius: 4,
            border: "1px solid #ccc",
            fontSize: 16,
          }}
        />

        <div style={{ display: "flex", gap: 10, marginTop: 8 }}>
          <button
            type="button"
            onClick={() => login(email, password)}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 4,
              border: "none",
              background: "#1976d2",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Login
          </button>

          <button
            type="button"
            onClick={async () => {
              await account.create(ID.unique(), email, password, name);
              login(email, password);
            }}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 4,
              border: "none",
              background: "#43a047",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Register
          </button>

          <button
            type="button"
            onClick={async () => {
              await account.deleteSession("current");
              setLoggedInUser(null);
            }}
            style={{
              flex: 1,
              padding: 10,
              borderRadius: 4,
              border: "none",
              background: "#e53935",
              color: "#fff",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Logout
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
