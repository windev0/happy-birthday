import { Client, Account, Databases } from "appwrite";
export { ID } from "appwrite";

const client = new Client();
const projectId =
  import.meta.env.VITE_APPWRITE_PROJECT_ID || "653ba782463bbfa11327"; // Replace with your project ID
const endpoint =
  import.meta.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1"; // Replace with your Appwrite endpoint

client.setEndpoint(endpoint).setProject(projectId); // Replace with your project ID

const account = new Account(client);
const databases = new Databases(client);

// const createCollection = async () => {
//   try {
//     const response = await databases.createDocument(
//       "festive_creator", // databaseId
//       "events", // collectionId
//       "Festive Events", // nom visible
//       [
//         "role:all", // permissions de lecture
//       ],
//       [
//         "role:all", // permissions d’écriture
//       ]
//     );
//     console.log("Collection créée :", response);
//   } catch (error) {
//     console.error("Erreur création collection :", error);
//   }
// };

export { client, account, projectId, endpoint, databases };
