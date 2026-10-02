# 🚀 DEPLOYMENT GUIDE
## UICSA Branch Quiz Challenge Website

This guide will walk you through deploying your website to GitHub Pages step-by-step.

---

## 📋 PRE-DEPLOYMENT CHECKLIST

Before deploying, complete these steps:

### ✅ Step 1: Add Your Logos

1. Place these files in `assets/images/`:
   - `university-logo.png` (Guru Nanak University)
   - `uicsa-logo.png` (UICSA logo)
   - `technical-team-logo.png` (Technical Team)

2. Logo specifications:
   - Format: PNG with transparent background
   - Size: 200x200px or larger
   - High resolution for crisp display

### ✅ Step 2: Add Gallery Photos

1. Place event/campus photos in `assets/gallery/`
2. Name them: `photo1.jpg`, `photo2.jpg`, etc.
3. Recommended size: 1200x800px
4. Compress images to under 500KB each

### ✅ Step 3: Configure Settings

Edit `config.js` and update:

```javascript
registrationUrl: "YOUR_ACTUAL_GOOGLE_FORM_URL"
quizUrl: "YOUR_ACTUAL_TEST_PORTAL_URL"
quizDate: "2026-12-25T10:00:00"  // Format: YYYY-MM-DDTHH:MM:SS
eventDate: "December 25, 2026"
eventTime: "10:00 AM"
venue: "Computer Lab / Online"
```

### ✅ Step 4: Customize Content (Optional)

Edit `index.html` to update:
- Team member names and roles (search for "Member Name")
- Quiz rules if needed
- About UICSA description
- FAQ answers

### ✅ Step 5: Test Locally

1. Open `index.html` in your web browser
2. Check all sections display correctly
3. Test buttons (they should alert if not configured)
4. Verify countdown timer works
5. Test gallery lightbox
6. Test FAQ accordion

---

## 🌐 DEPLOYMENT TO GITHUB PAGES

### Method 1: Using GitHub Website (Recommended for Beginners)

