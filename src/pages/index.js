// src/pages/index.js
import Image from 'next/image';
import styles from '../styles/Home.module.css';



export async function getServerSideProps() {
  // Simulate fetching data from an API
  const data = { name: 'Yousuf', description: 'A passionate MERN stack developer' };

  return {
    props: {
      data,
    },
  };
}

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to {data.name}'s Portfolio</h1>
        <p className={styles.description}>{data.description}</p>
        <Image src="/profile.jpg" alt="Profile Picture" width={300} height={300} />
      </main>
    </div>
  );
}
