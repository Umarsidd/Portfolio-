// Test script to verify contact form API
import axios from 'axios';

const testContactForm = async () => {
    try {
        console.log('🧪 Testing contact form API...\n');

        const response = await axios.post('http://localhost:5001/api/contact', {
            name: 'Test User',
            email: 'test@example.com',
            subject: 'Test Email from Nodemailer',
            message: 'This is a test message to verify that Nodemailer is working correctly with Gmail SMTP.'
        });

        console.log('✅ Success!');
        console.log('Response:', response.data);
        console.log('\n📧 Check your email inbox at mohdumar4253@gmail.com');
        console.log('📧 Check test@example.com for auto-reply (if it\'s a real email)');

    } catch (error) {
        console.error('❌ Error:', error.response?.data || error.message);
    }
};

testContactForm();
