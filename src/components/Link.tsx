import { TrashIcon } from "@heroicons/react/24/solid";
import { ILink } from "../types";
import { useLinkinbioContext } from "../context/linkinbio.context";

export function Link({ id, title, url, social }: ILink) {
  const { removeLink } = useLinkinbioContext();
  return (
    <div className="flex gap-1">
      <div className="w-80 bg-gray-100 text-gray-900 flex items-center justify-between  px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
        <div className="flex gap-2">
          <i className="fab fa-facebook text-blue-700">{social}</i>
          <span className="flex">{title}</span>
        </div>
        <button onClick={() => removeLink(id)}>
          <TrashIcon className="text-red-600 size-6 hover:text-red-800 " />
        </button>
      </div>
    </div>
  );
}
