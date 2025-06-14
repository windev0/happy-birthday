import { Badge } from "@/components/ui/badge";
import type { FormDataType } from "@/features/event/components/CreateEventForm";

type Props = {
  prev: () => void;
  data: FormDataType;
};

const Step5 = ({ prev, data }: Props) => {
  const handleSubmit = () => {
    // Logique de soumission ou génération ici
    console.log("Formulaire final:", data);
  };

  return (
    <div className="max-w-lg mx-auto bg-white p-8 rounded-xl shadow-lg space-y-8 mb-10 ">
      <h2 className="text-2xl font-bold text-gray-800 text-center">
        Aperçu du message
      </h2>

      <ul className="space-y-3 text-base text-gray-700">
        <li>
          <span className="font-semibol">Titre :</span> {data.title}
        </li>
        <li>
          <span className="font-semibold mr-3  pb-3">Catégorie :</span>{" "}
          <Badge className="bg-blue-500 text-white dark:bg-blue-600">
            {data.category}
          </Badge>
        </li>
        <li>
          <span className="font-semibold mr-3 ">Durée :</span>
          <Badge className="bg-orange-200 text-black dark:bg-blue-600">
            {data.duration}
          </Badge>
        </li>
        <li>
          <span className="font-semibold mr-3">Photos :</span>
          <div className="flex flex-wrap gap-2 mt-2">
            {data.photos.length > 0 ? (
              data.photos.map((photo, idx) => (
                <div key={idx} className="relative group">
                  <img
                    src={
                      typeof photo === "string"
                        ? photo
                        : URL.createObjectURL(photo)
                    }
                    alt={`photo-${idx}`}
                    className="w-20 h-20 object-cover rounded-lg border"
                  />
                  <button
                    type="button"
                    className="absolute top-1 right-1 bg-white bg-opacity-80 rounded-full p-1 text-xs opacity-0 group-hover:opacity-100 transition"
                    onClick={() => {
                      // Remove photo
                      const newPhotos = [...data.photos];
                      newPhotos.splice(idx, 1);
                      // You should update the parent state here
                      alert("Remplacement de la photo non implémenté ici.");
                    }}
                  >
                    ✕
                  </button>
                </div>
              ))
            ) : (
              <span className="text-gray-400">Aucune image</span>
            )}
            <label className="flex items-center justify-center w-20 h-20 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-blue-400 transition">
              <span className="text-2xl text-gray-400">+</span>
              <input
                type="file"
                accept="image/*"
                className="hidden"
                onChange={(e) => {
                  // Add photo
                  console.log("object", e);
                  alert("Ajout de photo non implémenté ici.");
                }}
              />
            </label>
          </div>
        </li>
        <li>
          <span className="font-semibold mr-3">Musique :</span>
          <div className="flex items-center gap-2 mt-2">
            {data.music && URL.createObjectURL(data.music) ? (
              <>
                <audio
                  controls
                  src={data.music && URL.createObjectURL(data.music)}
                  className="w-1/2"
                />
                <button
                  type="button"
                  className="ml-2 px-2 py-1 text-xs bg-gray-200 rounded hover:bg-gray-300 transition"
                  onClick={() => {
                    // Remove music
                    alert(
                      "Suppression/modification de la musique non implémentée ici."
                    );
                  }}
                >
                  Modifier
                </button>
              </>
            ) : (
              <label className="px-2 py-1 text-xs bg-blue-100 rounded cursor-pointer hover:bg-blue-200 transition">
                Ajouter une musique
                <input
                  type="file"
                  accept="audio/*"
                  className="hidden"
                  onChange={(e) => {
                    // Add music
                    console.log("object", e);
                    alert("Ajout de musique non implémenté ici.");
                  }}
                />
              </label>
            )}
          </div>
        </li>
        <li>
          <span className="font-semibold mr-3">Message :</span> {data.message}
        </li>
      </ul>

      <div className="flex w-full justify-between items-center gap-4">
        <button
          onClick={prev}
          className="px-5 py-2 cursor-pointer bg-gray-200 text-gray-800 rounded-lg font-medium shadow hover:bg-gray-300 transition"
        >
          Précédent
        </button>
        <button
          onClick={handleSubmit}
          className="px-5 py-2 cursor-pointer bg-green-600 text-white rounded-lg font-medium shadow hover:bg-green-500 transition"
        >
          Générer le message
        </button>
      </div>
    </div>
  );
};

export default Step5;
