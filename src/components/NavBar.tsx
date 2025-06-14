import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite"; // <-- adapte le chemin selon ton projet
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const navigate = useNavigate();

  useEffect(() => {
    account
      .get()
      .then(setUser)
      .catch(() => setUser(null));
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);

      // const logoutWindow = window.open(
      //   "https://accounts.google.com/Logout",
      //   "_blank",
      //   "width=500,height=600"
      // );

      window.localStorage.clear();
      setTimeout(() => {
        // logoutWindow?.close();
        navigate(ROUTES.HOME);
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <nav className="w-full bg-gray-800  border-b border-gray-200 py-4 px-6 flex justify-between items-center shadow-sm">
      <h1
        className="text-xl font-bold text-white cursor-pointer"
        onClick={() => navigate(ROUTES.HOME)}
      >
        <span className="">FestiCréateur</span>
      </h1>

      {user ? (
        <div className="flex items-center gap-4">
          <span className="text-sm text-white font-bold">👋 {user.name}</span>
          <button
            onClick={handleLogout}
            className="px-3 py-1 cursor-pointer bg-red-700 text-white rounded hover:bg-red-600 transition"
          >
            Déconnexion
          </button>
        </div>
      ) : (
        <Button
          onClick={() => navigate(ROUTES.LOGIN)}
          className="text-sm px-4 py-2 bg-gray-200 text-black cursor-pointer rounded hover:bg-blue-500 transition"
        >
          Connexion
        </Button>
      )}
    </nav>
  );
};

export default Navbar;