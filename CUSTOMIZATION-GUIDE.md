# 🎨 CUSTOMIZATION GUIDE
## UICSA Branch Quiz Challenge Website

This guide shows you exactly how to customize every aspect of your website.

---

## 🔧 QUICK CUSTOMIZATION (5 Minutes)

### 1. Update External Links

**File:** `config.js`

```javascript
const QUIZ_CONFIG = {
    // Replace with your Google Form URL
    registrationUrl: "https://forms.google.com/YOUR-FORM-ID",
    
    // Replace with your test portal URL
    quizUrl: "https://your-test-platform.com/quiz/12345",
    
    // More settings below...
};
```

### 2. Set Quiz Date & Time

**File:** `config.js`

```javascript
// Format: "YYYY-MM-DDTHH:MM:SS"
quizDate: "2026-12-25T10:00:00",  // December 25, 2026 at 10:00 AM

eventDate: "December 25, 2026",
eventTime: "10:00 AM",
eventDuration: "90 Minutes",
venue: "Computer Lab, Block A",
mode: "Offline",
```

**Countdown Timer Formats:**
- `"2026-12-25T10:00:00"` → December 25, 2026, 10:00 AM
- `"2027-01-15T14:30:00"` → January 15, 2027, 2:30 PM
- `"2026-11-30T09:00:00"` → November 30, 2026, 9:00 AM

---

## 📝 CONTENT CUSTOMIZATION

### Update Quiz Rules

**File:** `index.html`  
**Find:** `<!-- RULES & GUIDELINES -->`

Each rule is in a `<div class="rule-card">`:

```html
<div class="rule-card" data-aos="fade-up" data-aos-delay="150">
    <div class="rule-number">01</div>
    <p>Your custom rule text here.</p>
</div>
```

To add more rules:
1. Copy an existing rule card
2. Change the number
3. Update the text
4. Increment `data-aos-delay` by 50

### Update Team Members

**File:** `index.html`  
**Find:** `<!-- TECHNICAL TEAM -->`

Edit team member cards:

```html
<div class="team-card" data-aos="fade-up" data-aos-delay="150">
    <div class="team-photo">
        <img src="assets/images/team-member-1.jpg" alt="Team member">
    </div>
    <h3 class="team-name">Rajesh Kumar</h3>
    <p class="team-role">Event Coordinator</p>
</div>
```

To add more members:
1. Copy a team card
2. Update image path
3. Change name and role
4. Add photo to `assets/images/`

### Update FAQ Questions

**File:** `index.html`  
**Find:** `<!-- FAQ SECTION -->`

Each FAQ item:

```html
<div class="faq-item" data-aos="fade-up" data-aos-delay="150">
    <button class="faq-question">
        Your question here?
        <span class="faq-icon">+</span>
    </button>
    <div class="faq-answer">
        <p>Your answer here.</p>
    </div>
</div>
```

To add more FAQs:
1. Copy an entire `faq-item`
2. Update question and answer
3. Increment delay

### Update About UICSA Text

**File:** `index.html`  
**Find:** `<!-- ABOUT UICSA -->`

Edit the paragraphs:

```html
<p>
    Your custom text about UICSA here. Keep it professional
    and informative. Describe the branch, its activities,
    and achievements.
</p>
```

### Update Announcements

**File:** `index.html`  
**Find:** `<!-- ANNOUNCEMENTS -->`

```html
<div class="announcement-content">
    <h3>IMPORTANT ANNOUNCEMENT</h3>
    <p>
        Your announcement text here. This could be about
        registration deadlines, special instructions, or
        important updates.
    </p>
</div>
```

---

## 🎨 DESIGN CUSTOMIZATION

### Change Color Scheme

**File:** `style.css`  
**Find:** `:root {` (at the top)

```css
:root {
    /* Change these colors */
    --primary-color: #1e3a8a;      /* Deep navy blue */
    --secondary-color: #3b82f6;    /* Bright blue */
    --accent-color: #06b6d4;       /* Cyan */
    
    /* Text colors */
    --text-dark: #1e293b;
    --text-light: #f8fafc;
}
```

**Popular Color Schemes:**

