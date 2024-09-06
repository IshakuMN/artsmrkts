//app/api/send-email/route.js

import nodemailer from "nodemailer";

export async function POST(request) {
  try {
    const { name, email } = await request.json();

    // Create a transporter using your Gmail account
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER, // Your Gmail email address
        pass: process.env.GMAIL_PASS, // Your Gmail app password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.NEXT_PUBLIC_GMAIL_USER,
      to: email, // The client's email
      subject: `Hello ${name}`,
      text: `Dear ${name},\n\nThis is a test email from your Next.js app!\n\nBest regards,\nYour Company`,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ success: false, error: error.message }),
      {
        status: 500,
      },
    );
  }
}

export const sendEmail = async () => {
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
