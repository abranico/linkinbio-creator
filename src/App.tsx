import { ChangeEvent, useState } from "react";
import { Linkinbio } from "./components/Linkinbio";
import Form from "./components/Form";
import { ILinkinbio } from "./types";

function App() {
  const [linkinbio, setLinkinbio] = useState<ILinkinbio>({
    img: "https://unavatar.io/banner.png",
    name: "John Doe",
    description: "Web Developer | Tech Enthusiast | Blogger",
    links: [],
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement>,
    name: "name" | "description"
  ) => {
    setLinkinbio((prevData) => ({
      ...prevData,
      [name]: e.target.value,
    }));
  };

  return (
    <div className="flex justify-between ">
      <aside className="sticky top-0 h-screen w-[750px]  flex flex-col ">
        <header className="p-10 ">
          <h1 className="text-5xl font-black text-red-500">
            Link in Bio
            <span className="block text-4xl text-gray-800  font-black">
              Creator
            </span>
          </h1>
          {/* <p className="max-w-md text-gray-700 text-xl w-full mt-3">
            Crea y personaliza tu propio hub de enlaces con facilidad. Comparte
            tus enlaces favoritos en un solo lugar, de manera rápida y elegante.
          </p> */}
        </header>
        <Form
          handleChange={handleChange}
          name={linkinbio.name}
          description={linkinbio.description}
        />

        <footer className="bg-gray-600 text-gray-300 mt-auto p-5 text-center ">
          developed by{" "}
          <a href="#" className="hover:text-pink-400">
            @nicoabra
          </a>
        </footer>
      </aside>
      <Linkinbio data={linkinbio} />
    </div>
  );
}

export default App;
