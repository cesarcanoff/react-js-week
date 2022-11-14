import React from "react";
import "./home.css";

import { Social } from "../../components/Social";

import { FaGithub, SiGmail, FaLinkedin } from "react-icons";

export default function Home() {
  return (
    <div className="home-container">
      <h1>César Canoff</h1>
      <span>See my links 👇</span>

      <main className="links">
        <section className="link-area">
          <a href="#">
            <p className="link-text">GitHub</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">Gmail</p>
          </a>
        </section>
        <section className="link-area">
          <a href="#">
            <p className="link-text">LinkedIn</p>
          </a>
        </section>
        <footer>
          <Social url="https://www.github.com/cesarcanoff">
            <FaGithub size={35} color="#fff" />
          </Social>
          <Social url="mailto:canoff.cesar@gmail.com">
            <SiGmail size={35} color="#fff" />
          </Social>
          <Social url="https://www.linkedin.com/in/cesarcanoff">
            <FaLinkedin size={35} color="#fff" />
          </Social>
        </footer>
      </main>
    </div>
  );
}
