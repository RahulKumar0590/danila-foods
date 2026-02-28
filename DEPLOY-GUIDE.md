# DANILA FOODS — Website Deployment Guide
## Complete Step-by-Step: From Files to Live on www.danilafoods.com

---

## PART 1 — Put Website Online (Free GitHub Pages)

---

### Step 1 — Create a GitHub Account
1. Go to https://github.com
2. Click **Sign up** and create a free account
3. Verify your email address before continuing

---

### Step 2 — Create a New Repository
1. Once logged in, click the **+** icon (top right)  **New repository**
2. Name it: `danila-foods`
3. Set visibility to **Public**
4. Do NOT tick "Add README"
5. Click **Create repository**

---

### Step 3 — Install Git on Your Computer
1. Go to https://git-scm.com/download/win
2. Download and run the installer (click Next on everything, defaults are fine)
3. After install, open **Start menu**  search **Git Bash**  open it
4. Verify it works by typing: `git --version` (should show a version number)

---

### Step 4 — Upload Your Website to GitHub
In **Git Bash**, run these commands **one by one** (press Enter after each):

```
cd "C:/Users/kurahu/source/DANILAFOODS"
git init
git add .
git commit -m "Initial website upload"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/danila-foods.git
git push -u origin main
```

> Replace YOUR_USERNAME with your actual GitHub username

When it asks for login, enter your GitHub username and password.
If it asks for a token instead of password, go to:
GitHub > Settings > Developer Settings > Personal Access Tokens > Generate new token > tick "repo" > copy the token and paste it as your password.

---

### Step 5 — Enable GitHub Pages
1. Go to your repository on GitHub (github.com/YOUR_USERNAME/danila-foods)
2. Click the **Settings** tab
3. Click **Pages** in the left sidebar
4. Under **Branch**, select `main` > folder `/ (root)` > click **Save**
5. Wait 2-5 minutes

---

### Step 6 — Your Free Website is Live!
Your website will be accessible at:

    https://YOUR_USERNAME.github.io/danila-foods/

Share this link with anyone — it works on all phones, tablets and computers worldwide.

---

---

## PART 2 — Get a Professional Domain (www.danilafoods.com)

Note: Hosting remains FREE on GitHub Pages. You are only paying for the domain name (~Rs 800-1,500/year).

---

### Step 7 — Buy the Domain
1. Go to https://www.namecheap.com (recommended) or https://www.godaddy.com
2. Search for: danilafoods.com
3. Add to cart and purchase
4. Create an account and complete payment
5. You now own danilafoods.com

Tip: Namecheap has cheaper renewal prices than GoDaddy.

---

### Step 8 — Configure DNS Settings (Point Domain to GitHub)
1. Log in to your domain provider (Namecheap / GoDaddy)
2. Find **DNS Settings** or **Manage DNS** for danilafoods.com
3. Delete any existing A records or CNAME records that are there by default
4. Add these 4 A records:

    Type    Host/Name    Value
    A       @            185.199.108.153
    A       @            185.199.109.153
    A       @            185.199.110.153
    A       @            185.199.111.153

5. Add this CNAME record:

    Type     Host/Name    Value
    CNAME    www          YOUR_USERNAME.github.io

> Replace YOUR_USERNAME with your actual GitHub username

6. Save all records

---

### Step 9 — Tell GitHub About Your Domain
1. Go to your repository > **Settings** > **Pages**
2. Under **Custom domain**, type: www.danilafoods.com
3. Click **Save**
4. A file called CNAME will be automatically added to your repository
5. Tick the checkbox **Enforce HTTPS** (makes the site secure — free)

---

### Step 10 — Wait for DNS Propagation
- DNS changes take 2-48 hours to fully spread worldwide (usually done within 6 hours)
- You cannot skip or speed this up — it is how the internet works
- During this time some people may see the site, others may not yet

To check progress:
Go to https://dnschecker.org > type danilafoods.com > see which countries can already reach it

---

### Step 11 — Website is Fully Live!
Once propagation is complete:

    www.danilafoods.com  --  Live and accessible worldwide

Works on all phones, tablets, laptops — any browser, anywhere.

---

---

## PART 3 — Updating the Website in Future

Whenever you make changes to your website files, run these 3 commands in Git Bash:

```
cd "C:/Users/kurahu/source/DANILAFOODS"
git add .
git commit -m "Updated website"
git push
```

Changes will be live on www.danilafoods.com within 1-2 minutes.

---

## Cost Summary

| What                           | Provider          | Cost                  |
|--------------------------------|-------------------|-----------------------|
| Website hosting (server space) | GitHub Pages      | FREE                  |
| SSL certificate (https://)     | GitHub Pages      | FREE                  |
| Domain (www.danilafoods.com)   | Namecheap/GoDaddy | ~Rs 800-1,500/year    |

---

## Useful Links
- GitHub Pages docs : https://pages.github.com
- DNS Checker       : https://dnschecker.org
- Namecheap         : https://www.namecheap.com
- GoDaddy           : https://www.godaddy.com
