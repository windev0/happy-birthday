import { account } from "../../../lib/appwrite";
import { v4 as uuidv4 } from "uuid";

const RegisterPage = () => {
  async function handleRegister(
    email: string,
    password: string,
    username?: string
  ) {
    console.log("data", { email, password, username });
    // Pour générer un identifiant unique, vous pouvez installer le package 'uuid'
    // Commande à exécuter : npm install uuid
    const userId = uuidv4();
    const response = account.create(userId, email, password, username);
    console.log(response);
  }
  return (
    <div>
      <h1>Register</h1>
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          const formData = new FormData(e.currentTarget);
          const email = formData.get("email") as string;
          const password = formData.get("password") as string;
          const username = formData.get("username") as string;

          await handleRegister(email, password, username);
        }}
      >
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" name="password" required />
        </div>
        <div>
          <label htmlFor="username">Username:</label>
          <input type="text" name="username" />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegisterPage;
