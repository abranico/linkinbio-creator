import { FormEvent, useState } from "react";
import { useLinkinbioContext } from "../context/linkinbio.context";

export default function AddLink() {
  const { addLink } = useLinkinbioContext();
  const [social, setSocial] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [error, setError] = useState(false);

  const validateLinkBySocial = (social: string, link: string): boolean => {
    const socialPatterns: Record<string, RegExp> = {
      instagram: /^https?:\/\/(www\.)?instagram\.com\/[A-Za-z0-9_]+/,
      twitter: /^https?:\/\/(www\.)?twitter\.com\/[A-Za-z0-9_]+/,
      linkedin: /^https?:\/\/(www\.)?linkedin\.com\/in\/[A-Za-z0-9_-]+/,
      facebook: /^https?:\/\/(www\.)?facebook\.com\/[A-Za-z0-9.]+/,
      youtube:
        /^https?:\/\/(www\.)?youtube\.com\/(channel\/|c\/|user\/)[A-Za-z0-9_-]+/,
      tiktok: /^https?:\/\/(www\.)?tiktok\.com\/@([A-Za-z0-9_.-]+)/,
      pinterest: /^https?:\/\/(www\.)?pinterest\.com\/[A-Za-z0-9_-]+/,
      other: /^(https?:\/\/)?([\w\d\-_]+\.+[A-Za-z]{2,})(\/[^\s]*)?$/,
    };

    const pattern = socialPatterns[social.toLowerCase()];
    return pattern ? pattern.test(link) : false;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(true);

    // Validaciones
    const isTitleValid = title.trim().length >= 3 && title.length <= 50;
    const isLinkValid = validateLinkBySocial(social, link);

    if (social === "" || !isTitleValid || !isLinkValid) {
      return setError(true);
    }

    addLink({ id: crypto.randomUUID(), social, title, url: link });
    setSocial("");
    setTitle("");
    setLink("");
    setError(false);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-80">
      <div className="w-full flex flex-col gap-2 bg-white rounded-lg shadow-md rounded-b-none p-2">
        <select
          value={social}
          onChange={(e) => setSocial(e.target.value)}
          className={`text-black w-full p-1 border-b mb-0 ${
            error && social === "" ? "border-red-500" : "border-gray-300"
          }  focus:outline-none mb-4`}
        >
          <option value="" selected disabled>
            Social
          </option>
          <option value="instagram">Instagram</option>
          <option value="twitter">Twitter</option>
          <option value="linkedin">LinkedIn</option>
          <option value="facebook">Facebook</option>
          <option value="youtube">YouTube</option>
          <option value="tiktok">TikTok</option>
          <option value="pinterest">Pinterest</option>
          <option value="other">Other</option>
        </select>

        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Ex: My Blog"
          className={`w-full text-black p-1 border-b mb-0 ${
            error && !title.trim()
              ? "border-red-500"
              : error && (title.length < 3 || title.length > 50)
              ? "border-red-500"
              : "border-gray-300"
          }  focus:outline-none mb-4`}
        />

        <input
          type="url"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          placeholder="https://"
          className={`w-full mb-0 text-black p-1 border-b ${
            error && !validateLinkBySocial(social, link)
              ? "border-red-500"
              : "border-gray-300"
          }  focus:outline-none mb-4`}
        />
      </div>

      <div className="flex justify-center">
        <button
          type="submit"
          className="w-full bg-slate-700 text-white px-4 py-2 rounded-lg rounded-t-none shadow-md hover:bg-slate-600 transition duration-300"
        >
          Add Link
        </button>
      </div>
    </form>
  );
}