**Green Theme (Eco/Tech):**
```css
--primary-color: #065f46;
--secondary-color: #10b981;
--accent-color: #34d399;
```

**Purple Theme (Creative):**
```css
--primary-color: #5b21b6;
--secondary-color: #8b5cf6;
--accent-color: #a78bfa;
```

**Red Theme (Bold):**
```css
--primary-color: #991b1b;
--secondary-color: #ef4444;
--accent-color: #f87171;
```

### Change Fonts

**File:** `index.html`  
**Find:** Google Fonts link in `<head>`

Replace with your chosen fonts:

```html
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;700&family=Montserrat:wght@600;800&display=swap" rel="stylesheet">
```

Then update `style.css`:

```css
body {
    font-family: 'Roboto', sans-serif;
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Montserrat', sans-serif;
}
```

**Popular Font Combinations:**
- Roboto + Montserrat (Modern)
- Open Sans + Raleway (Clean)
- Lato + Merriweather (Professional)
- Nunito + Poppins (Friendly)

### Adjust Spacing

**File:** `style.css`

```css
:root {
    --spacing-sm: 1rem;      /* Increase for more space */
    --spacing-md: 2rem;
    --spacing-lg: 3rem;
    --spacing-xl: 4rem;
}
```

### Change Border Radius (Roundness)

**File:** `style.css`

```css
:root {
    --radius-sm: 0.5rem;   /* Less rounded */
    --radius-md: 1rem;
    --radius-lg: 1.5rem;   /* More rounded */
}
```

For sharp corners (no rounding):
```css
--radius-sm: 0;
--radius-md: 0;
--radius-lg: 0;
```

---

## 🖼️ IMAGE CUSTOMIZATION

### Adding More Gallery Photos

**File:** `index.html`  
**Find:** `<!-- GALLERY -->`

Add after existing photos:

```html
<div class="gallery-item" data-aos="zoom-in" data-aos-delay="450">
    <img src="assets/gallery/new-photo.jpg" 
         alt="Description" 
         loading="lazy"
         onerror="this.parentElement.style.display='none'">
    <div class="gallery-overlay">
        <span class="gallery-icon">🔍</span>
    </div>
</div>
```

### Changing Gallery Layout

**File:** `style.css`  
**Find:** `.gallery-grid`

**2 Columns:**
```css
.gallery-grid {
    grid-template-columns: repeat(2, 1fr);
}
```

**4 Columns:**
```css
.gallery-grid {
    grid-template-columns: repeat(4, 1fr);
}
```

**Masonry Style:**
```css
.gallery-grid {
    column-count: 3;
    column-gap: 1.5rem;
}

.gallery-item {
    break-inside: avoid;
    margin-bottom: 1.5rem;
}
```

---

## 📱 BUTTON CUSTOMIZATION

### Change Button Text

**File:** `index.html`

Find button sections and edit:

```html
<button class="btn btn-primary btn-lg" id="registerBtn">
    <span class="btn-icon">📝</span>
    <span class="btn-text">YOUR NEW TEXT</span>
</button>
```

Examples:
- "SIGN UP NOW"
- "JOIN THE CHALLENGE"
- "REGISTER HERE"
- "BEGIN QUIZ"

### Change Button Style

**File:** `style.css`  
**Find:** `.btn-primary`

```css
.btn-primary {
    background: linear-gradient(135deg, #1e3a8a 0%, #3b82f6 100%);
    color: white;
    /* Add your custom styles */
}
```

**Solid Color Button:**
```css
.btn-primary {
    background: #3b82f6;
    color: white;
}
```

**Outline Button:**
```css
.btn-primary {
    background: transparent;
    color: #3b82f6;
    border: 2px solid #3b82f6;
}
```

---

## ⚙️ ADVANCED CUSTOMIZATION

### Remove Sections You Don't Need

**File:** `index.html`

To hide a section, find it and add `style="display: none;"`:

```html
<section class="gallery-section" id="gallery" style="display: none;">
```

Or delete the entire section.

**Sections you can remove:**
- Gallery (if no photos)
- Team (if not listing members)
- Timeline
- Announcements

### Add Custom Section

**File:** `index.html`

Add between existing sections:

