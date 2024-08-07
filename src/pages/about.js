// src/pages/about.js
import styles from '../styles/About.module.css';

export default function About() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>About Me</h1>
        <p className={styles.description}>
          I'm a MERN stack developer passionate about building web applications.
        </p>
      </main>
    </div>
  );
}
