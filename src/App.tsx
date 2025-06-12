import { fetchLoggedInUser } from "@/auth/services/login.service";
import MainLayout from "@/layouts/MainLayout";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    const fetchUser = async () => {
      try {
        await fetchLoggedInUser();
      } catch (error) {
        console.error("Error fetching logged-in user:", error);
      }
    };
    fetchUser();
  }, []);

  return (
    <MainLayout>
      <h1>Hello world</h1>
    </MainLayout>
  );
}

export default App;
