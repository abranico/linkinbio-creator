import { ChangeEvent, useState } from "react";
import { ILink, ILinkinbio } from "../types";

export default function useLinks() {
  const [linkinbio, setLinkinbio] = useState<ILinkinbio>({
    img: "",
    name: "",
    description: "",
    links: [
      {
        id: "string",
        social: "string",
        url: "https://google.com",
        title: "string",
      },
    ],
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

  const addLink = ({ id, social, title, url }: ILink) => {
    const newLink = {
      id,
      social,
      url,
      title,
    };
    setLinkinbio((prevLinkinbio) => ({
      ...prevLinkinbio,
      links: [...prevLinkinbio.links, newLink],
    }));
  };

  const removeLink = (id: string) => {
    setLinkinbio((prevLinkinbio) => ({
      ...prevLinkinbio,
      links: prevLinkinbio.links.filter((link) => link.id !== id),
    }));
  };

  return { linkinbio, handleChange, addLink, removeLink };
}
