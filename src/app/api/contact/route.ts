import { NextRequest, NextResponse } from "next/server";

interface ContactFormData {
  name: string;
  email: string;
  company: string;
  service: string;
  message: string;
}

/**
 * POST /api/contact
 * Handles contact form submissions
 *
 * IMPORTANT: Configure email service before deploying
 * Options:
 * - SendGrid: https://sendgrid.com/
 * - Mailgun: https://www.mailgun.com/
 * - Resend: https://resend.com/
 * - Gmail with nodemailer
 */
export async function POST(request: NextRequest) {
  try {
    const data: ContactFormData = await request.json();

    // Validate required fields
    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 }
      );
    }

    // TODO: Integrate with email service
    // Example with SendGrid:
    /*
    const sgMail = require('@sendgrid/mail');
    sgMail.setApiKey(process.env.SENDGRID_API_KEY);
    
    const msg = {
      to: 'hola@limen.com',
      from: 'noreply@limen.com',
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
      replyTo: data.email,
    };

    await sgMail.send(msg);
    */

    // For now, just log the data
    console.log("Contact form submission:", data);

    // Return success response
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