```html
<section class="custom-section" id="custom">
    <div class="container">
        <h2 class="section-title" data-aos="fade-up">YOUR TITLE</h2>
        <div class="section-subtitle" data-aos="fade-up" data-aos-delay="100">
            Your subtitle
        </div>
        
        <div data-aos="fade-up" data-aos-delay="200">
            <!-- Your content here -->
        </div>
    </div>
</section>
```

Add styling in `style.css`:

```css
.custom-section {
    background: var(--bg-white);
    padding: 5rem 0;
}
```

### Change Animation Speed

**File:** `style.css`  
**Find:** `:root {`

```css
:root {
    --transition-fast: 0.2s ease;     /* Make faster: 0.1s */
    --transition-normal: 0.3s ease;   /* Make faster: 0.2s */
    --transition-slow: 0.5s ease;     /* Make faster: 0.3s */
}
```

### Disable Animations

**File:** `style.css`

Add at the end:

```css
* {
    animation: none !important;
    transition: none !important;
}
```

Or disable specific animations:

```css
.particle-container {
    display: none;
}

.hero-background {
    animation: none;
}
```

### Change Countdown Display

**File:** `style.css`  
**Find:** `.countdown-item`

**Horizontal Layout:**
```css
.countdown-timer {
    flex-direction: row;
}

.countdown-item {
    min-width: 100px;
}
```

**Larger Numbers:**
```css
.countdown-value {
    font-size: 5rem;  /* Increase from 3.5rem */
}
```

---

## 🔤 TEXT CUSTOMIZATION

### Change Hero Title

**File:** `index.html`  
**Find:** `<h1 class="hero-title">`

```html
<h1 class="hero-title">
    <span class="title-line">YOUR FIRST LINE</span>
    <span class="title-line title-highlight">YOUR SECOND LINE</span>
</h1>
```

### Update Tagline

**File:** `index.html`  
**Find:** `<div class="hero-tagline">`

```html
<div class="hero-tagline">
    <span class="tagline-item">First</span>
    <span class="tagline-separator">•</span>
    <span class="tagline-item">Second</span>
    <span class="tagline-separator">•</span>
    <span class="tagline-item">Third</span>
</div>
```

---

## 📏 LAYOUT CUSTOMIZATION

### Change Container Width

**File:** `style.css`  
**Find:** `.container {`

```css
.container {
    max-width: 1400px;  /* Increase from 1200px for wider layout */
}
```

### Adjust Section Padding

**File:** `style.css`  
**Find:** `section {`

```css
section {
    padding: 6rem 0;  /* Increase from 5rem for more space */
}
```

### Change Mobile Breakpoints

**File:** `style.css`  
**Find:** `@media` queries

Adjust where needed:

```css
@media (max-width: 768px) {
    /* Tablet styles */
}

@media (max-width: 480px) {
    /* Mobile styles */
}
```

---

## 🎯 TESTING YOUR CHANGES

After making changes:

1. **Save files**
2. **Open index.html** in browser
3. **Hard refresh:** Ctrl + F5 (Windows) or Cmd + Shift + R (Mac)
4. **Test on mobile:** Use Chrome DevTools (F12) → Device Toolbar
5. **Check console:** F12 → Console tab for errors

---

## 🔄 REVERTING CHANGES

If something breaks:

1. **Find original code** in this guide
2. **Copy and paste** it back
3. **Save and refresh**

Or:

1. **Re-download** files from GitHub
2. **Replace** the broken file
3. **Re-apply** only the working customizations

---

## 💡 CUSTOMIZATION IDEAS

### For Different Events

**Workshop/Seminar:**
- Change "Quiz" to "Workshop"
- Update colors to professional blue/gray
- Remove quiz-specific sections

**Hackathon:**
- Update hero with hackathon theme
- Add team registration fields
- Include timeline of event

**Tech Fest:**
- Multi-event layout
- Different sections per event
- Event schedule timeline

---

## 📞 NEED HELP?

1. **Check console** for errors (F12)
2. **Validate HTML** at validator.w3.org
3. **Review this guide** for examples
4. **Test changes** incrementally
5. **Keep backups** before major changes

---

**Remember:** Make one change at a time and test before proceeding!

**Last Updated:** October 2026  
**Version:** 1.0.0
