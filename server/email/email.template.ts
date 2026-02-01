export function html({ url }: { url: string }) {
  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <title>Sign in to Web Fletcher</title>
      <style>
        body {
          margin: 0;
          background: #f8f5ef;
          font-family: Arial, Helvetica, sans-serif;
          color: #2c2a24;
        }
        .container {
          max-width: 560px;
          margin: 0 auto;
          padding: 32px 20px 48px;
        }
        .card {
          background: #fffaf3;
          border: 1px solid #e3d6c1;
          border-radius: 16px;
          padding: 28px;
          box-shadow: 0 6px 18px rgba(44, 42, 36, 0.08);
        }
        .brand {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 24px;
          letter-spacing: 0.3px;
          color: #3f3a2f;
          margin: 0 0 12px;
        }
        .title {
          font-family: Georgia, "Times New Roman", serif;
          font-size: 28px;
          color: #3f3a2f;
          margin: 0 0 8px;
        }
        .subtitle {
          color: #6e6556;
          font-size: 15px;
          margin: 0 0 20px;
        }
        .button {
          display: inline-block;
          background: #7a5f3e;
          color: #ffffff !important;
          text-decoration: none;
          padding: 12px 20px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 15px;
        }
        .button:hover {
          background: #8b7355;
        }
        .meta {
          margin-top: 20px;
          font-size: 12px;
          color: #8e856f;
        }
        .footer {
          margin-top: 20px;
          font-size: 12px;
          color: #8e856f;
          text-align: center;
        }
        .code {
          word-break: break-all;
          color: #6e6556;
          font-size: 12px;
          margin-top: 10px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="card">
          <div class="brand">🏹 Web Fletcher</div>
          <h1 class="title">Sign in to Web Fletcher</h1>
          <p class="subtitle">
            Click the button below to verify your email and continue.
          </p>
          <a class="button" href="${url}" target="_blank" rel="noopener">
            Sign in with Magic Link
          </a>
          <p class="meta">This link expires in 24 hours.</p>
          <p class="code">If the button doesn’t work, copy and paste this URL:</p>
          <p class="code">${url}</p>
        </div>
        <div class="footer">
          Hand-crafted by AI · Web Fletcher
        </div>
      </div>
    </body>
  </html>
  `;
}

export function text({ url }: { url: string }) {
  return `Sign in to Web Fletcher\n\n${url}\n\nThis link expires in 24 hours.`;
}