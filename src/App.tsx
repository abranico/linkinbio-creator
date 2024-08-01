import Form from "./components/Form";
import { Linkinbio } from "./components/Linkinbio";
import useLinks from "./hooks/useLinks";

function App() {
  const { linkinbio, handleChange } = useLinks();

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
