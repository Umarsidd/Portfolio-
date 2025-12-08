import nodemailer from 'nodemailer';
import mongoose from 'mongoose';
import Contact from '../models/Contact.js';

// Create transporter for sending emails
const createTransporter = () => {
  // Debug: Log environment variable status
  console.log('🔍 Checking email configuration...');
  console.log(`   EMAIL_USER: ${process.env.EMAIL_USER ? '✅ Set' : '❌ Not set'}`);
  console.log(`   EMAIL_PASS: ${process.env.EMAIL_PASS ? '✅ Set' : '❌ Not set'}`);

  // Check if email credentials are configured
  if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
    console.log('📧 Email not configured - contact form will log messages only');
    return null;
  }

  console.log('✅ Email configured - emails will be sent via Gmail');

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

export const saveContactMessage = async (messageData) => {
  try {
    const newContact = new Contact(messageData);
    await newContact.save();
    console.log('✅ Message saved to database');
    return true;
  } catch (error) {
    console.error('❌ Error saving message to database:', error);
    return false;
  }
};

export const sendContactEmail = async (req, res, next) => {
  try {
    const { name, email, subject, message } = req.body;

    // Log the contact message
    console.log('\n📬 New Contact Form Submission:');
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log(`👤 Name: ${name}`);
    console.log(`📧 Email: ${email}`);
    console.log(`📋 Subject: ${subject}`);
    console.log(`💬 Message: ${message}`);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n');

    // Save to Database
    await saveContactMessage({ name, email, subject, message });

    const transporter = createTransporter();

    // If transporter is not configured, just return success
    if (!transporter) {
      return res.status(200).json({
        success: true,
        message: 'Message saved! (Email services not configured)',
      });
    }

    // Email to you (recipient)
    const mailOptionsToYou = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'mohdumar4253@gmail.com',
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">New Contact Form Submission</h2>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 1px solid #e5e7eb; margin: 15px 0;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p style="color: #6b7280; font-size: 14px;">
            This email was sent from your portfolio website contact form.
          </p>
        </div>
      `,
    };

    // Auto-reply to the sender
    const mailOptionsToSender = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Thank you for contacting me!',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #3b82f6;">Thank You for Reaching Out!</h2>
          <p>Hi ${name},</p>
          <p>Thank you for your message. I've received your email and will get back to you as soon as possible.</p>
          <div style="background-color: #f3f4f6; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>Your Message:</strong></p>
            <p style="white-space: pre-wrap;">${message}</p>
          </div>
          <p>Best regards,<br><strong>Mohd Umar Siddiqui</strong><br>Full Stack Developer</p>
          <hr style="border: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            Email: mohdumar4253@gmail.com<br>
            Phone: 9506425353<br>
            GitHub: github.com/Umarsid
          </p>
        </div>
      `,
    };

    // Send both emails
    await Promise.all([
      transporter.sendMail(mailOptionsToYou),
      transporter.sendMail(mailOptionsToSender),
    ]);

    res.status(200).json({
      success: true,
      message: 'Message sent successfully! I will get back to you soon.',
    });
  } catch (error) {
    console.error('❌ Error sending email:', error);
    next(error);
  }
};
