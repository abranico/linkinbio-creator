import { TrashIcon } from "@heroicons/react/24/solid";
import { PencilIcon } from "@heroicons/react/16/solid";
import { ILink } from "../types";

export function Link({ id, icon, title, url }: ILink) {
  return (
    <div className="flex gap-1">
      <a
        href="#"
        className="w-60 bg-gray-100 text-gray-900 flex items-center justify-between  px-4 py-2 rounded-lg shadow-md hover:bg-gray-200 transition duration-300"
      >
        <div className="flex gap-2">
          <i className="fab fa-facebook text-blue-700">asd</i>
          <span className="flex">{title}</span>
        </div>
        <i className="fas fa-arrow-right text-gray-500">asd</i>
      </a>
      {/* <button>
        <TrashIcon className="size-6 text-white" />
      </button>
      <button>
        <PencilIcon className="size-6 text-white" />
      </button> */}
    </div>
  );
}
