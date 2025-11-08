# 🚀 Quick Setup Guide - Apna Ghar Educational Platform

This guide will help you get the application up and running quickly.

## ✅ What We've Built

Your educational platform now includes:

1. ✅ **Professional Logo** - Modern book icon with gradient
2. ✅ **Educational Color Scheme** - Matching colors for learning environment
3. ✅ **12 Class Pages** - Dynamic pages for each class (1-12) with subject organization
4. ✅ **Search Functionality** - Global search with Ctrl+K shortcut
5. ✅ **Content Management** - Structure for videos, PDFs, notes, and tests
6. ✅ **Database Schema** - Complete Prisma schema for MongoDB
7. ✅ **Enhanced Authentication** - Role-based signup (Student/Teacher/Admin)
8. ✅ **Responsive Design** - Mobile-friendly UI maintained

## 🎯 Next Steps to Complete Setup

### Step 1: Set Up MongoDB Database

1. **Create MongoDB Atlas Account** (if you don't have one):
   - Go to [https://www.mongodb.com/cloud/atlas/register](https://www.mongodb.com/cloud/atlas/register)
   - Sign up for a free account

2. **Create a New Cluster**:
   - Click "Build a Database"
   - Choose FREE tier (M0)
   - Select your region
   - Click "Create"

3. **Get Connection String**:
   - Click "Connect" on your cluster
   - Choose "Connect your application"
   - Copy the connection string
   - It looks like: `mongodb+srv://username:<password>@cluster.mongodb.net/?retryWrites=true&w=majority`

4. **Configure Database Access**:
   - Go to "Database Access" → "Add New Database User"
   - Create username and strong password
   - Grant "Read and write to any database" permission

5. **Configure Network Access**:
   - Go to "Network Access" → "Add IP Address"
   - Click "Allow Access from Anywhere" (for development)
   - Or add your specific IP for production

### Step 2: Configure Environment Variables

1. **Create `.env` file** in the package root:
   ```bash
   # Copy from example
   cp .env.example .env
   ```

2. **Update `.env` with your values**:
   ```env
   # Replace with your MongoDB connection string
   DATABASE_URL="mongodb+srv://username:YOUR_PASSWORD@cluster.mongodb.net/apnaghar?retryWrites=true&w=majority"
   
   # Generate a random secret for NextAuth
   NEXTAUTH_URL="http://localhost:3000"
   NEXTAUTH_SECRET="your-generated-secret-here"
   
   # Optional: OAuth providers
   GOOGLE_CLIENT_ID=""
   GOOGLE_CLIENT_SECRET=""
   ```

3. **Generate NEXTAUTH_SECRET**:
   ```bash
   # Run this in terminal
   node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
   ```
   Copy the output to `NEXTAUTH_SECRET`

### Step 3: Initialize Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to your database (creates collections)
npx prisma db push

# (Optional) Open Prisma Studio to view data
npx prisma studio
```

### Step 4: Restart Development Server

```bash
# Stop the current server (Ctrl+C)
# Then restart
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🎨 Customization Guide

### Change Logo
Edit: `src/app/components/layout/header/Logo/index.tsx`

### Change Colors
Edit: `src/lib/extendedConfig.ts`

```typescript
colors: {
  purple_blue: "#4928FD",  // Your primary color
  edu_primary: "#4928FD",  // Educational primary
  // Add more...
}
```

### Add/Edit Classes or Subjects
Edit: `src/data/classesData.ts`

### Modify Homepage Sections
Edit: `src/app/page.tsx` - Reorder or remove sections

## 📝 Testing the Features

### 1. Test Search (Ctrl+K)
- Press `Ctrl+K` anywhere on the site
- Type "Math" or "Class 10"
- See instant search results
- Click to navigate

### 2. Test Class Pages
- Click on any class card on homepage
- Or visit: `/class/1` through `/class/12`
- Select different subjects
- Filter content by type (video, pdf, notes, test)

### 3. Test Authentication
- Go to `/signup`
- Select role (Student/Teacher)
- If Student, select class
- Complete registration
- Test login at `/signin`

### 4. Test Responsive Design
- Open browser DevTools (F12)
- Toggle device toolbar (Ctrl+Shift+M)
- Test on different screen sizes

## 🔧 Common Issues & Solutions

### Issue: Database Connection Error
**Solution**: 
- Check DATABASE_URL in .env
- Ensure MongoDB cluster is running
- Check network access settings in Atlas

### Issue: Prisma Client Not Found
**Solution**:
```bash
npx prisma generate
```

### Issue: NextAuth Warnings
**Solution**:
- Set NEXTAUTH_URL in .env
- Set NEXTAUTH_SECRET in .env

### Issue: Search Not Working
**Solution**:
- Check if classesData is imported correctly
- Ensure SearchBar component is in header

### Issue: Build Errors
**Solution**:
```bash
# Clear cache
rm -rf .next
npm run build
```

## 📦 Adding Real Content

### 1. Upload Videos
- Store videos on YouTube/Vimeo/AWS S3
- Add URLs to database
- Update content items in class pages

### 2. Upload PDFs
- Store on AWS S3, Cloudinary, or similar
- Add download URLs to database
- Link in content cards

### 3. Create Tests
- Build test creation interface
- Store questions in database
- Add test-taking functionality

### 4. Add Notes
- Create rich text editor (TipTap/Quill)
- Store formatted notes
- Display with proper styling

## 🚀 Deployment Checklist

Before deploying to production:

- [ ] Set strong DATABASE_URL password
- [ ] Generate new NEXTAUTH_SECRET
- [ ] Set NEXTAUTH_URL to production domain
- [ ] Configure OAuth providers (if using)
- [ ] Set up file storage (AWS S3/Cloudinary)
- [ ] Enable HTTPS
- [ ] Set up monitoring (Sentry/LogRocket)
- [ ] Configure analytics (Google Analytics)
- [ ] Test all features on production
- [ ] Set up automatic backups
- [ ] Configure CDN for media files

## 📚 Resources

- **Next.js Docs**: [https://nextjs.org/docs](https://nextjs.org/docs)
- **Prisma Docs**: [https://www.prisma.io/docs](https://www.prisma.io/docs)
- **NextAuth Docs**: [https://next-auth.js.org](https://next-auth.js.org)
- **Tailwind CSS**: [https://tailwindcss.com/docs](https://tailwindcss.com/docs)
- **MongoDB Atlas**: [https://www.mongodb.com/docs/atlas](https://www.mongodb.com/docs/atlas)

## 🎯 Recommended Next Features

1. **Admin Dashboard**: Content management interface
2. **Video Player**: Custom video player with progress tracking
3. **PDF Viewer**: In-browser PDF reader
4. **Test Engine**: Interactive quiz functionality
5. **Progress Dashboard**: Student analytics
6. **Certificates**: Achievement certificates
7. **Discussion Forum**: Student-teacher interaction
8. **Notifications**: Email/push notifications
9. **Payment Gateway**: Subscription management
10. **Mobile App**: React Native version

## 💡 Pro Tips

1. **Use Prisma Studio** to visually manage your database
2. **Enable TypeScript strict mode** for better type safety
3. **Use React Query** for data fetching and caching
4. **Implement lazy loading** for images and videos
5. **Add error boundaries** for better error handling
6. **Use Zod** for form validation
7. **Implement rate limiting** for API routes
8. **Add loading states** for better UX
9. **Use Server Components** where possible in Next.js 15
10. **Implement logging** with Winston or Pino

## 📞 Need Help?

If you encounter any issues:
1. Check the main README.md
2. Review error logs in terminal
3. Check browser console for errors
4. Verify all environment variables
5. Ensure all dependencies are installed

---

**Happy Building! 🎉**

Your educational platform is ready to grow. Focus on adding quality content and engaging your students!
