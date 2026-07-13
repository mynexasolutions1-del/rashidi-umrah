"use client";

import { useEffect } from "react";
import styles from "@/app/home.module.css";

declare global {
  interface Window {
    instgrm?: {
      Embeds: { process: () => void };
    };
  }
}

const reelPermalinks = [
  "https://www.instagram.com/reel/DT7wEQoiBwK/",
  "https://www.instagram.com/reel/DT5IuO2CAp-/",
  "https://www.instagram.com/reel/DT5IYxbiA48/",
];

function ReelEmbed({ permalink }: { permalink: string }) {
  const link = `${permalink}?utm_source=ig_embed&utm_campaign=loading`;

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-captioned=""
      data-instgrm-permalink={link}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: 3,
        boxShadow:
          "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
        margin: 1,
        maxWidth: 540,
        minWidth: 326,
        padding: 0,
        width: "99.375%",
      }}
    >
      <div style={{ padding: 16 }}>
        <a
          href={link}
          style={{
            background: "#FFFFFF",
            lineHeight: 0,
            padding: "0 0",
            textAlign: "center",
            textDecoration: "none",
            width: "100%",
          }}
          target="_blank"
          rel="noopener noreferrer"
        >
          View this post on Instagram
        </a>
      </div>
    </blockquote>
  );
}

export default function InstagramReels() {
  useEffect(() => {
    const existingScript = document.getElementById("instagram-embed-script");

    if (existingScript) {
      window.instgrm?.Embeds.process();
      return;
    }

    const script = document.createElement("script");
    script.id = "instagram-embed-script";
    script.src = "https://www.instagram.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div className={styles["reels-grid"]}>
      {reelPermalinks.map((permalink) => (
        <div key={permalink} className={styles["reel-item"]}>
          <ReelEmbed permalink={permalink} />
        </div>
      ))}
    </div>
  );
}
