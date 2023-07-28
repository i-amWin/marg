import { FiSearch } from "react-icons/fi";

export default function SearchInput({ show }: { show: boolean }) {
  return (
    <div className="flex gap-1 bg-gray-800 px-2 mt-1 mb-2 mx-2 py-1.5 rounded-md justify-center items-center ring-[1.3px] ring-gray-600 focus-within:ring-gray-400">
      <input
        type="text"
        placeholder="Type to search"
        className={`outline-none bg-transparent text-sm transition-[width] duration-300 ${
          show ? "w-[190px]" : "w-0"
        }`}
      />

      <button>
        <FiSearch size={20} />
      </button>
    </div>
  );
}
