# 🚀 How to Deploy DIGIGO to Vercel

This guide provides step-by-step instructions to deploy the DIGIGO codebase to [Vercel](https://vercel.com).

## 📋 Prerequisites

1.  A **GitHub** account with the project repository pushed.
2.  A **Vercel** account (connected to your GitHub account).

---

## 🛠️ Deployment Steps

### 1. Import Project

1.  Log in to your [Vercel Dashboard](https://vercel.com/dashboard).
2.  Click the **"Add New..."** button and select **"Project"**.
3.  Find the repository `DevFlowTech/digigo` in the list and click **"Import"**.

### 2. Configure Project

On the configuration screen, Vercel will automatically detect that this is a **Next.js** project.

- **Framework Preset:** Next.js (Default)
- **Root Directory:** `./` (Default)
- **Build & Output Settings:** Leave all as default.

### 3. Environment Variables (Required for Contact Form)

If you want the contact form to actually send emails, you must add your SMTP credentials. Click the **"Environment Variables"** dropdown and add the following:

| Key         | Description                                            |
| :---------- | :----------------------------------------------------- |
| `SMTP_HOST` | Your email provider SMTP host (e.g., `smtp.gmail.com`) |
| `SMTP_PORT` | Port (usually `465` for SSL or `587` for TLS)          |
| `SMTP_USER` | Your email address                                     |
| `SMTP_PASS` | Your email password or App Password                    |
| `SMTP_FROM` | The address that appears in the "From" field           |

> **Note:** If you don't add these, the website will still deploy, but the contact form will only log submissions to the console.

### 4. Deploy

1.  Click the **"Deploy"** button.
2.  Wait for about 1-2 minutes for the build to complete.
3.  Once finished, you will see a confetti animation and your live URL (e.g., `https://digigo.vercel.app`).

---

## 🔄 Automatic Updates

Once deployed, Vercel provides **Continuous Deployment (CD)**:

- Every time you push new code to the `main` branch on GitHub, Vercel will automatically start a new build and update your live site.
- If you create a "Pull Request", Vercel will provide a **Preview URL** so you can see changes before they go live.

---

## 🌐 Custom Domains (Optional)

1.  Go to **Project Settings > Domains**.
2.  Enter your custom domain (e.g., `www.digigostore.com`).
3.  Follow the DNS instructions provided by Vercel to connect your domain.

---

<p align="center">
  Developed by <b>DevFlow Technology</b>
</p>
