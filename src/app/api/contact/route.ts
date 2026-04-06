import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

const SMTP_HOST = process.env.SMTP_HOST;
const SMTP_PORT = Number(process.env.SMTP_PORT || 587);
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;
const EMAIL_TO = process.env.EMAIL_TO || "ivo@limen.agency";
const EMAIL_FROM = process.env.EMAIL_FROM || "noreply@limen.agency";

export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
      console.error("SMTP credentials are missing");
      return NextResponse.json(
        {
          error:
            "Email service is not configured yet. Please set SMTP_HOST, SMTP_USER, and SMTP_PASS.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: SMTP_HOST,
      port: SMTP_PORT,
      secure: SMTP_PORT === 465,
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: EMAIL_FROM,
      to: EMAIL_TO,
      replyTo: data.email,
      subject: `Nuevo mensaje de ${data.name} - ${data.service}`,
      html: `
        <h2>Nuevo mensaje de contacto</h2>
        <p><strong>Nombre:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Empresa:</strong> ${data.company}</p>
        <p><strong>Servicio:</strong> ${data.service}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${data.message.replace(/\n/g, '<br>')}</p>
      `,
    });

    return NextResponse.json(
      {
        success: true,
        message: "Gracias por tu mensaje. Te contactaremos pronto.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact form error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
