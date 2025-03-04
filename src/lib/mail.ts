import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST!,
  port: 465,
  secure: true, // Use true for port 465
  auth: {
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASSWORD!,
  },
});

export const sendEmail = async (
  email: string,
  name: string,
  subject: string,
  text: string
) => {
  console.log({
    user: process.env.MAIL_USER!,
    pass: process.env.MAIL_PASSWORD!,
  });
  const html = buildHtml({ email, name, subject, message: text });
  try {
    const info = await transporter.sendMail({
      from: process.env.SENDER,
      subject,
      html,
      attachments: [],
    });
    console.log("Email sent:", info);
    return {
      error: false,
      message: "Successfully contacted PexiPay",
    };
  } catch (error) {
    console.error("Error sending email:", error);
    return {
      error: true,
      message: "Error occurred while contacting PexiPay",
    };
  }
};

const buildHtml = (opts: {
  email: string;
  name: string;
  subject: string;
  message: string;
}) => {
  return `
        <h2>${opts.subject}</h2>

        <p>Dear <strong>PexiPay Team,</strong>,</p>
        <p>Dear <strong> ${opts.name},</strong> Reached out to you via the contact form on your website.</p>
        
        <p>${opts.message}</p>

        <h3 style="color: #0066cc;">Message</h3>
        <p>${opts.message}</p>

        <p>Warm regards,<br>
        PEXI LABS<br>
        info@pexipay.com</p>
      `;
};
