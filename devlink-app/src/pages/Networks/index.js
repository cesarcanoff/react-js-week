import { useState, useEffect } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/Input";
import { MdAddLink } from "react-icons/md";
import "./style.css";

import { db } from "../../services/firebaseConnection";
import { setDoc, doc, getDoc } from "../../services/firebaseConnection";

export default function Networks() {
  const [facebook, setFacebook] = useState("");
  const [instagram, setInstagram] = useState("");
  const [youtube, setYoutube] = useState("");

  useEffect(() => {
    async function loadLinks() {
      const docRef = doc(db, "socias", "link");
      await getDoc(docRef).then((snapshot) => {
        if (snapshot.data() !== undefined) {
          setFacebook(snapshot.data().facebook);
          setInstagram(snapshot.data().instagram);
          setYoutube(snapshot.data().youtube);
        }
      });
    }
  }, []);

  async function handleSave(e) {
    e.preventDefault();
    await setDoc(doc(db, "social", "link"), {
      facebook,
      instagram,
      youtube,
    });
  }

  return (
    <div className="admin-container">
      <Header />
      <h1 className="title-social">Suas redes sociais</h1>

      <form className="form" onSubmit={handleSave}>
        <label className="label">Facebook:</label>
        <Input
          placeholder="Link do Facebook"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />

        <label className="label">Instagram:</label>
        <Input
          placeholder="Link do Instagram"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />

        <label className="label">YouTube:</label>
        <Input
          placeholder="Link do YouTube"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />

        <button type="submit" className="btn-register">
          Salvar Links <MdAddLink size={24} color="#fff" />
        </button>
      </form>
    </div>
  );
}
