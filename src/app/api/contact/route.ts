import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, subject, message } = body;

    // Validate required fields
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        {
          success: false,
          message: "Please fill in all required fields",
        },
        { status: 400 }
      );
    }

    // Send to your backend API
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/contact`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone: phone || "",
        subject,
        message,
      }),
    });

    const result = await response.json();

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Your message has been sent successfully!",
      });
    } else {
      return NextResponse.json(
        {
          success: false,
          message: result.message || "Failed to send message",
        },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      {
        success: false,
        message: "An error occurred. Please try again later.",
      },
      { status: 500 }
    );
  }
}
