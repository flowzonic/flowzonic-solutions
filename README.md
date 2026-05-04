
# Flowzonic Solution

Modern agency website built with Next.js, featuring high-end glossy design and optimized for deployment on Vercel.

## 🚀 Deployment to Vercel

1. **Push your code to GitHub**.
2. Go to [Vercel](https://vercel.com/new).
3. Import your repository.
4. **Environment Variables**: Add the following in the Vercel dashboard:
   - `NEXT_PUBLIC_APPS_SCRIPT_URL`: Your deployed Google Apps Script URL.
   - `GOOGLE_GENAI_API_KEY`: Your Gemini API Key from [AI Studio](https://aistudio.google.com/).
5. Vercel will automatically deploy your site.

## 🛠 Local Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Environment Variables**: Rename `.env.example` to `.env` (or use the existing `.env`) and add your keys.
3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## 📋 Features
- **Glossy Modern UI**: Built with Next.js 15, ShadCN, and Tailwind.
- **Dynamic Content**: Blog and Services powered by **Firebase Firestore**.
- **Automation Engine**: Contact form connected to **Google Sheets** and **Automated Emails**.
- **Seeder Tool**: Visit `/seed` to populate your database instantly.

## 🚀 How to push to GitHub

1. **Create a new repository** on [GitHub](https://github.com/new).
2. **Initialize Git**: `git init`
3. **Stage and commit**: `git add .` && `git commit -m "Initial commit"`
4. **Connect and push**:
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   git push -u origin main
   ```
