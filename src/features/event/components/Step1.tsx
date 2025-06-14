import type { FormDataType } from "@/features/event/components/CreateEventForm";

type Props = {
  next: () => void;
  data: FormDataType;
  updateForm: (updates: Partial<FormDataType>) => void;
};

const Step1 = ({ next, data, updateForm }: Props) => {
  return (
    <div className="space-y-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-700">
        Créer un message festif
      </h2>

      <div className="space-y-4">
        <input
          type="text"
          placeholder="Occasion (ex: Joyeux Anniversaire)"
          value={data.occasion}
          onChange={(e) => updateForm({ occasion: e.target.value })}
          className="w-full border p-2 rounded"
        />

        <select
          value={data.category}
          onChange={(e) => updateForm({ category: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Sélectionner un type</option>
          <option value="anniversaire">Anniversaire</option>
          <option value="félicitations">Félicitations</option>
          <option value="naissance">Naissance</option>
        </select>

        <select
          value={data.duration}
          onChange={(e) => updateForm({ duration: e.target.value })}
          className="w-full border p-2 rounded"
        >
          <option value="">Durée</option>
          <option value="30s">30s</option>
          <option value="1min">1 min</option>
          <option value="2min">2 min</option>
        </select>
      </div>

      <div className="flex justify-end">
        <button
          onClick={next}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Step1;
