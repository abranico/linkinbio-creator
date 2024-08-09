import { Link } from "./Link";
import { ILinkinbio } from "../types";
import AddLink from "./AddLink";

interface IProps {
  data: ILinkinbio;
}

export function Linkinbio({ data }: IProps) {
  return (
    <main className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500  bg-fixed bg-cover bg-no-repeat w-full text-center py-10">
      <img
        className="w-32 h-32 rounded-full mx-auto object-cover"
        src={data.img ? "" : "https://unavatar.io/banner.png"}
        alt="Profile Picture"
      />
      <h2 className="text-2xl font-bold mt-4 text-white">
        {data.name || "John Doe"}
      </h2>
      <p className="text-white mt-2">
        {data.description || "Web Developer | Tech Enthusiast | Blogger"}
      </p>
      <div className="flex flex-col justify-center items-center gap-3  mt-4 text-white">
        {data.links.map((link) => (
          <Link
            key={link.id}
            id={link.id}
            title={link.title}
            url={link.url}
            social={link.social}
          />
        ))}
        <AddLink />
      </div>
    </main>
  );
}
