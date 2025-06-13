import { fetchLoggedInUser } from "@/auth/services/login.service";
import EventListPage from "@/features/event/list/pages/EventList.page";
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
      <EventListPage />
      <h1>Hello world</h1>
    </MainLayout>
  );
}

export default App;
