# Deployment Guide

This project is set up for separate deployment of frontend and backend.

## Frontend Deployment (Vercel)

1. **Connect your repository to Vercel**
2. **Configure build settings:**
   - Build Command: `cd client && npm run build`
   - Output Directory: `client/dist`
   - Install Command: `cd client && npm install`
   - Root Directory: Leave empty (uses root)

3. **Environment Variables in Vercel:**
   ```
   VITE_EMAILJS_SERVICE_ID=service_8lir92g
   VITE_EMAILJS_TEMPLATE_ID=template_x82k3om
   VITE_EMAILJS_PUBLIC_KEY=-zrQT3l-jmMnUlzRE
   VITE_API_URL=https://your-backend-app.onrender.com
   ```

4. **Deploy:** Vercel will automatically deploy on push to main branch

## Backend Deployment (Render)

1. **Create a new Web Service on Render**
2. **Configure build settings:**
   - Build Command: `cd server && npm install && npm run build`
   - Start Command: `cd server && npm start`
   - Root Directory: Leave empty

3. **Environment Variables in Render:**
   ```
   NODE_ENV=production
   PORT=10000
   ```
   Add any database or other environment variables you need.

4. **Deploy:** Render will build and deploy your backend

## Local Development

### Backend (Port 5000)
```bash
cd server
npm install
npm run dev
```

### Frontend (Port 3000)
```bash
cd client
npm install
npm run dev
```

## Important Notes

1. **Update CORS origins:** In `server/index.ts`, replace `'https://your-frontend-domain.vercel.app'` with your actual Vercel domain
2. **Update API URL:** In `client/.env.production`, replace `https://your-backend-app.onrender.com` with your actual Render backend URL
3. **Database:** If you're using a database, make sure to configure it in your Render environment variables

## File Structure After Separation

```
├── client/                 # Frontend (Deploy to Vercel)
│   ├── src/
│   ├── package.json
│   ├── vite.config.ts
│   └── .env.production
├── server/                 # Backend (Deploy to Render)
│   ├── package.json
│   ├── tsconfig.json
│   └── index.ts
├── vercel.json            # Vercel configuration
└── DEPLOYMENT.md          # This file
```