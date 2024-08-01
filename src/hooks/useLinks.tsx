import { ChangeEvent, useState } from "react";
import { ILinkinbio } from "../types";

export default function useLinks() {
  const [linkinbio, setLinkinbio] = useState<ILinkinbio>({
    img: "",
    name: "",
    description: "",
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

  return { linkinbio, handleChange };
}
