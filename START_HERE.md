# 🚀 START HERE - Portfolio Website

Welcome! This is your complete full-stack portfolio website.

## ✅ What's Included

- ✨ Modern React frontend with Redux state management
- 🎨 Beautiful UI with shadcn components and Tailwind CSS
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive design
- 🚀 Node.js/Express backend
- 📧 Working contact form with email notifications
- 🎭 Smooth animations with Framer Motion
- 📊 Skills visualization with progress bars
- 💼 Professional sections: About, Experience, Projects, Education

## 🎯 Resume Data Updated

✅ Your information has been added:
- **Name**: Mohd Umar Siddiqui
- **Email**: mohdumar4253@gmail.com (✅ Updated as requested)
- **MCA Duration**: 2023-2025 (✅ Updated as requested)
- **Experience**: System Engineer at TCS (3+ years)
- **Skills**: Frontend, Backend, Database, Cloud & DevOps
- **Projects**: Food Delivery App, Scholarship Portal
- **Education**: MCA (IGNOU), BCA (Lucknow University)
- **Certifications**: GCP Associate, TCS Docker League Award

## 🏃‍♂️ Quick Start (3 Steps)

### Step 1: Create Environment File

Create a file named `.env` in the root folder with this content:

```env
PORT=5001
NODE_ENV=development
EMAIL_USER=
EMAIL_PASS=
EMAIL_TO=mohdumar4253@gmail.com
CORS_ORIGIN=http://localhost:5173
```

**Note**: Email is optional. The website will work without it. To enable email, see `EMAIL_SETUP.md`

### Step 2: Start the Application

Open terminal in this folder and run:

```bash
npm run dev:full
```

This starts both frontend and backend!

### Step 3: Open in Browser

Go to: **http://localhost:5173**

## 🎨 Customization

### Update Your Content

Edit `src/data/resume.js` to change:
- Personal information
- Skills and proficiency levels
- Work experience
- Projects
- Education
- Certifications

### Change Colors

Edit `src/index.css` to customize theme colors.

### Add/Remove Sections

Edit `src/App.jsx` to add or remove sections.

## 📱 Features Showcase

### 🏠 Hero Section
- Animated introduction
- Social media links
- Call-to-action buttons
- Scroll indicator

### 👤 About Section
- Professional summary
- Highlight cards
- Contact information

### 💻 Skills Section
- Categorized skills (Frontend, Backend, Database, Cloud, Tools)
- Visual progress bars
- Animated reveals

### 💼 Experience Section
- Timeline design
- Detailed responsibilities
- Professional achievements

### 🚀 Projects Section
- Featured projects
- Technology badges
- Key highlights
- GitHub link

### 🎓 Education Section
- Academic degrees
- Certifications & awards
- Timeline display

### 📬 Contact Section
- Working contact form
- Email integration
- Form validation
- Success/error feedback

### 🌓 Theme Toggle
- Light/Dark mode
- Smooth transitions
- Persistent preference

## 📋 Available Commands

```bash
# Install dependencies (already done)
npm install

# Run frontend and backend together (recommended)
npm run dev:full

# Run frontend only
npm run dev

# Run backend only
npm run server

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌐 Ports

- **Frontend**: http://localhost:5173
- **Backend**: http://localhost:5001
- **API Endpoint**: http://localhost:5001/api

## 📚 Documentation

- `README.md` - Complete project documentation
- `SETUP.md` - Detailed setup instructions
- `EMAIL_SETUP.md` - Email configuration guide
- `START_HERE.md` - This file (quick start)

## 🔧 Technology Stack

### Frontend
- React 18 + Vite
- Redux Toolkit (state management)
- Tailwind CSS + shadcn/ui
- Framer Motion (animations)
- Lucide React (icons)

### Backend
- Node.js + Express
- Nodemailer (email)
- CORS, dotenv

## 🎯 Project Structure

```
PortPelio/
├── src/              # Frontend React code
│   ├── components/   # UI components
│   ├── data/        # Your resume data
│   ├── store/       # Redux state
│   └── lib/         # Utilities
├── server/          # Backend Node.js code
│   ├── controllers/ # Request handlers
│   ├── middleware/  # Validation, errors
│   └── routes/      # API routes
└── public/          # Static assets
```

## ✨ Key Features Implemented

✅ Modern, professional design  
✅ Dark/Light theme toggle  
✅ Fully responsive (mobile, tablet, desktop)  
✅ Redux state management  
✅ Animated sections and transitions  
✅ Working contact form with backend  
✅ Email notifications (optional)  
✅ Skills visualization  
✅ Project showcase  
✅ Experience timeline  
✅ Education & certifications  
✅ Social media integration  
✅ SEO optimized  
✅ Fast loading with Vite  

## 🚨 Common Issues & Solutions

### Port already in use
```bash
lsof -ti:5173 | xargs kill  # Kill frontend port
lsof -ti:5001 | xargs kill  # Kill backend port
```

### Missing dependencies
```bash
rm -rf node_modules package-lock.json
npm install
```

### Email not working
- It's optional! The site works without email
- See `EMAIL_SETUP.md` for full email configuration

## 📞 Support

**Mohd Umar Siddiqui**
- 📧 Email: mohdumar4253@gmail.com
- 📱 Phone: 9506425353
- 💼 GitHub: github.com/Umarsid
- 🔗 LinkedIn: linkedin.com/in/mohd-umar-siddiqui

## 🎉 You're All Set!

Your portfolio is ready to use! Just run:

```bash
npm run dev:full
```

Then open http://localhost:5173 in your browser.

---

**Made with ❤️ using React, Redux, Node.js, Tailwind CSS & shadcn/ui**
