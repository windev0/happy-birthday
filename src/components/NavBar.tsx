import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite"; // <-- adapte le chemin selon ton projet
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  // Récupère l'utilisateur connecté au chargement
  useEffect(() => {
    account
      .get()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  // Fonction de déconnexion
  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);

      const logoutWindow = window.open(
        "https://accounts.google.com/Logout",
        "_blank",
        "width=500,height=600"
      );
      
      window.localStorage.clear(); // Nettoie le localStorage

      // Fermer la fenêtre automatiquement après quelques secondes
      setTimeout(() => {
        logoutWindow?.close();
        navigate(ROUTES.LOGIN);
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <nav className="flex items-center justify-between p-4 bg-gray-900 text-white">
      <h1 className="text-xl font-bold">Happy Birthday</h1>
      {user && (
        <div className="flex items-center gap-4">
          <span className="text-sm">{user.name}</span>
          <button
            onClick={handleLogout}
            className="px-3 py-1 bg-red-600 rounded hover:bg-red-500 transition"
          >
            Logout
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
