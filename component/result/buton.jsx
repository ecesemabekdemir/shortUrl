"use client";

export default async function CopyToClipboard({ long_url }) {
  function handleCopy() {
    navigator.clipboard.writeText(long_url);
  }
  return (
    <>
      <button onClick={handleCopy}>Copied</button>
    </>
  );
}
