import nodemailer from "nodemailer";

export async function POST(req) {
    try {
        const { name, email, subject, message } = await req.json();

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        await transporter.sendMail({
            from: `"${name} via Restaurant" <${process.env.EMAIL_USER}>`,
            to: process.env.RECEIVER_EMAIL,
            subject: subject,
            replyTo: email,
            html: `
                <h2>📩 پیام جدید از وب‌سایت</h2>
                <p><strong>👤 name :</strong> ${name}</p>
                <p><strong>📧 user email : </strong> ${email}</p>
                <p><strong>📝 subject : </strong> ${subject}</p>
                <hr />
                <p><strong>💬 message : </strong></p>
                <p>${message}</p>
                <hr />
                <p style="color: #666; font-size: 12px;">
                    for response click to the <i><b> Reply </b></i> to send it automatically
                </p>
            `,
        });

        return Response.json({ success: true });
    } catch (error) {
        console.error(error);
        return Response.json({ error: "Error in submit email." }, { status: 500 });
    }
}
