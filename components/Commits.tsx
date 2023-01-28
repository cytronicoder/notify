import React, { useState, useEffect } from "react";

// Styles
import styles from "@/styles/Commits.module.css";

// Components
import Loading from "@/components/Loading";

export default function Commits() {
  const [commits, setCommits] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const getCommits = async () => {
    // Reset error and loading state
    setLoading(true);
    setError("");

    // Send email to API
    let response = await fetch("/api/commits");

    // Reset loading state
    setLoading(false);

    // If the email was sent successfully, display a success message
    // Otherwise, display an error message
    if (response.ok) {
      setCommits(await response.json());
    } else {
      setError(await response.text());
    }
  };

  useEffect(() => {
    getCommits();
  }, []);

  // While loading, display a loading message
  if (loading) {
    return (
      <div className={styles.commitsWrapper}>
        <Loading />
      </div>
    );
  }

  // On submit, display a success message
  if (error) {
    return (
      <div className={styles.commitsWrapper}>
        <span className={styles.subtitle}>{error}</span>
      </div>
    );
  }

  return (
    <div className={styles.commitsWrapper}>
      <h1 className={styles.title}>Recent Commits</h1>

      <div className={styles.grid}>
        {commits.slice(0, 3).map((commit: any) => (
          <a
            key={commit.sha}
            href={commit.html_url}
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>{commit.commit.message}</h2>
            <p>{commit.commit.author.name}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
