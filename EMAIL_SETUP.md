# Email Configuration for Contact Form

The contact form requires email configuration to send messages. Follow these steps:

## Quick Setup (Copy & Paste)

1. Create a `.env` file in the root directory
2. Copy and paste this content:

```env
PORT=5001
NODE_ENV=development
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password_here
EMAIL_TO=mohdumar4253@gmail.com
CORS_ORIGIN=http://localhost:5173
```

3. Replace `your_email@gmail.com` with your Gmail address
4. Replace `your_app_password_here` with your Gmail App Password (see below)

## How to Generate Gmail App Password

### Prerequisites
- You must have 2-Step Verification enabled on your Google account

### Steps

1. **Go to Google Account Settings**
   - Visit: https://myaccount.google.com/security

2. **Enable 2-Step Verification** (if not already enabled)
   - Click on "2-Step Verification"
   - Follow the setup wizard

3. **Generate App Password**
   - After enabling 2-Step Verification, go back to Security
   - Click "App passwords" (under "How you sign in to Google")
   - You may need to sign in again

4. **Create New App Password**
   - Select app: **Mail**
   - Select device: **Other (Custom name)**
   - Enter name: **Portfolio Website**
   - Click **Generate**

5. **Copy the Password**
   - You'll see a 16-character password
   - Copy this password (it will look like: `abcd efgh ijkl mnop`)
   - Paste it in your `.env` file as `EMAIL_PASS` (remove spaces)

## Example .env File (Completed)

```env
PORT=5001
NODE_ENV=development
EMAIL_USER=youremail@gmail.com
EMAIL_PASS=abcdefghijklmnop
EMAIL_TO=mohdumar4253@gmail.com
CORS_ORIGIN=http://localhost:5173
```

## Testing the Setup

1. Start the server: `npm run server`
2. Start the frontend: `npm run dev`
3. Fill out the contact form on the website
4. Check the server console for logs
5. Check your email inbox

## What Happens When Someone Submits the Form?

1. **Email to You**: You'll receive an email at `EMAIL_TO` with the sender's details and message
2. **Auto-Reply to Sender**: The person who filled the form will receive an automatic thank you email
3. **Console Log**: Message details will be logged in the server console

## Alternative: Run Without Email

If you don't want to set up email right now:

1. The contact form will still work
2. Messages will be logged to the console
3. Users will see a success message
4. No actual emails will be sent

Just leave the EMAIL_USER and EMAIL_PASS empty or undefined.

## Troubleshooting

### "Invalid login" error
- Make sure you're using an App Password, not your regular Gmail password
- Verify 2-Step Verification is enabled
- Check that EMAIL_USER and EMAIL_PASS are correct in .env

### Emails not being sent
- Check server console for error messages
- Verify .env file is in the root directory
- Restart the server after changing .env

### App Passwords option not visible
- You must enable 2-Step Verification first
- Some Google Workspace accounts may have this disabled by admin

## Security Best Practices

✅ **DO:**
- Use App Passwords (never your actual Gmail password)
- Keep .env file in .gitignore (already done)
- Never commit .env to version control
- Use environment variables in production

❌ **DON'T:**
- Share your App Password
- Commit .env to GitHub
- Hardcode credentials in the source code

## Need Help?

If you're having trouble setting this up, contact:
- Email: mohdumar4253@gmail.com
- Phone: 9506425353
