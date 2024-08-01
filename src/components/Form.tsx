import { ChangeEvent, useState } from "react";

interface IProps {
  handleChange: (
    e: ChangeEvent<HTMLInputElement>,
    name: "name" | "description"
  ) => void;
  name: string;
  description: string;
}

export default function Form({ handleChange, name, description }: IProps) {
  const [descriptionCurrentLength, setDescriptionCurrentLength] = useState(0);
  console.log(descriptionCurrentLength);
  return (
    <form className="px-10">
      <div className="mt-2 w-full text-left">
        <label
          form="modern-input"
          className="block text-gray-700 font-bold mb-2"
        >
          Name:
        </label>
        <input
          id="modern-input"
          type="text"
          placeholder="John Doe"
          maxLength={32}
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
        <div className="relative">
          <input
            id="modern-input"
            type="text"
            placeholder="Web Developer | Tech Enthusiast | Blogger"
            maxLength={64}
            value={description}
            onChange={(e) => {
              handleChange(e, "description");
              setDescriptionCurrentLength(e.target.value.length);
            }}
            className="w-full pr-16 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent transition duration-300"
          />
          <span className="absolute right-2 bottom-2 text-gray-400 text-sm  px-2 py-1 ">
            {descriptionCurrentLength}/64
          </span>
        </div>
      </div>
      <button className="font-semibold mt-8 w-full bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-green-300">
        Create
      </button>
    </form>
  );
}
