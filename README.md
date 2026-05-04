
# Flowzonic Solution

Modern agency website built with Next.js, featuring high-end glossy design and optimized for deployment on Vercel or Hostinger.

## 🚀 Deployment to Vercel (Recommended)

1. **Push your code to GitHub** (see instructions below).
2. Go to [Vercel](https://vercel.com/new).
3. Import your repository.
4. Vercel will automatically detect Next.js settings and deploy your site.

## 🛠 Deployment to Hostinger (Static Export)

If you still wish to use Hostinger's static hosting:

1. Re-add `output: 'export'` to your `next.config.ts`.
2. Ensure `images: { unoptimized: true }` is set in the config.
3. Run the build command:
   ```bash
   npm run build
   ```
4. Upload the contents of the `out` folder to your Hostinger `public_html` directory.

## 🚀 How to push to GitHub

Follow these steps in your local terminal:

1. **Create a new repository** on [GitHub](https://github.com/new).
2. **Open your terminal** in the root of this project.
3. **Initialize Git**:
   ```bash
   git init
   ```
4. **Stage and commit your files**:
   ```bash
   git add .
   git commit -m "Initial commit of Flowzonic Solution"
   ```
5. **Connect to your repository** (replace `<your-username>` and `<your-repo-name>`):
   ```bash
   git branch -M main
   git remote add origin https://github.com/<your-username>/<your-repo-name>.git
   ```
6. **Push to GitHub**:
   ```bash
   git push -u origin main
   ```
