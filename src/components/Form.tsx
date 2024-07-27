import { ChangeEvent } from "react";

interface IProps {
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    name: "name" | "description"
  ) => void;
  name: string;
  description: string;
}

export default function Form({ handleChange, name, description }: IProps) {
  return (
    <form className="px-10">
      <div className="mt-4 w-full text-left">
        <label
          form="modern-input"
          className="block text-gray-700 font-bold mb-2"
        >
          Name:
        </label>
        <input
          id="modern-input"
          type="text"
          placeholder=""
          value={name}
          onChange={(e) => handleChange(e, "name")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition duration-300"
        />
      </div>
      <div className="mt-4 w-full text-left">
        <label
          form="modern-input"
          className="block text-gray-700 font-bold mb-2"
        >
          Description:
        </label>
        <input
          id="modern-input"
          type="text"
          placeholder=""
          value={description}
          onChange={(e) => handleChange(e, "description")}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
        />
      </div>
      <button className="mt-8 w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300">
        Create Link in Bio
      </button>
    </form>
  );
}
