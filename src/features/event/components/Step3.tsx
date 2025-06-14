import type { FormDataType } from "@/features/event/components/CreateEventForm";

type Props = {
  next: () => void;
  prev: () => void;
  data: FormDataType;
  updateForm: (updates: Partial<FormDataType>) => void;
};

const Step3 = ({ next, prev, updateForm }: Props) => {
  const handleMusicChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      updateForm({ music: e.target.files[0] });
    }
  };

  return (
    <div className="space-y-6 bg-white p-6 rounded shadow">
      <h2 className="text-xl font-semibold text-gray-700">
        Choisissez une musique
      </h2>
      <input
        type="file"
        accept="audio/*"
        onChange={handleMusicChange}
        className="block w-full border p-2 rounded"
      />

      <div className="flex justify-between">
        <button
          onClick={prev}
          className="px-4 py-2 bg-gray-300 text-gray-800 rounded hover:bg-gray-400"
        >
          Précédent
        </button>
        <button
          onClick={next}
          className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
        >
          Suivant
        </button>
      </div>
    </div>
  );
};

export default Step3;
