import { useEffect, useState } from "react";
import { account } from "@/lib/appwrite"; // <-- adapte le chemin selon ton projet
import { useNavigate } from "react-router-dom";
import { ROUTES } from "@/utils/constants";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [user, setUser] = useState<any>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const getUser = JSON.parse(window.localStorage.getItem("user") ?? "");
    if (getUser) {
      setUser(getUser);
    } else {
      account
        .get()
        .then(setUser)
        .catch(() => setUser(null));
    }
  }, []);

  const handleLogout = async () => {
    try {
      await account.deleteSession("current");
      setUser(null);

      const logoutWindow = window.open(
        "https://accounts.google.com/Logout",
        "_blank",
        "width=500,height=600"
      );

      window.localStorage.clear();
      setTimeout(() => {
        logoutWindow?.close();
        navigate(ROUTES.HOME);
      }, 2000);
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <nav className="w-full bg-gray-800 border-b border-gray-200 py-4 px-6 shadow-sm">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo */}
        <h1
          className="text-xl font-bold text-white cursor-pointer"
          onClick={() => navigate(ROUTES.HOME)}
        >
          Festi Creator
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <>
              <span className="text-sm text-white font-bold">
                👋 {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-1 bg-red-700 text-white rounded hover:bg-red-600 transition"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Button
              onClick={() => navigate(ROUTES.LOGIN)}
              className="text-sm px-4 py-2 bg-gray-200 text-black rounded hover:bg-blue-500 transition"
            >
              Connexion
            </Button>
          )}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 px-4">
          {user ? (
            <>
              <span className="text-sm text-white font-bold">
                👋 {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="px-3 py-2 bg-red-700 text-white rounded hover:bg-red-600 transition"
              >
                Déconnexion
              </button>
            </>
          ) : (
            <Button
              onClick={() => {
                navigate(ROUTES.LOGIN);
                setMenuOpen(false);
              }}
              className="text-sm px-4 py-2 bg-gray-200 text-black rounded hover:bg-blue-500 transition"
            >
              Connexion
            </Button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
