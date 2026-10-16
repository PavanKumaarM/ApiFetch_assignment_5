
import React from "react";
import "./ErrorPage.css";

function ErrorPage({ code, message }) {
  return (
    <div className="error-container">
      <h1>{code}</h1>
      <h2>{message}</h2>
      <p>Something went wrong!</p>
      <button onClick={() => window.location.reload()}>
        Try Again
      </button>
    </div>
  );
}

export default ErrorPage;
