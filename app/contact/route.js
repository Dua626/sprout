import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, organisation, phone, industry, message } = body;

    if (!name || !organisation || !phone || !industry || !message) {
      return Response.json({ error: 'All fields are required.' }, { status: 400 });
    }

    const { data, error } = await resend.emails.send({
      from: 'Sprouts Contact <no-reply@letssprouts.com>',
      to: ['career@letssprouts.com'],
      replyTo: undefined,
      subject: `New Enquiry from ${name} — ${organisation}`,
      html: `
        <h2 style="font-family:sans-serif;color:#243216;">New Contact Form Submission</h2>
        <table style="font-family:sans-serif;font-size:14px;border-collapse:collapse;width:100%">
          <tr><td style="padding:8px 12px;font-weight:600;color:#666;width:140px">Name</td><td style="padding:8px 12px">${name}</td></tr>
          <tr style="background:#f9f6ef"><td style="padding:8px 12px;font-weight:600;color:#666">Organisation</td><td style="padding:8px 12px">${organisation}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#666">Phone / WhatsApp</td><td style="padding:8px 12px">${phone}</td></tr>
          <tr style="background:#f9f6ef"><td style="padding:8px 12px;font-weight:600;color:#666">Industry</td><td style="padding:8px 12px">${industry}</td></tr>
          <tr><td style="padding:8px 12px;font-weight:600;color:#666;vertical-align:top">Message</td><td style="padding:8px 12px;white-space:pre-wrap">${message}</td></tr>
        </table>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return Response.json({ error: 'Failed to send email.' }, { status: 500 });
    }

    return Response.json({ success: true, id: data.id });
  } catch (err) {
    console.error('API route error:', err);
    return Response.json({ error: 'Internal server error.' }, { status: 500 });
  }
}