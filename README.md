# UICSA Branch Quiz Challenge - Event Website

A beautiful, professional, mobile-first event website for the UICSA Branch Quiz Challenge conducted by the University Institute of Computer Science and Applications, Guru Nanak University, Hyderabad.

## 🎯 Purpose

This is a **frontend-only event landing page**. It does NOT include:
- The actual quiz engine
- Authentication/login system
- Backend or database
- Quiz questions

The actual quiz will be conducted on an external test portal.

## 📁 Project Structure

```
uicsa-quiz-website/
│
├── index.html          # Main HTML file
├── style.css           # All styling
├── script.js           # JavaScript functionality
├── config.js           # Configuration (edit this!)
│
├── assets/
│   ├── images/         # Logos and main images
│   │   ├── university-logo.png
│   │   ├── uicsa-logo.png
│   │   ├── technical-team-logo.png
│   │   └── campus photos...
│   │
│   ├── gallery/        # Event/quiz photos
│   │   └── photo1.jpg, photo2.jpg, etc.
│   │
│   └── icons/          # Additional icons (optional)
│
└── README.md           # This file
```

## 🚀 Quick Start

### 1. Add Your Logos

Place these image files in `assets/images/`:
- `university-logo.png` - Guru Nanak University logo
- `uicsa-logo.png` - UICSA logo
- `technical-team-logo.png` - Technical Team logo

**Recommended sizes:**
- Logos: 200x200px or similar (transparent PNG)
- Gallery photos: 1200x800px (JPG)

### 2. Add Gallery Photos

Place event/campus photos in `assets/gallery/`:
- `photo1.jpg`
- `photo2.jpg`
- `photo3.jpg`
- etc.

### 3. Configure the Website

Edit `config.js` and update:

```javascript
registrationUrl: "YOUR_GOOGLE_FORM_URL"
quizUrl: "YOUR_TEST_PORTAL_URL"
quizDate: "2026-12-25T10:00:00"  // Format: YYYY-MM-DDTHH:MM:SS
eventDate: "December 25, 2026"
eventTime: "10:00 AM"
venue: "Computer Lab / Online"
```

### 4. Customize Content (Optional)

Edit `index.html` to customize:
- Quiz rules (search for "RULES & GUIDELINES")
- FAQ answers
- About UICSA description
- Team member names and roles

### 5. Test Locally

Simply open `index.html` in your web browser. No server required!

## 📤 Deploy to GitHub Pages

### Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it: `uicsa-quiz-website`
4. Make it **Public**
5. Click "Create repository"

### Step 2: Upload Your Files

**Option A: Using GitHub Website**

1. Click "uploading an existing file"
2. Drag and drop ALL files and folders
3. Commit changes

**Option B: Using Git Commands**

```bash
cd "c:\Users\maddili ramana\Desktop\QUIZ website"
git init
git add .
git commit -m "Initial commit: UICSA Quiz Website"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/uicsa-quiz-website.git
git push -u origin main
```

### Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings"
3. Click "Pages" in the left sidebar
4. Under "Source", select "main" branch
5. Click "Save"
6. Wait 2-3 minutes
7. Your site will be live at: `https://YOUR-USERNAME.github.io/uicsa-quiz-website/`

## 📱 Mobile Testing Checklist

Test on these viewport sizes:
- [ ] 320px (iPhone SE)
- [ ] 375px (iPhone 12)
- [ ] 390px (iPhone 14)
- [ ] 414px (iPhone 14 Plus)
- [ ] 768px (iPad)
- [ ] 1024px (iPad Pro)
- [ ] 1440px (Desktop)

Check:
- [ ] No horizontal scrolling
- [ ] Logos are visible and properly sized
- [ ] Buttons are touch-friendly (min 44px height)
- [ ] Text is readable
- [ ] Gallery works and images load
- [ ] Lightbox opens and closes properly
- [ ] Countdown timer displays correctly
- [ ] FAQ accordion works smoothly
- [ ] Navigation menu works (if applicable)
- [ ] All animations are smooth

## 🎨 Customization Guide

### Change Colors

Edit `style.css` and modify CSS variables in `:root`:

```css
:root {
    --primary-color: #1e3a8a;      /* Deep navy */
    --secondary-color: #3b82f6;    /* Royal blue */
    --accent-color: #06b6d4;       /* Cyan */
    --text-dark: #1e293b;
    --text-light: #f8fafc;
}
```

### Change Fonts

Edit the Google Fonts import in `index.html`:

```html
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT&display=swap" rel="stylesheet">
```

Then update in `style.css`:

```css
body {
    font-family: 'YOUR-FONT', sans-serif;
}
```

### Add More FAQ Questions

Edit `index.html`, find the FAQ section, and add:

```html
<div class="faq-item">
    <button class="faq-question">
        Your question here?
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

### Add More Gallery Images

1. Place new images in `assets/gallery/`
2. Edit `index.html`, find the gallery section
3. Add:

```html
<div class="gallery-item">
    <img src="assets/gallery/new-photo.jpg" 
         alt="Event photo description" 
         loading="lazy">
</div>
```

## 🛠️ Technical Features

- ✅ Pure HTML, CSS, JavaScript (no frameworks)
- ✅ Mobile-first responsive design
- ✅ Glassmorphism UI effects
- ✅ Smooth scroll animations
- ✅ Live countdown timer
- ✅ Interactive FAQ accordion
- ✅ Gallery with lightbox
- ✅ Lazy image loading
- ✅ Accessibility compliant
- ✅ GitHub Pages ready
- ✅ No build tools required

## 🔧 Troubleshooting

### Images not showing on GitHub Pages

Make sure all image paths are **relative**:
- ✅ `assets/images/logo.png`
- ❌ `/assets/images/logo.png`
- ❌ `C:\Users\...\logo.png`

### Countdown not working

Check that `quizDate` in `config.js` is in the correct format:
```javascript
quizDate: "2026-12-31T10:00:00"
```

### Buttons not opening links

Make sure you've updated the URLs in `config.js`:
```javascript
registrationUrl: "https://forms.google.com/..."
quizUrl: "https://your-test-portal.com/..."
```

### Mobile layout broken

- Clear your browser cache
- Test in Chrome DevTools mobile view
- Check for horizontal scrolling using browser inspector

## 📞 Support

For issues or questions:
1. Check this README first
2. Review `config.js` for configuration options
3. Test in multiple browsers
4. Check browser console for errors (F12)

## 📄 License

This project is created for UICSA, Guru Nanak University, Hyderabad.

## 🎓 Credits

Developed for UICSA Technical Team
Guru Nanak University, Hyderabad

---

**Last Updated:** October 2026
**Version:** 1.0.0
# QUIZ-WEBSITE-UICSA-Technical-team
