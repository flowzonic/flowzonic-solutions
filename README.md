
# Flowzonic Solution

Modern agency website built with Next.js, featuring high-end glossy design and optimized for deployment on Vercel.

## 🚀 Deployment to Vercel

1. **Push your code to GitHub**.
2. Go to [Vercel](https://vercel.com/new).
3. Import your repository.
4. **Environment Variables**: Add the following in the Vercel dashboard:
   - `NEXT_PUBLIC_APPS_SCRIPT_URL`: Your deployed Google Apps Script URL.
   - `GOOGLE_GENAI_API_KEY`: Your API Key from [Google AI Studio](https://aistudio.google.com/).
   - `NEXT_PUBLIC_FIREBASE_API_KEY`: Your Firebase API Key.
   - `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`: Your Firebase Auth Domain.
   - `NEXT_PUBLIC_FIREBASE_PROJECT_ID`: Your Firebase Project ID.
   - `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`: Your Firebase Messaging Sender ID.
   - `NEXT_PUBLIC_FIREBASE_APP_ID`: Your Firebase App ID.
5. Vercel will automatically deploy your site.

## 🛠 Local Setup

1. **Install Dependencies**:
   ```bash
   npm install
   ```
2. **Environment Variables**: Create a `.env` file and add the keys listed above (refer to the `.env` template in the root).
3. **Run Development Server**:
   ```bash
   npm run dev
   ```

## 📋 Features
- **Glossy Modern UI**: Built with Next.js 15, ShadCN, and Tailwind.
- **AI Lead Analysis**: Integrated Genkit flow to prioritize incoming inquiries.
- **Automation Engine**: Contact form connected to **Google Sheets** and **Automated Emails**.
- **Dynamic Content**: Blog and Services powered by **Firebase Firestore**.
