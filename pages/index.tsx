import Head from "next/head";
import Image from "next/image";

// Fonts
import { Roboto_Slab } from "@next/font/google";
const robotoSlab = Roboto_Slab({ subsets: ["latin"] });

// Assets
import logo from "@/assets/logo.svg";
import wordmark from "@/assets/wordmark.svg";

// Components
// import Waitlist from "@/components/Waitlist";

// Styles
import styles from "@/styles/Home.module.css";

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
          <div className={styles.logomark}>
            <Image
              src={logo}
              alt="Notify logo"
              className={styles.logomark__logo}
              width={385}
              height={88}
            />
            <Image
              src={wordmark}
              alt="Notify wordmark"
              className={styles.logomark__wordmark}
              width={255}
              height={88}
            />
          </div>
          <div className={robotoSlab.className}>
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
          </div>
        </header>

        {/* <Waitlist /> */}
      </main>
    </>
  );
}
