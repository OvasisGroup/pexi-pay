import { sendEmail } from "@/lib/mail";
import { NextResponse } from "next/server";

interface ContactFormRequest {
  email: string;
  subject: string;
  message: string;
  name: string;
}

interface ContactFormResponse {
  status: "success" | "error";
  message: string;
}

export async function POST(req: Request) {
  const { email, subject, message, name }: ContactFormRequest =
    await req.json();
  if (!email || !subject || !message || !name) {
    return NextResponse.json(
      { error: "No email or subject or name or message was provided" },
      { status: 400 }
    );
  }

  try {
    const opts = await sendEmail(email, name, subject, message);
    const response: ContactFormResponse = {
      status: "success",
      message: opts.message,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error sending mail:", error);
    const response: ContactFormResponse = {
      status: "error",
      message: "Failed to send mail",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
