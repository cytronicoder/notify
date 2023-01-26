import Image from "next/image";

// Assets
import logo from "@/assets/logo.svg";
import wordmark from "@/assets/wordmark.svg";

// Components
import Header from "@/components/Header";
import Waitlist from "@/components/Waitlist";

// Styles
import styles from "@/styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header />

      <main className={styles.main}>
        <header className={styles.header}>
          <div className={styles.logomark}>
            <Image
              src={logo}
              alt="Notify logo"
              className={styles.logomark__logo}
              width={80}
              height={66}
            />
            <Image
              src={wordmark}
              alt="Notify wordmark"
              className={styles.logomark__wordmark}
              width={196}
              height={66}
            />
          </div>
          <p className={styles.description}>
            Write a note for someone to sign or leave a message for someone to
            read. Currently in development. Meanwhile, you can{" "}
            <a
              href="https://github.com/cytronicoder/notify"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.underline_onhover}
            >
              check out our GitHub repository.
            </a>
          </p>
        </header>

        <Waitlist />
      </main>
    </>
  );
}
