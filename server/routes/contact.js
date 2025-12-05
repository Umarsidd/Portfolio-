import express from 'express';
import { sendContactEmail, saveContactMessage } from '../controllers/contactController.js';
import { validateContactForm } from '../middleware/validation.js';

const router = express.Router();

router.post('/', validateContactForm, sendContactEmail);

export default router;
