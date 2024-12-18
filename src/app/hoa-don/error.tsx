"use client"; // Required for error components

export default function Error() {
  return (
    <div>
      <h2>Something went wrong with your checkout session.</h2>
      <button
        onClick={() => {
          console.log("Try again");
        }}
      >
        Try Again
      </button>
    </div>
  );
}
