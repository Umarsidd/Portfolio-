# Quick Setup Guide - Nodemailer Contact Form

## ✅ What's Been Done

1. ✅ **Frontend updated** - Now uses your Nodemailer backend instead of EmailJS
2. ✅ **MongoDB made optional** - Server works without database
3. ✅ **Backend already configured** - All routes and email logic ready

## 🚀 Next Steps

### Step 1: Configure Email (Required for sending emails)

You need to add your Gmail credentials to the `.env` file:

```env
# Email Configuration
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_16_character_app_password
EMAIL_TO=mohdumar4253@gmail.com
```

### Step 2: Get Gmail App Password

> [!IMPORTANT]
> You **CANNOT** use your regular Gmail password. You must create an App Password.

#### Quick Steps:

1. **Enable 2-Step Verification** (if not already enabled)
   - Go to: https://myaccount.google.com/security
   - Click "2-Step Verification"
   - Follow the setup wizard

2. **Generate App Password**
   - After enabling 2-Step Verification, go back to: https://myaccount.google.com/security
   - Scroll down and click "App passwords" (under "How you sign in to Google")
   - You may need to sign in again
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Enter name: **Portfolio Website**
   - Click **Generate**

3. **Copy the Password**
   - You'll see a 16-character password like: `abcd efgh ijkl mnop`
   - Copy it and paste in `.env` as `EMAIL_PASS` (remove spaces)
   - Example: `EMAIL_PASS=abcdefghijklmnop`

### Step 3: Restart the Server

After adding your email credentials:

```bash
# Stop the current server (Ctrl+C)
# Then restart:
npm run server
```

### Step 4: Test the Contact Form

1. Make sure frontend is running: `npm run dev`
2. Go to your portfolio contact section
3. Fill out the form and submit
4. Check your email inbox!

## 📧 What Happens When Someone Submits?

1. **Email to You**: You receive an email at `mohdumar4253@gmail.com`
2. **Auto-Reply**: The sender gets a thank you email
3. **Console Log**: Message details logged in server console
4. **Database**: Saved to MongoDB (if configured)

## ⚠️ Running Without Email Configuration

The system still works if you don't configure email:
- Messages are logged to console
- Users see success message
- No emails are sent
- Everything else works normally

Just leave `EMAIL_USER` and `EMAIL_PASS` empty or don't set them.

## 🔧 Troubleshooting

### "Invalid login" error
- Make sure you're using an **App Password**, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check that `EMAIL_USER` and `EMAIL_PASS` are correct in `.env`

### Emails not being sent
- Check server console for error messages
- Verify `.env` file is in the root directory
- Restart the server after changing `.env`

### Can't find "App Passwords" option
- You **must** enable 2-Step Verification first
- Some Google Workspace accounts may have this disabled by admin
- Try accessing directly: https://myaccount.google.com/apppasswords

## 📝 Your Current .env File Should Look Like:

```env
# Server Configuration
PORT=5001
NODE_ENV=development

# Email Configuration (for contact form)
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=your16characterapppassword
EMAIL_TO=mohdumar4253@gmail.com

# MongoDB (Optional - for storing messages)
# MONGO_URI=mongodb://localhost:27017/portfolio

# CORS
CORS_ORIGIN=http://localhost:5173
```

## 🎯 Testing Checklist

- [ ] Server starts without errors
- [ ] Frontend loads contact form
- [ ] Form submission shows success message
- [ ] Email received at mohdumar4253@gmail.com
- [ ] Sender receives auto-reply
- [ ] Server console shows message details

## 📞 Need Help?

If you're stuck on getting the App Password, I can:
1. Create a more detailed visual guide
2. Help troubleshoot specific errors
3. Provide alternative email service configurations

Just let me know what you need!
