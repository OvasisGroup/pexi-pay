import { sendEmail } from "@/lib/mail";
import { NextResponse } from "next/server";

interface JoinMailListRequest {
  email: string;
}

interface JoinMailListResponse {
  status: "success" | "error";
  message: string;
}

export async function POST(req: Request) {
  const { email }: JoinMailListRequest = await req.json();
  if (!email) {
    return NextResponse.json(
      { error: "No email was provided" },
      { status: 400 }
    );
  }

  try {
    const opts = await sendEmail(
      email,
      "New Customer",
      "Request to Join the mail List",
      "I am interested in joining the mail list"
    );
    const response: JoinMailListResponse = {
      status: "success",
      message: opts.message,
    };
    return NextResponse.json(response);
  } catch (error) {
    console.error("Error sending mail:", error);
    const response: JoinMailListResponse = {
      status: "error",
      message: "Failed to send mail",
    };
    return NextResponse.json(response, { status: 500 });
  }
}
