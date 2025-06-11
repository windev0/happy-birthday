import { Client, Account } from "appwrite";
export { ID } from "appwrite";

const client = new Client();
const projectId =
  import.meta.env.VITE_APPWRITE_PROJECT_ID || "653ba782463bbfa11327"; // Replace with your project ID
const endpoint =
  import.meta.env.VITE_APPWRITE_ENDPOINT || "https://cloud.appwrite.io/v1"; // Replace with your Appwrite endpoint

client.setEndpoint(endpoint).setProject(projectId); // Replace with your project ID

const account = new Account(client);

export { client, account, projectId, endpoint };
