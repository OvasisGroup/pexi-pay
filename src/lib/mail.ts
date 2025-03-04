import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.zoho.com",
  port: 465,
  secure: true,
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
  const html = buildHtml({ email, name, subject, message: text });
  try {
    const info = await transporter.sendMail({
      from: process.env.MAIL_USER!,
      to: process.env.MAIL_USER!,
      subject: `New Contact Form Submission: ${subject}`,
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
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
      <h2 style="color: #04097d;">${opts.subject}</h2>
      
      <p>Dear <strong>PexiPay Team</strong>,</p>
      
      <p><strong>${opts.name}</strong> has reached out via the contact form on your website.</p>
      
      <div style="background-color: #f5f5f5; padding: 15px; border-radius: 5px; margin: 20px 0;">
        <h3 style="color: #04097d; margin-top: 0;">Message Details:</h3>
        <p><strong>From:</strong> ${opts.name}</p>
        <p><strong>Email:</strong> ${opts.email}</p>
        <p><strong>Subject:</strong> ${opts.subject}</p>
        <p><strong>Message:</strong></p>
        <p>${opts.message}</p>
      </div>

      <p>Best regards,<br>
      PEXI LABS<br>
      <a href="mailto:info@pexipay.com" style="color: #04097d;">info@pexipay.com</a></p>
    </div>
  `;
};
