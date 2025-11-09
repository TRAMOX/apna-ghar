# Apna Ghar - Deployment Guide

## 🚀 Deploy to Vercel

### Prerequisites
- GitHub account
- Vercel account (sign up at https://vercel.com)
- Git installed on your machine

### Step 1: Push to GitHub

1. Initialize git repository (if not already done):
```bash
git init
git add .
git commit -m "Initial commit - Ready for deployment"
```

2. Create a new repository on GitHub:
   - Go to https://github.com/new
   - Name: `apna-ghar`
   - Keep it Public or Private
   - Don't initialize with README

3. Push to GitHub:
```bash
git remote add origin https://github.com/YOUR_USERNAME/apna-ghar.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to https://vercel.com/new

2. Import your GitHub repository:
   - Click "Import Project"
   - Select your `apna-ghar` repository

3. Configure Project:
   - **Framework Preset**: Next.js
   - **Root Directory**: `package` (⚠️ IMPORTANT)
   - **Build Command**: `npm run build`
   - **Output Directory**: `.next`
   - **Install Command**: `npm install`

4. Add Environment Variables:
   Click "Environment Variables" and add:

   ```
   NEXTAUTH_URL = https://your-deployment-url.vercel.app
   NEXTAUTH_SECRET = generate-a-random-secret-key
   ```

   To generate NEXTAUTH_SECRET, run in terminal:
   ```bash
   openssl rand -base64 32
   ```

5. Click "Deploy"

### Step 3: Post-Deployment

1. Once deployed, Vercel will provide you a URL like:
   `https://apna-ghar.vercel.app`

2. Update the NEXTAUTH_URL environment variable:
   - Go to Project Settings → Environment Variables
   - Update `NEXTAUTH_URL` to your actual Vercel URL
   - Redeploy

3. Test your deployment:
   - Visit your URL
   - Test authentication features
   - Check all pages load correctly

### Common Issues & Solutions

#### Issue 1: Build fails with "Module not found"
**Solution**: Make sure root directory is set to `package`

#### Issue 2: Authentication doesn't work
**Solution**: 
- Verify NEXTAUTH_URL matches your deployment URL
- Ensure NEXTAUTH_SECRET is set
- Redeploy after updating environment variables

#### Issue 3: Images not loading
**Solution**: Images are set to `unoptimized: true` in next.config.mjs - this is already configured

#### Issue 4: ESLint errors during build
**Solution**: ESLint is set to `ignoreDuringBuilds: true` - already configured

### Environment Variables Needed

| Variable | Description | Example |
|----------|-------------|---------|
| NEXTAUTH_URL | Your deployment URL | https://your-app.vercel.app |
| NEXTAUTH_SECRET | Random secret key | abc123xyz... |

### Optional OAuth Setup

If you want to enable Google/GitHub sign-in:

1. Get OAuth credentials from:
   - Google: https://console.cloud.google.com
   - GitHub: https://github.com/settings/developers

2. Add to Vercel environment variables:
   ```
   GOOGLE_CLIENT_ID = your-google-client-id
   GOOGLE_CLIENT_SECRET = your-google-client-secret
   ```

3. Configure redirect URLs in OAuth provider:
   ```
   https://your-app.vercel.app/api/auth/callback/google
   ```

### Automatic Deployments

Vercel automatically deploys when you push to GitHub:
- Push to `main` branch → Production deployment
- Push to other branches → Preview deployment

### Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update NEXTAUTH_URL to your custom domain

## 🎉 You're Live!

Your application is now deployed and accessible worldwide!

## Support

If you encounter issues:
- Check Vercel deployment logs
- Review this guide
- Check Next.js documentation: https://nextjs.org/docs
- Vercel documentation: https://vercel.com/docs
