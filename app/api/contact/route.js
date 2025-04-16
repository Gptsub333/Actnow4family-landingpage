import nodemailer from 'nodemailer';



export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, phone, insuranceType, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: "shivam@holbox.ai",
        pass: "xqvn luew sysm vbyt",
      },
    });

    await transporter.sendMail({
      from: `"Website Contact Form" <${process.env.SMTP_USER}>`,
      to: 'shivam@holbox.ai',
      subject: 'New Contact Form Submission',
      html: `
        <h2>New Message from Actnow4family Website</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Insurance Type:</strong> ${insuranceType}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    });

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
    });
  } catch (error) {
    console.error('Email Error:', error);
    return new Response(JSON.stringify({ success: false, error: 'Failed to send email' }), {
      status: 500,
    });
  }
}
