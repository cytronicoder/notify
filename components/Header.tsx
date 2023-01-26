import Head from "next/head";

export default function Header() {
  return (
    <Head>
      <title>Notify</title>
      <meta
        name="description"
        content="Write a note for someone to sign or leave a message for someone to read."
      />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta name="theme-color" content="#e75a70" />

      {/* Favicons */}
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

      {/* Open Graph */}
      <meta property="og:title" content="Notify" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://notify.cytronicoder.com" />
      <meta
        property="og:description"
        content="Write a note for someone to sign or leave a message for someone to read."
      />
      <meta
        property="og:image"
        content="https://notify.cytronicoder.com/og-image.png"
      />
      <meta property="og:image:alt" content="Notify logo" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@cytronicoder" />
      <meta name="twitter:creator" content="@cytronicoder" />
      <meta name="twitter:title" content="Notify" />
      <meta
        name="twitter:description"
        content="Write a note for someone to sign or leave a message for someone to read."
      />
      <meta
        name="twitter:image"
        content="https://notify.cytronicoder.com/og-image.png"
      />
      <meta name="twitter:image:alt" content="Notify logo" />
      <meta name="twitter:url" content="https://notify.cytronicoder.com" />
    </Head>
  );
}
