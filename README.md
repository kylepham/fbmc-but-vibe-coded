# FBMC - But Vibe Coded with Kiro.dev 🎭🤖

> **⚡ From idea to production in one AI-powered coding session!**

A sleek meme storage application showcasing the power of [**Kiro.dev**](https://kiro.dev) - the AI development environment that turns conversations into code. This entire full-stack app was built through natural language, no traditional coding grind required!

## 🚀 **What Kiro.dev Built:**

- ✨ **Complete Next.js frontend** with modern UI components
- 🏗️ **AWS infrastructure** with CDK (S3 + CloudFront)
- 🎨 **Live preview features** and drag-drop uploads
- 🔒 **Production-ready security** with private S3 access
- 📱 **Responsive design** that works everywhere

**Store, organize, and browse your meme collection with style - all powered by AI! 🎭**

## ✨ Features

- **Upload & Preview**: Drag & drop image upload with live card preview
- **Smart Organization**: Tag-based categorization and search
- **Modern UI**: Clean interface built with Next.js and shadcn/ui
- **Secure Storage**: AWS S3 + CloudFront for fast, secure image delivery
- **Responsive Design**: Works perfectly on all devices

## 🏗️ Architecture

```
┌─────────────────┐    ┌──────────────────┐    ┌─────────────────┐
│   Next.js App   │───▶│   CloudFront     │───▶│   S3 Bucket     │
│   (Frontend)    │    │   (CDN)          │    │   (Storage)     │
└─────────────────┘    └──────────────────┘    └─────────────────┘
```

- **Frontend**: Next.js 15 with TypeScript and shadcn/ui components
- **Infrastructure**: AWS CDK for infrastructure as code
- **Storage**: Private S3 bucket with CloudFront distribution
- **Security**: Origin Access Control (OAC) - no direct S3 access

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- AWS CLI configured (for backend deployment)
- AWS CDK CLI installed

### Frontend Development

```bash
cd frontend
npm install
npm run dev
```

Visit `http://localhost:3000`

### Backend Deployment

```bash
cd backend
npm install
npm run build
cdk bootstrap  # First time only
cdk deploy
```

## 📁 Project Structure

```
fbmc-but-vibe-coded/
├── frontend/                 # Next.js application
│   ├── app/                 # App router pages
│   │   ├── page.tsx         # Home page (browse memes)
│   │   ├── upload/          # Upload page
│   │   └── layout.tsx       # Root layout with navbar
│   ├── components/          # React components
│   │   ├── ui/              # shadcn/ui components
│   │   ├── navbar.tsx       # Navigation bar
│   │   ├── image-grid.tsx   # Meme grid display
│   │   └── upload-dialog.tsx # Upload functionality
│   └── lib/                 # Utilities
├── backend/                 # AWS CDK infrastructure
│   ├── lib/                 # CDK stack definitions
│   ├── bin/                 # CDK app entry point
│   └── cdk.json            # CDK configuration
└── README.md
```

## 🎨 Key Features Explained

### Live Upload Preview

- Real-time card preview as you type description and add tags
- Drag & drop file upload with visual feedback
- See exactly how your meme will appear before uploading

### Secure Image Delivery

- All images stored in private S3 bucket
- CloudFront CDN for fast global delivery
- No direct S3 access - everything goes through CloudFront

### Modern UI Components

- Built with shadcn/ui for consistent, accessible design
- Responsive grid layout for meme browsing
- Clean navigation with logo-based home navigation

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui (Radix UI primitives)
- **Icons**: Lucide React

### Backend

- **Infrastructure**: AWS CDK (TypeScript)
- **Storage**: Amazon S3
- **CDN**: Amazon CloudFront
- **Security**: Origin Access Control (OAC)

## 🔒 Security Features

- **Private S3 Bucket**: No public access allowed
- **CloudFront Only**: All image access through CDN
- **HTTPS Enforced**: SSL required for all connections
- **Origin Access Control**: Modern AWS security for S3-CloudFront integration

## 📝 Development Notes

### Frontend

- Uses Next.js 15 with the App Router
- All components are client-side rendered for interactivity
- Image preview uses `URL.createObjectURL()` for instant feedback
- Proper cleanup of object URLs to prevent memory leaks

### Backend

- Minimal infrastructure - just S3 and CloudFront
- No Lambda functions or databases for simplicity
- CDK handles all AWS resource creation and configuration
- Outputs CloudFront domain for frontend configuration

## 🚀 Deployment

1. **Deploy Backend First**:

   ```bash
   cd backend
   cdk deploy
   ```

   Note the CloudFront domain from the output.

2. **Update Frontend Config**:
   Update `next.config.js` with your CloudFront domain.

3. **Deploy Frontend**:
   Deploy to your preferred hosting platform (Vercel, Netlify, etc.)

## 🤝 Contributing

This project was built with a focus on clean, modern web development practices. Feel free to fork and customize for your own meme storage needs!

## 📄 License

MIT License - feel free to use this code for your own projects.
