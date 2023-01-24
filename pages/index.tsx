import Head from "next/head";
import Image from "next/image";
import { Roboto_Slab } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Notify</title>
        <meta
          name="description"
          content="Write a note for someone to sign or leave a message for someone to read."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* favicons */}
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <main className={styles.main}>
        <header className={styles.header}>
          <div className={robotoSlab.className}>
            <h1 className={styles.title}>Notify</h1>
          </div>
          <p className={styles.description}>
            Write a note for someone to sign or leave a message for someone to
            read. Currently in development. Check back soon!
          </p>
        </header>
      </main>
    </>
  );
}
