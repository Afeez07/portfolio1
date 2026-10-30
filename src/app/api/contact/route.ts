import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, inquiryType, message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

    // If an external gateway access key is configured, attempt real remote dispatch
    if (accessKey) {
      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
          },
          body: JSON.stringify({
            access_key: accessKey,
            from_name: `${name} (Portfolio Inquiry)`,
            replyto: email,
            subject: `[Portfolio Inquiry: ${inquiryType}] from ${name}`,
            message: `Inquiry Type: ${inquiryType}\nClient Name: ${name}\nClient Email: ${email}\n\nProject Scope:\n${message}`,
          }),
        });

        const data = await response.json();
        if (data.success) {
          return NextResponse.json({
            success: true,
            integrationConfigured: true,
            message: 'Inquiry dispatched successfully. Afeez will review it within 24 hours.',
          });
        }
      } catch (err) {
        console.warn('Configured gateway dispatch error:', err);
      }
    }

    // No API key configured or external gateway call was unsuccessful
    // Accurately inform the client that backend relay is unconfigured so the user can use direct channels
    return NextResponse.json({
      success: false,
      integrationConfigured: false,
      message:
        'Direct server email relay is not configured in this environment (missing WEB3FORMS_ACCESS_KEY). Please choose one of the direct communication channels below to deliver your message immediately.',
    });
  } catch (error) {
    return NextResponse.json(
      { error: 'An unexpected error occurred while processing your inquiry.' },
      { status: 500 }
    );
  }
}
