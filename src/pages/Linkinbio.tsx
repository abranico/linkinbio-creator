import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../services/firebase";
import { ILinkinbio } from "../types";

export default function Linkinbio() {
  const [linkinbio, setLinkinbio] = useState<ILinkinbio | undefined>(undefined);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { id } = useParams<string>();

  const fetchSingleDocument = async (docId: string) => {
    try {
      const docRef = doc(db, "links", docId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        const data = docSnap.data();
        setLinkinbio(data as ILinkinbio);
      } else {
        setError("No such document!");
      }
    } catch (err) {
      setError("Error fetching document");
      console.error("Error fetching document: ", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (id) {
      fetchSingleDocument(id);
    }
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return linkinbio ? (
    <div>
      <h1>{linkinbio.name}</h1>
      <p>{linkinbio.description}</p>
      {/* Render other fields of ILinkinbio as needed */}
    </div>
  ) : (
    <div>Not found</div>
  );
}
