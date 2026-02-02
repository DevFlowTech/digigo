"use server";

export async function submitContactForm(formData: FormData) {
    const data = {
        name: formData.get("name") as string,
        email: formData.get("email") as string,
        phone: formData.get("phone") as string,
        company: formData.get("company") as string,
        sector: formData.get("sector") as string,
        message: formData.get("message") as string,
    };

    // Validate data
    if (!data.name || !data.email || !data.phone || !data.message) {
        return {
            success: false,
            error: "Please fill in all required fields.",
        };
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        return {
            success: false,
            error: "Please enter a valid email address.",
        };
    }

    try {
        // TODO: Implement email sending with Nodemailer or Resend
        // For now, we'll just log the data and return success
        console.log("Contact form submission:", data);

        // In production, you would send an email here:
        /*
        const nodemailer = require('nodemailer');
        const transporter = nodemailer.createTransport({
          host: process.env.SMTP_HOST,
          port: process.env.SMTP_PORT,
          secure: true,
          auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
          },
        });
    
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: 'info@digigo.com',
          subject: `New Contact Form Submission from ${data.name}`,
          html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${data.name}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Phone:</strong> ${data.phone}</p>
            <p><strong>Company:</strong> ${data.company}</p>
            <p><strong>Sector:</strong> ${data.sector}</p>
            <p><strong>Message:</strong></p>
            <p>${data.message}</p>
          `,
        });
    
        // Send auto-reply to user
        await transporter.sendMail({
          from: process.env.SMTP_FROM,
          to: data.email,
          subject: 'Thank you for contacting DIGIGO',
          html: `
            <h2>Thank you for your inquiry!</h2>
            <p>Dear ${data.name},</p>
            <p>We have received your message and will get back to you within 24 hours.</p>
            <p>Best regards,<br>DIGIGO Team</p>
          `,
        });
        */

        return {
            success: true,
            message: "Thank you for your inquiry! We'll get back to you within 24 hours.",
        };
    } catch (error) {
        console.error("Error submitting contact form:", error);
        return {
            success: false,
            error: "An error occurred. Please try again later or contact us directly.",
        };
    }
}
