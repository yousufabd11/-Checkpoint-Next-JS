// src/pages/projects.js
import styles from '../styles/Projects.module.css';

export default function Projects() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>My Projects</h1>
        <p className={styles.description}>
          Here are some of my recent projects.
        </p>
      </main>
    </div>
  );
}
