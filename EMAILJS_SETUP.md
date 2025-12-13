# EmailJS Setup Guide

To enable real email sending from the contact form, follow these steps:

## 1. Create EmailJS Account
1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Sign up for a free account
3. Verify your email address

## 2. Create Email Service
1. In EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose "Gmail" (since you want emails sent to madheshr005@gmail.com)
4. Connect your Gmail account
5. Note down the **Service ID**

## 3. Create Email Template
1. Go to "Email Templates"
2. Click "Create New Template"
3. Use this template content:

**Subject:** New Contact Form Message from {{from_name}}

**Body:**
```
Hello Madhesh,

You have received a new message from your portfolio contact form:

Name: {{from_name}}
Email: {{from_email}}
LinkedIn: {{linkedin_profile}}
Timestamp: {{timestamp}}

Message:
{{message}}

---
This message was sent from your portfolio website contact form.
Reply directly to: {{reply_to}}
```

4. Save the template and note down the **Template ID**

## 4. Get Public Key
1. Go to "Account" → "General"
2. Find your **Public Key**

## 5. Update Environment Variables
Update the file `client/.env.local` with your actual values:

```env
VITE_EMAILJS_SERVICE_ID=your_actual_service_id
VITE_EMAILJS_TEMPLATE_ID=your_actual_template_id  
VITE_EMAILJS_PUBLIC_KEY=your_actual_public_key
```

## 6. Test the Setup
1. Restart your development server: `npm run dev`
2. Go to the contact page
3. Fill out the form and submit
4. Check your Gmail inbox (madheshr005@gmail.com)

## Template Variables Used:
- `{{from_name}}` - User's name
- `{{from_email}}` - User's email
- `{{linkedin_profile}}` - User's LinkedIn profile
- `{{message}}` - User's message
- `{{timestamp}}` - When the message was sent
- `{{reply_to}}` - User's email for easy replies

## Free Tier Limits:
- 200 emails per month
- Perfect for a portfolio contact form

## Security Note:
The public key is safe to expose in frontend code - it's designed for client-side use.