export const validateContactForm = (req, res, next) => {
  const { name, email, subject, message } = req.body;

  // Check for required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'All fields are required',
    });
  }

  // Validate name
  if (name.trim().length < 2) {
    return res.status(400).json({
      success: false,
      message: 'Name must be at least 2 characters long',
    });
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({
      success: false,
      message: 'Please provide a valid email address',
    });
  }

  // Validate subject
  if (subject.trim().length < 3) {
    return res.status(400).json({
      success: false,
      message: 'Subject must be at least 3 characters long',
    });
  }

  // Validate message
  if (message.trim().length < 10) {
    return res.status(400).json({
      success: false,
      message: 'Message must be at least 10 characters long',
    });
  }

  next();
};
