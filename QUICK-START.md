# ⚡ QUICK START GUIDE
## Get Your Website Live in 10 Minutes!

---

## 🎯 5-STEP SETUP

### Step 1: Add Your Logos (2 minutes)

Place these 3 images in `assets/images/`:

```
assets/images/university-logo.png
assets/images/uicsa-logo.png
assets/images/technical-team-logo.png
```

**Where to get them:**
- Ask your university admin for official logos
- Ensure PNG format with transparent background

---

### Step 2: Add Event Photos (2 minutes)

Place 3-6 photos in `assets/gallery/`:

```
assets/gallery/photo1.jpg
assets/gallery/photo2.jpg
assets/gallery/photo3.jpg
```

**Photo ideas:**
- Campus building
- Previous events
- Computer lab
- Students studying

---

### Step 3: Configure Settings (2 minutes)

Edit `config.js`:

```javascript
const QUIZ_CONFIG = {
    // YOUR GOOGLE FORM URL HERE ↓
    registrationUrl: "https://forms.google.com/YOUR-FORM",
    
    // YOUR TEST PORTAL URL HERE ↓
    quizUrl: "https://your-test-portal.com/quiz",
    
    // QUIZ START DATE & TIME ↓
    quizDate: "2026-12-25T10:00:00",
    
    // EVENT DETAILS ↓
    eventDate: "December 25, 2026",
    eventTime: "10:00 AM - 11:30 AM",
    venue: "Computer Lab, Block A",
    mode: "Offline",
};
```

**Save the file!**

---

### Step 4: Test Locally (1 minute)

1. Open `index.html` in Chrome/Firefox
2. Scroll through entire page
3. Click both buttons
4. Open on your phone
5. Fix any issues

---

### Step 5: Deploy to GitHub (3 minutes)

**Option A: Upload via GitHub.com**

1. Go to [github.com](https://github.com)
2. Create account (if needed)
3. Click ➕ → New repository
4. Name: `uicsa-quiz-website`
5. Public ✅
6. Create repository
7. Click "uploading an existing file"
8. Drag ALL your files
9. Commit changes
10. Settings → Pages → Source: main
11. Save

**Your website is now live at:**
```
https://YOUR-USERNAME.github.io/uicsa-quiz-website/
```

---

## ✅ VERIFICATION

**After deployment, check:**

- [ ] Website loads
- [ ] Logos appear
- [ ] Register button works
- [ ] Quiz button works
- [ ] Mobile responsive

---

## 🆘 QUICK FIXES

### Buttons show alert instead of opening link?

→ Update URLs in `config.js` (remove "PASTE_..." text)

### Images not showing?

→ Check filenames match exactly (case-sensitive!)

### Countdown not working?

→ Verify date format: `"2026-12-31T10:00:00"`

### Changes not showing?

→ Clear cache: `Ctrl + F5` (Windows) or `Cmd + Shift + R` (Mac)

---

## 📚 MORE HELP

**Read these if needed:**

- `README.md` - Full documentation
- `DEPLOYMENT-GUIDE.md` - Detailed deployment steps
- `CUSTOMIZATION-GUIDE.md` - How to customize
- `TESTING-CHECKLIST.md` - Complete testing guide

---

## 🎉 YOU'RE DONE!

**Share your website:**

1. Copy your GitHub Pages URL
2. Create QR code at [qr-code-generator.com](https://www.qr-code-generator.com/)
3. Share on WhatsApp/Email
4. Put QR code on posters

**Your quiz event website is now live! 🚀**

---

**Need help?** Check browser console (F12) for errors.

**Last Updated:** October 2026
