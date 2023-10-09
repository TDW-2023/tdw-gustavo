import Image from "next/image";
import styles from "../src/app/page.module.scss";
import React from "react";
export default function TeamFortaleza() {
  return (
    <main className={styles.fortalezaPage}>
      <header>
        <h1>Fortaleza Esporte Clube</h1>
        <Image
          src="/fortaleza.png"
          alt="Escudo do Fortaleza"
          className={styles.vercelLogo}
          width={100}
          height={100}
          priority
        />
      </header>

      <section>
        <h2>Sobre o Fortaleza</h2>
        <p>
          O Fortaleza Esporte Clube é um clube de futebol brasileiro sediado em
          Fortaleza, no estado do Ceará. Fundado em 1918, é um dos clubes mais
          tradicionais do Nordeste.
        </p>
      </section>

      <section>
        <h2>Principais Conquistas</h2>
        <ul className={styles.fortalezaConquers}>
          <li>Campeonato Brasileiro Série B: 2018</li>
          <li>Copa do Nordeste: 1960, 1964, 1966, 1971, 2000, 2019</li>
          <li>Copa dos Campeões Cearenses: 2002</li>
        </ul>
      </section>

      <section>
        <h2>Estádio</h2>
        <p>
          O Fortaleza manda seus jogos no estádio Castelão, com capacidade para
          aproximadamente 63.903 torcedores.
        </p>
      </section>
      <footer className={styles.fortalezaFooter}>
        <p>
          Para mais informações, visite o site oficial do{" "}
          <a href="https://www.fortalezaec.net/" target="_blank">
            Fortaleza Esporte Clube
          </a>
          .
        </p>
      </footer>
    </main>
  );
}
