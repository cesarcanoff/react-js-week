import { useState } from "react";
import Header from "../../components/Header";
import { Logo } from "../../components/Logo";
import { Input } from "../../components/Input";

import { MdAddLink } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

import { db } from "../../services/firebaseConnection";
import {
  addDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  doc,
  deleteDoc,
} from "firebase/firestore";

import { toast } from "'react-toastify";

import "./style.css";

export default function Admin() {
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#000");

  function handleRegister(e) {
    e.preventDefault();

    if (nameInput === "" || urlInput === "") {
      toast.warn("Preencha todos os campos!");
      return;
    }

    addDoc(collection(db, "links"), {
      name: nameInput,
      url: urlInput,
      bg: backgroundColorInput,
      color: textColorInput,
      created: new Date(),
    })
      .then(() => {
        setNameInput("");
        setUrlInput("");
        toast.success("Link cadastrado com sucesso.");
      })
      .catch((error) => {
        toast.error("Erro ao cadastrar o link.", error);
      });
  }

  return (
    <div className="admin-container">
      <Header />
      <Logo />

      <form className="form" onSubmit={handleRegister}>
        <label className="label">Nome do Link</label>
        <Input
          placeholder="Nome..."
          value={nameInput}
          onChange={(e) => setNameInput(e.target.value)}
        />

        <label className="label">Nome do Link</label>
        <Input
          placeholder="URL..."
          value={urlInput}
          onChange={(e) => setUrlInput(e.target.value)}
        />

        <section className="container-colors">
          <div>
            <label className="label right">Fundo do Link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={(e) => setBackgroundColorInput(e.target.value)}
            />
          </div>
          <div>
            <label className="label right">Cor do Link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={(e) => setTextColorInput(e.target.value)}
            />
          </div>
        </section>

        {nameInput !== "" && (
          <div className="preview">
            <label className="label">Veja como está ficando</label>
            <article
              className="list"
              style={{
                marginTop: 8,
                marginBottom: 8,
                backgroundColor: backgroundColorInput,
              }}
            >
              <p style={{ color: textColorInput }}>{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#fff" />
        </button>
      </form>

      <h2 className="title">My Links</h2>

      <article
        className="list animate-pop"
        style={{ backgroundColor: "#000", color: "#fff" }}
      >
        <p>Grupo Exclusivo no Telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color="#fff" />
          </button>
        </div>
      </article>
    </div>
  );
}
