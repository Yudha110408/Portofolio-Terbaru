# Vercel Custom Domain Configuration (via Hostinger NS)

This document outlines the step-by-step procedure to link a custom domain purchased on **Hostinger** to a project hosted on **Vercel** using Vercel's Name Servers (NS).

## Step 1: Add the Domain in Vercel

1. Log in to the **Vercel Dashboard** and select your project.
2. In the top-right corner, click on the **three dots** (settings) and select **Domains** [00:20](https://www.youtube.com/watch?v=4W_8vClX-kE&t=20).
3. Click the **Add** button (or "Add Existing Domain" if you already own it) [00:31](https://www.youtube.com/watch?v=4W_8vClX-kE&t=31).
4. Enter your custom domain name (e.g., `yourdomain.com`). Keep the default settings and click **Save** [00:41](https://www.youtube.com/watch?v=4W_8vClX-kE&t=41).
5. Vercel will temporarily show an **"Invalid Configuration"** error because the DNS records are not yet pointed to Vercel [00:52](https://www.youtube.com/watch?v=4W_8vClX-kE&t=52).

## Step 2: Configure Name Servers on Hostinger

Instead of pointing individual A/CNAME records, this method delegates the DNS management entirely to Vercel by changing the Name Servers (NS) [01:00](https://www.youtube.com/watch?v=4W_8vClX-kE&t=60):

1. Log in to your **Hostinger Dashboard**.
2. On the left sidebar, click on **Domains**, then click **Manage** next to your domain [01:10](https://www.youtube.com/watch?v=4W_8vClX-kE&t=70).
3. Click on **DNS / Name Servers** in the sidebar [01:19](https://www.youtube.com/watch?v=4W_8vClX-kE&t=79).
4. Click **Change Name Servers** [01:28](https://www.youtube.com/watch?v=4W_8vClX-kE&t=88).
5. Remove Hostinger's default name servers and replace them with **Vercel's Name Servers** [01:39](https://www.youtube.com/watch?v=4W_8vClX-kE&t=99):

- `ns1.vercel-dns.com`
- `ns2.vercel-dns.com`

6. Click **Save** to apply the changes [01:49](https://www.youtube.com/watch?v=4W_8vClX-kE&t=109).

## Step 3: Verification & Propagation

1. Go back to the **Vercel Domains** dashboard and click **Refresh** [01:59](https://www.youtube.com/watch?v=4W_8vClX-kE&t=119).
2. Once verified, the configuration status will turn green/valid for both the apex domain (`yourdomain.com`) and the `www` subdomain (`www.yourdomain.com`) [01:59](https://www.youtube.com/watch?v=4W_8vClX-kE&t=119).

> **Note on DNS Propagation:** DNS changes can take up to **48 hours** to propagate globally [02:10](https://www.youtube.com/watch?v=4W_8vClX-kE&t=130). If Vercel still shows a configuration error immediately after saving, wait a few minutes to a few hours and try again.

Kamu tinggal *copy-paste* teks di atas ke dalam file `.md` (misalnya `vercel-domain-guide.md`) atau langsung masukkan ke kolom chat AI VS Code kamu agar ia paham alurnya!