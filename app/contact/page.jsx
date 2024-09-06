// components/SendEmailButton.js

"use client";

import { useState } from "react";

export default function SendEmailButton() {
  const [loading, setLoading] = useState(false);

  const sendEmail = async () => {
    setLoading(true);

    const response = await fetch("/api/send-email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: "Client Name", // Replace with dynamic data
        email: "marchishaku@gmail.com", // Replace with dynamic data
      }),
    });

    const result = await response.json();

    setLoading(false);

    if (result.success) {
      alert("Email sent successfully!");
    } else {
      alert("Failed to send email: " + result.error);
    }
  };

  return (
    <div>أهلاً بك</div>
    // <button onClick={sendEmail} disabled={loading}>
    //   {loading ? "Sending..." : "Send Email"}
    // </button>
  );
}
