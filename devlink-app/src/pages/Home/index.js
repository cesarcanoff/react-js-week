import React from "react";
import "./home.css";

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
      </main>
    </div>
  );
}
