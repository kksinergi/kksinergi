import { render } from "@react-email/render";
import { BookingEmail } from "@/app/templates/email/bookingEmail";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { name, email, date, message } = await req.json();

    const [year, month, day] = date.split("-");
    const formattedDate = `${day}-${month}-${year}`;

    const htmlContent = await render(BookingEmail({ name, email, date: formattedDate, message }));

    const transporter = nodemailer.createTransport({
      host: "smtp.hostinger.com",
      port: 465,
      secure: true,
      debug: true,
      logger: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kapita Konsul" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "Terima kasih sudah menghubungi kami",
      html: htmlContent,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: (error as Error).message }, { status: 500 });
  }
}
