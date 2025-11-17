import nodemailer from 'nodemailer';

// Send Password email
export async function sendOTPEmail(email, otp) {
 // Create transporter (configure with your email service)
 const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
   user: process.env.EMAIL_USER,
   pass: process.env.EMAIL_PASS,
  },
 });
  
 await transporter.verify();

 // Email options - Use display name instead of different email
 const mailOptions = {
  from: `Wetechhouse Support <${process.env.EMAIL_USER}>`, // This will show as "Wetechhouse Support"
  to: email,
  subject: 'Verify Your Email - Wetechhouse',
  text: `Your OTP is: ${otp}\n\n For email verification.`,
  html: `
       <!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>OTP Verification - Wetechhouse</title>
  </head>
  <body style="font-family: Arial, sans-serif; background-color: #f4f4f4; margin: 0; padding: 40px;">
    <table width="100%" cellpadding="0" cellspacing="0">
      <tr>
        <td align="center">
          <div style="font-size: 24px; font-weight: bold; color: #e92e3e; margin-bottom: 20px;">Wetechhouse</div>
          <table width="600" cellpadding="0" cellspacing="0" style="background-color: #ffffff; border-radius: 8px; padding: 40px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
            <tr>
              <td align="center" style="font-size: 18px; color: #333333;">
                <p>Your one-time verification code:</p>
                <p style="font-size: 32px; font-weight: bold; margin: 20px 0; color: #e92e3e;">${otp}</p>
                <p style="font-size: 14px; color: #555;">
                  This code expires after 15 minutes. If you did not request this, please ignore this email.
                </p>
              </td>
            </tr>
          </table>
          <p style="margin-top: 20px; font-size: 12px; color: #999;">
            This message was sent from Wetechhouse Support.
          </p>
        </td>
      </tr>
    </table>
  </body>
</html>
     `,
 };

 // Send email
 await transporter.sendMail(mailOptions);
}