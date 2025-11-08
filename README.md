# 🏠 Apna Ghar - Educational Platform

A comprehensive Next.js-based educational platform for Class 1 to 12 students with video lessons, study materials, practice tests, and progress tracking.

## ✨ Features

### 🎓 For Students
- **Class-wise Organization**: Structured content from Class 1 to 12
- **Multi-format Learning**: Videos, PDFs, Notes, and Practice Tests
- **Progress Tracking**: Monitor your learning progress
- **Search Functionality**: Quick search across classes, subjects, and topics (Ctrl+K)
- **Dark Mode**: Comfortable viewing in any lighting condition
- **Responsive Design**: Works seamlessly on all devices

### 👨‍🏫 For Teachers
- **Content Management**: Upload and organize educational content
- **Student Analytics**: Track student progress and performance
- **Role-based Access**: Separate dashboards for different roles

### 🔐 Authentication
- Role-based access (Student, Teacher, Admin)
- Social login support (Google, GitHub)
- Secure password authentication with NextAuth

### 📊 Database Schema
- User management with roles
- Class and Subject organization
- Content library (Videos, PDFs, Notes, Tests)
- Enrollment tracking
- Progress monitoring
- Test results and analytics
- Comments and discussions

## 🚀 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Database**: MongoDB with Prisma ORM
- **Authentication**: NextAuth.js
- **Animations**: Framer Motion
- **UI Components**: Radix UI
- **Icons**: Iconify
- **Form Handling**: React Hook Form (optional)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ and npm/yarn
- MongoDB Atlas account (or local MongoDB)
- Git

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd package
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Environment Variables
Create a `.env` file in the root directory and copy the contents from `.env.example`:

```bash
cp .env.example .env
```

Then update the values in `.env`:

```env
# Required
DATABASE_URL="mongodb+srv://username:password@cluster.mongodb.net/apnaghar"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Optional (for OAuth)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 4. Set Up Prisma

```bash
# Generate Prisma Client
npx prisma generate

# Push schema to database
npx prisma db push

# (Optional) Open Prisma Studio to view/edit data
npx prisma studio
```

### 5. Run Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
package/
├── src/
│   ├── app/
│   │   ├── (site)/
│   │   │   ├── class/[id]/          # Dynamic class pages
│   │   │   ├── contact/
│   │   │   └── ...
│   │   ├── api/                     # API routes
│   │   ├── components/
│   │   │   ├── auth/                # Authentication components
│   │   │   ├── home/                # Homepage sections
│   │   │   ├── layout/              # Header, Footer
│   │   │   └── shared/              # Shared components (Search, etc.)
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── data/
│   │   └── classesData.ts           # Class and subject data
│   ├── lib/
│   │   ├── auth.ts                  # NextAuth configuration
│   │   ├── prisma.ts                # Prisma client
│   │   └── extendedConfig.ts        # Tailwind extended config
│   └── types/
│       └── menu.ts
├── prisma/
│   └── schema.prisma                # Database schema
├── public/
│   └── images/
├── .env.example
├── next.config.mjs
├── tailwind.config.js
├── package.json
└── README.md
```

## 🎨 Customization

### Colors
Edit `src/lib/extendedConfig.ts` to customize the color scheme:

```typescript
colors: {
  purple_blue: "#4928FD",
  edu_primary: "#4928FD",
  // Add your custom colors
}
```

### Content Data
Update `src/data/classesData.ts` to modify classes and subjects.

### Logo
Modify `src/app/components/layout/header/Logo/index.tsx` to change the logo design.

## 🔑 Key Features Implementation

### Search Functionality
- Press `Ctrl+K` (or `Cmd+K` on Mac) to open search
- Search across all classes, subjects, and topics
- Real-time filtering

### Class Pages
- Dynamic routes: `/class/1` to `/class/12`
- Subject-wise content filtering
- Content type filters (videos, PDFs, notes, tests)

### Authentication
- Sign up with role selection (Student/Teacher)
- Students select their class during registration
- Social login support

## 📦 Database Models

### Key Models
- **User**: Student/Teacher/Admin with profile info
- **Class**: Class 1-12 organization
- **Subject**: Subject-wise content
- **Content**: Videos, PDFs, Notes, Tests
- **Enrollment**: Student class enrollment
- **Progress**: Learning progress tracking
- **TestResult**: Test scores and analytics
- **Comment**: Discussion and feedback

## 🚢 Deployment

### Vercel (Recommended)
1. Push code to GitHub
2. Import project in Vercel
3. Add environment variables
4. Deploy

### Manual Deployment
```bash
npm run build
npm start
```

## 🔒 Security Best Practices

1. **Never commit** `.env` file
2. Use **strong passwords** for database
3. Keep **dependencies updated**
4. Enable **HTTPS** in production
5. Use **environment variables** for sensitive data

## 📚 API Routes

### Authentication
- `POST /api/auth/signup` - User registration
- `POST /api/auth/signin` - User login
- `GET /api/auth/session` - Get current session

### Content (To be implemented)
- `GET /api/class/:id` - Get class details
- `GET /api/content/:id` - Get content by ID
- `POST /api/content` - Upload new content (Teacher/Admin)
- `PUT /api/progress` - Update user progress

## 🐛 Troubleshooting

### Database Connection Issues
```bash
# Test database connection
npx prisma db pull
```

### Build Errors
```bash
# Clear cache and rebuild
rm -rf .next
npm run build
```

### TypeScript Errors
```bash
# Regenerate Prisma types
npx prisma generate
```

## 📝 Next Steps

To complete the platform, you need to:

1. **Set up MongoDB**: Create a MongoDB Atlas cluster
2. **Add Prisma Package**: Install `@prisma/client` and `prisma` as dev dependency
   ```bash
   npm install @prisma/client
   npm install -D prisma
   ```
3. **Configure Authentication**: Set up NextAuth with your OAuth providers
4. **Upload Content**: Add actual educational content (videos, PDFs, etc.)
5. **Implement Admin Panel**: Create admin dashboard for content management
6. **Add Payment Integration**: If you plan to monetize (Stripe/Razorpay)
7. **Set up File Storage**: AWS S3 or Cloudinary for media files
8. **Add Analytics**: Google Analytics or custom analytics

## 🤝 Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 📧 Support

For support, email: support@apnaghar.com

---

Made with ❤️ for students of Apna Ghar
