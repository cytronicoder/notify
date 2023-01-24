import React, { useState } from "react";

// Styles
import styles from "../styles/Waitlist.module.css";

function Form() {
  const [email, setEmail] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    let response = await fetch("/api/waitlist", {
      method: "POST",
      body: JSON.stringify({ email: email }),
    });
    if (response.ok) {
      setHasSubmitted(true);
    } else {
      setError(await response.text());
    }
  };

  // On submit, display a success message
  if (hasSubmitted) {
    return (
      <div className={styles.formWrapper}>
        <span className={styles.subtitle}>
          Thanks for signing up! We will be in touch soon.
        </span>
      </div>
    );
  }
  
  return (
    <form className={styles.formWrapper} onSubmit={submit}>
      <input
        type="email"
        required
        placeholder="Email"
        className={[styles.formInput, styles.formTextInput].join(" ")}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <button
        type="submit"
        className={[styles.formInput, styles.formSubmitButton].join(" ")}
      >
        Join the waitlist
      </button>

      {error ? <div className={styles.error}>{error}</div> : null}
    </form>
  );
}

export default function Waitlist() {
  return (
    <div className={styles.waitlist}>
      <h2 className={styles.title}>Join the waitlist</h2>
      <p className={styles.subtitle}>
        We are currently in private beta. Join the waitlist and be the first to
        know when we launch.
      </p>
      <Form />
    </div>
  );
}
