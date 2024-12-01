"use client"; // Required for error components

export default function Error({ error, reset }) {
  return (
    <div>
      <h2>Something went wrong with your checkout session.</h2>
      <button onClick={() => reset()}>Try Again</button>
    </div>
  );
}