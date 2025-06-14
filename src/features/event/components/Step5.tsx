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
    <div className="space-y-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-700">Aperçu du message</h2>

      <ul className="space-y-2 text-sm">
        <li>
          <strong>Occasion :</strong> {data.occasion}
        </li>
        <li>
          <strong>Catégorie :</strong> {data.category}
        </li>
        <li>
          <strong>Durée :</strong> {data.duration}
        </li>
        <li>
          <strong>Photos :</strong> {data.photos.length} image(s)
        </li>
        <li>
          <strong>Musique :</strong> {data.music?.name || "Non ajoutée"}
        </li>
        <li>
          <strong>Message :</strong> {data.message}
        </li>
      </ul>

      <div className="flex justify-between">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Précédent
        </button>
        <button
          onClick={handleSubmit}
          className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-500"
        >
          Générer le message
        </button>
      </div>
    </div>
  );
};

export default Step5;
