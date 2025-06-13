// Exemple : src/pages/EventList.jsx
import { databases } from "@/lib/appwrite";
import { useEffect, useState } from "react";

interface Event {
  $id: string;
  title: string;
  description: string;
  image: string;
  date: Date;
  $created_At: Date;
  $updated_At: Date;
}
const DATABASE_ID = "684c243d001912355795";
const COLLECTION_ID = "684c2a22000e7b2dea09";

const EventListPage = () => {
  const [events, setEvents] = useState<any>([]);
  const [loading, setLoading] = useState(true);

  const getEvents = async () => {
    try {
      const response = await databases.listDocuments(
        DATABASE_ID,
        COLLECTION_ID
        
      );
      setEvents(response.documents);
    } catch (error) {
      console.error("Erreur lors du chargement des événements :", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getEvents();
  }, []);

  if (loading) return <p>Chargement...</p>;

  return (
    <div>
      <h2>Événements festifs 🎉</h2>
      <ul>
        {events.map((event: Event) => (
          <li key={event.$id}>
            <h3>{event.title}</h3>
            <p>{event.description}</p>
            <small>{event.date.toDateString()}</small>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventListPage;
