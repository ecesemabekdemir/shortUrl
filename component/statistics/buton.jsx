"use client";
import "./result.css";

export default async function CopyToClipboard({ long_url }) {
  function handleCopy() {
    navigator.clipboard.writeText(long_url);
  }
  return (
    <>
      <button className="copyBtn" onClick={handleCopy}>
        Copied
      </button>
    </>
  );
}