#### Step 1: Create GitHub Account
1. Go to [github.com](https://github.com)
2. Click "Sign up"
3. Create your account
4. Verify your email

#### Step 2: Create New Repository
1. Click the **"+"** icon (top right)
2. Select **"New repository"**
3. Repository settings:
   - **Name:** `uicsa-quiz-website` (or your choice)
   - **Description:** "UICSA Branch Quiz Challenge Event Website"
   - **Visibility:** Public ✅
   - **Initialize:** Leave unchecked
4. Click **"Create repository"**

#### Step 3: Upload Your Files
1. Click **"uploading an existing file"**
2. Drag and drop these items:
   - `index.html`
   - `style.css`
   - `script.js`
   - `config.js`
   - `README.md`
   - `assets` folder (entire folder with all subfolders)
3. Add commit message: "Initial commit: UICSA Quiz Website"
4. Click **"Commit changes"**

#### Step 4: Enable GitHub Pages
1. Go to repository **Settings** (top menu)
2. Click **"Pages"** (left sidebar)
3. Under **"Source"**:
   - Branch: Select **"main"**
   - Folder: Select **"/ (root)"**
4. Click **"Save"**
5. Wait 2-3 minutes
6. Your site will be live at:
   ```
   https://YOUR-USERNAME.github.io/uicsa-quiz-website/
   ```

---

### Method 2: Using Git Command Line

#### Prerequisites
- Git installed on your computer
- GitHub account created

#### Step 1: Initialize Repository
```bash
cd "c:\Users\maddili ramana\Desktop\QUIZ website"
git init
```

#### Step 2: Add All Files
```bash
git add .
```

#### Step 3: Create First Commit
```bash
git commit -m "Initial commit: UICSA Quiz Website"
```

#### Step 4: Create GitHub Repository
1. Go to GitHub and create new repository
2. Name it `uicsa-quiz-website`
3. Keep it public
4. Don't initialize with anything

#### Step 5: Connect and Push
```bash
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/uicsa-quiz-website.git
git push -u origin main
```

#### Step 6: Enable GitHub Pages
1. Repository Settings → Pages
2. Source: main branch
3. Save

---

## 🔄 UPDATING YOUR WEBSITE

### After Deployment, To Make Changes:

#### Option A: GitHub Website
1. Navigate to the file you want to edit
2. Click the **pencil icon** (edit)
3. Make your changes
4. Scroll down, add commit message
5. Click **"Commit changes"**
6. Wait 1-2 minutes for changes to go live

#### Option B: Git Command Line
```bash
# Make your changes to files
git add .
git commit -m "Description of changes"
git push origin main
```

Changes go live automatically in 1-2 minutes.

---

## 🔗 GETTING YOUR WEBSITE URL

After deployment, your URL will be:
```
https://YOUR-GITHUB-USERNAME.github.io/REPOSITORY-NAME/
```

Example:
```
https://uicsa-team.github.io/uicsa-quiz-website/
```

### Custom Domain (Optional)
1. Buy a domain (e.g., uicsaquiz.com)
2. Repository Settings → Pages → Custom domain
3. Add DNS records from your domain provider
4. GitHub provides detailed instructions

---

## 📱 SHARING YOUR WEBSITE

### Create QR Code
1. Go to [qr-code-generator.com](https://www.qr-code-generator.com/)
2. Enter your GitHub Pages URL
3. Download QR code
4. Print on posters/banners

### Short Link (Optional)
Use bit.ly or tinyurl.com to create:
```
bit.ly/uicsa-quiz-2026
```

---

## 🐛 TROUBLESHOOTING

### Problem: Images Not Showing
**Solution:**
- Check file paths are relative (not absolute)
- Ensure filenames match exactly (case-sensitive)
- Verify images are actually uploaded to `assets/` folders

### Problem: Buttons Don't Open Links
**Solution:**
- Check `config.js` has actual URLs, not placeholders
- URLs must start with `https://`
- Test links directly in browser first

### Problem: Countdown Not Working
**Solution:**
- Check `quizDate` format in `config.js`
- Format must be: `"YYYY-MM-DDTHH:MM:SS"`
- Example: `"2026-12-25T10:00:00"`
- Open browser console (F12) to check for errors

### Problem: Page Looks Different Than Expected
**Solution:**
- Clear browser cache (Ctrl + F5)
- Wait 2-3 minutes for GitHub Pages to update
- Check browser console for errors

### Problem: GitHub Pages Not Enabling
**Solution:**
- Repository must be public
- Must have `index.html` in root
- Wait up to 10 minutes after enabling
- Check repository Settings → Pages for error messages

### Problem: Mobile Layout Broken
**Solution:**
- Test at various widths: 320px, 375px, 768px
- Use Chrome DevTools (F12) → Device Toolbar
- Check for horizontal scrolling
- Verify viewport meta tag is in HTML

---

## ✅ POST-DEPLOYMENT TESTING

### Test on Multiple Devices
- [ ] Desktop (Chrome)
- [ ] Desktop (Firefox)
- [ ] Desktop (Edge/Safari)
- [ ] Mobile (iPhone)
- [ ] Mobile (Android)
- [ ] Tablet (iPad)

### Test All Features
- [ ] Header logos display
- [ ] Hero section loads
- [ ] Countdown timer counts down
- [ ] Register button opens Google Form
- [ ] Start Quiz button opens test portal
- [ ] Event details show correct info
- [ ] Rules are readable
- [ ] Gallery photos load
- [ ] Gallery lightbox works (click image)
- [ ] Lightbox navigation works (arrows)
- [ ] FAQ accordion expands/collapses
- [ ] Scroll to top button appears
- [ ] All sections are responsive
- [ ] No horizontal scrolling on mobile
- [ ] Smooth scrolling works
- [ ] Footer displays correctly

### Accessibility Testing
- [ ] Tab through entire page (keyboard navigation)
- [ ] All buttons focusable
- [ ] Images have alt text
- [ ] Text is readable (good contrast)
- [ ] Links clearly indicate purpose
- [ ] Works with screen reader (optional)

---

## 📊 ANALYTICS (Optional)

To track visitors:

### Google Analytics
1. Create account at [analytics.google.com](https://analytics.google.com)
2. Get tracking ID
3. Add to `index.html` before `</head>`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

---

## 🔒 SECURITY NOTES

### What's Safe:
- This is a static website (no server)
- No user data is collected
- External links open safely in new tabs
- No SQL injection risks

### Important:
- Never put passwords in code
- Don't commit API keys
- Registration/quiz happen on external platforms

---

## 📞 SUPPORT

### If You Need Help:

1. **Check Documentation First:**
   - Read `README.md`
   - Review this guide
   - Check file comments in code

2. **Debug:**
   - Open browser console (F12)
   - Look for error messages
   - Test on different browsers

3. **GitHub Issues:**
   - Check GitHub Pages status
   - Review commit history
   - Verify repository is public

---

## 🎉 SUCCESS!

Once deployed, your website is:
- ✅ Live and accessible worldwide
- ✅ Mobile-friendly
- ✅ Fast loading
- ✅ Professional looking
- ✅ Ready to share

Share your URL with students and promote your quiz event!

---

**Last Updated:** October 2026  
**Version:** 1.0.0  
**Created for:** UICSA Technical Team, Guru Nanak University
