import { Link } from "./Link";
import { ILinkinbio } from "../types";

interface IProps {
  data: ILinkinbio;
}

export function Linkinbio({ data }: IProps) {
  return (
    <main className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  bg-fixed bg-cover bg-no-repeat w-full text-center py-10">
      <img
        className="w-32 h-32 rounded-full mx-auto object-cover"
        src={data.img || "https://via.placeholder.com/150"}
        alt="Profile Picture"
      />
      <h2 className="text-2xl font-bold mt-4 text-white">{data.name}</h2>
      <p className="text-white mt-2">{data.description}</p>
      <div className="flex flex-col justify-center items-center gap-3  mt-4 text-white">
        {data.links.map((link) => (
          <Link
            key={link.id}
            id={link.id}
            icon={link.icon}
            title={link.title}
            url={link.url}
          />
        ))}
        <button className="w-60 bg-violet-600 text-white   px-4 py-2 rounded-lg shadow-md hover:bg-violet-800 transition duration-300">
          Add Link
        </button>
      </div>
    </main>
  );
}
