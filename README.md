# Portfolio Website - Mohd Umar Siddiqui

A modern, full-stack portfolio website built with React, Redux, Node.js, and shadcn/ui components.

## 🚀 Features

- **Modern Design**: Clean and professional UI with smooth animations
- **Dark Mode**: Toggle between light and dark themes
- **Fully Responsive**: Works seamlessly on all devices
- **Contact Form**: Functional contact form with email notifications
- **State Management**: Redux for global state management
- **Full Stack**: React frontend with Node.js/Express backend
- **Type-safe**: Built with modern JavaScript practices
- **Animations**: Smooth animations using Framer Motion
- **SEO Optimized**: Meta tags and semantic HTML

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Redux Toolkit** - State management
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Reusable UI components
- **Framer Motion** - Animation library
- **Lucide React** - Icon library
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **Nodemailer** - Email service
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variables

## 📦 Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PortPelio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env
   ```
   
   Update the `.env` file with your credentials:
   ```env
   PORT=5000
   NODE_ENV=development
   
   # Email Configuration (Gmail)
   EMAIL_USER=your_email@gmail.com
   EMAIL_PASS=your_app_password
   EMAIL_TO=mohdumar4253@gmail.com
   
   # CORS
   CORS_ORIGIN=http://localhost:5173
   ```

   **Note**: For Gmail, you need to generate an App Password:
   - Go to Google Account Settings
   - Security → 2-Step Verification
   - App passwords → Generate new app password
   - Use this password in EMAIL_PASS

## 🚀 Running the Application

### Development Mode

**Option 1: Run both frontend and backend together**
```bash
npm run dev:full
```

**Option 2: Run separately**

Terminal 1 (Frontend):
```bash
npm run dev
```

Terminal 2 (Backend):
```bash
npm run server
```

### Production Build

1. Build the frontend:
   ```bash
   npm run build
   ```

2. Preview the build:
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
PortPelio/
├── public/                 # Static files
├── server/                 # Backend (Node.js/Express)
│   ├── controllers/        # Request handlers
│   ├── middleware/         # Custom middleware
│   ├── routes/            # API routes
│   └── index.js           # Server entry point
├── src/                   # Frontend (React)
│   ├── components/        # React components
│   │   ├── ui/           # Reusable UI components
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   ├── Education.jsx
│   │   ├── Experience.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── Navbar.jsx
│   │   ├── Projects.jsx
│   │   └── Skills.jsx
│   ├── data/             # Static data
│   │   └── resume.js
│   ├── lib/              # Utility functions
│   ├── store/            # Redux store
│   │   ├── slices/       # Redux slices
│   │   └── store.js
│   ├── App.jsx           # Main app component
│   ├── index.css         # Global styles
│   └── main.jsx          # App entry point
├── .env.example          # Environment variables template
├── .gitignore
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
└── vite.config.js
```

## 🎨 Key Components

### Frontend Components

- **Navbar**: Responsive navigation with theme toggle
- **Hero**: Landing section with animated introduction
- **About**: Personal information and highlights
- **Skills**: Technical skills with proficiency bars
- **Experience**: Professional work experience timeline
- **Projects**: Featured projects showcase
- **Education**: Educational background and certifications
- **Contact**: Contact form with validation
- **Footer**: Social links and contact information

### Backend API

- `POST /api/contact` - Send contact form message
- `GET /api/health` - Health check endpoint

## 🎯 Features Breakdown

### State Management (Redux)
- Theme management (light/dark mode)
- Contact form state (loading, success, error)
- Centralized state with Redux Toolkit

### Animations
- Page scroll animations
- Component entrance animations
- Interactive hover effects
- Smooth transitions

### Responsive Design
- Mobile-first approach
- Breakpoints: sm, md, lg, xl
- Touch-friendly interface

### Contact Form
- Form validation
- Email notifications (to you and auto-reply)
- Success/error feedback
- Loading states

## 🔧 Customization

### Update Personal Information

Edit `src/data/resume.js`:
```javascript
export const personalInfo = {
  name: "YOUR NAME",
  title: "YOUR TITLE",
  email: "your@email.com",
  // ... other fields
};
```

### Modify Theme Colors

Edit `tailwind.config.js` and `src/index.css` for custom color schemes.

### Add New Sections

1. Create a new component in `src/components/`
2. Import and add to `src/App.jsx`
3. Update navigation in `src/components/Navbar.jsx`

## 📝 Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| PORT | Server port number | No (default: 5000) |
| NODE_ENV | Environment mode | No (default: development) |
| EMAIL_USER | Gmail account for sending emails | Yes (for email functionality) |
| EMAIL_PASS | Gmail app password | Yes (for email functionality) |
| EMAIL_TO | Email to receive contact messages | Yes (for email functionality) |
| CORS_ORIGIN | Allowed CORS origin | No (default: http://localhost:5173) |

## 🚨 Troubleshooting

### Contact form not sending emails
- Verify EMAIL_USER and EMAIL_PASS are set correctly
- Ensure you're using a Gmail App Password, not your regular password
- Check server logs for error messages

### Port already in use
- Change the PORT in `.env` file
- Or kill the process using the port: `lsof -ti:5000 | xargs kill`

### Module not found errors
- Delete `node_modules` and `package-lock.json`
- Run `npm install` again

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available for personal use.

## 👤 Contact

**Mohd Umar Siddiqui**
- Email: mohdumar4253@gmail.com
- Phone: 9506425353
- GitHub: [Umarsid](https://github.com/Umarsid)
- LinkedIn: [mohd-umar-siddiqui](https://linkedin.com/in/mohd-umar-siddiqui)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for beautiful UI components
- [Lucide](https://lucide.dev/) for icons
- [Framer Motion](https://www.framer.com/motion/) for animations
- [Tailwind CSS](https://tailwindcss.com/) for styling

---

Made with ❤️ using React & Node.js
