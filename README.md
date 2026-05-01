# Flowzonic Solution

Modern agency website built with Next.js, featuring high-end glossy design and static export compatibility for Hostinger.

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

## 🛠 Deployment to Hostinger

This project is configured for **Static Export**.

1. Run the build command:
   ```bash
   npm run build
   ```
2. Locate the `out` folder.
3. Upload the *contents* of the `out` folder to your Hostinger `public_html` directory via FTP or File Manager.
