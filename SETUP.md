# Quick Setup Guide

## Step 1: Install Dependencies

```bash
npm install
```

## Step 2: Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```env
# Server Configuration
PORT=5000
NODE_ENV=development

# Email Configuration (Optional - for contact form to send emails)
# If not configured, contact form will work but won't send emails
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_gmail_app_password
EMAIL_TO=mohdumar4253@gmail.com

# CORS
CORS_ORIGIN=http://localhost:5173
```

### How to Get Gmail App Password:

1. Go to your Google Account: https://myaccount.google.com/
2. Click on "Security" in the left sidebar
3. Enable "2-Step Verification" if not already enabled
4. Under "2-Step Verification", scroll down to "App passwords"
5. Click "App passwords"
6. Select "Mail" and "Other (Custom name)"
7. Enter "Portfolio Website" as the name
8. Click "Generate"
9. Copy the 16-character password and use it as EMAIL_PASS

**Note:** If you skip email configuration, the contact form will still work but messages will only be logged to the console.

## Step 3: Run the Application

### Option A: Run Frontend and Backend Together (Recommended)

```bash
npm run dev:full
```

This will start:
- Frontend on http://localhost:5173
- Backend on http://localhost:5000

### Option B: Run Separately

**Terminal 1 - Frontend:**
```bash
npm run dev
```

**Terminal 2 - Backend:**
```bash
npm run server
```

## Step 4: Open in Browser

Navigate to: http://localhost:5173

## Customization

### Update Your Information

Edit `src/data/resume.js` and update:
- Personal information
- Skills
- Experience
- Projects
- Education
- Certifications

### Change Theme Colors

Edit `src/index.css` to customize the color scheme.

## Build for Production

```bash
npm run build
npm run preview
```

## Common Issues

### Port Already in Use

If port 5173 or 5000 is already in use:

```bash
# Kill process on port 5173
lsof -ti:5173 | xargs kill

# Kill process on port 5000
lsof -ti:5000 | xargs kill
```

Or change the PORT in `.env` file.

### Dependencies Installation Failed

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm cache clean --force
npm install
```

## Need Help?

Contact: mohdumar4253@gmail.com
