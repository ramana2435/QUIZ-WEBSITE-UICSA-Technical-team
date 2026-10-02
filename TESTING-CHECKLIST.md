# ✅ TESTING CHECKLIST
## UICSA Branch Quiz Challenge Website

Use this comprehensive checklist to test your website before and after deployment.

---

## 📋 PRE-DEPLOYMENT TESTING

### File Structure Verification

- [x] `index.html` exists in root folder
- [x] `style.css` exists in root folder
- [x] `script.js` exists in root folder
- [x] `config.js` exists in root folder
- [x] `README.md` exists
- [x] `assets/images/` folder exists
- [x] `assets/gallery/` folder exists
- [x] `assets/icons/` folder exists

### Configuration Check

**File:** `config.js`

- [ ] `registrationUrl` updated with actual Google Form URL
- [ ] `quizUrl` updated with actual test portal URL
- [ ] `quizDate` set in correct format (YYYY-MM-DDTHH:MM:SS)
- [ ] `eventDate` updated
- [ ] `eventTime` updated
- [ ] `venue` updated
- [ ] `mode` updated (Online/Offline)

### Assets Check

**Logos (assets/images/):**
- [ ] `university-logo.png` added
- [ ] `uicsa-logo.png` added
- [ ] `technical-team-logo.png` added
- [ ] Logo files are PNG format
- [ ] Logos have transparent backgrounds
- [ ] Logo file sizes are reasonable (< 500KB each)

**Gallery (assets/gallery/):**
- [ ] At least 3-6 photos added
- [ ] Photos named appropriately (photo1.jpg, photo2.jpg, etc.)
- [ ] Images compressed for web (< 500KB each)
- [ ] Image dimensions are consistent

**Team Photos (optional):**
- [ ] Team member photos added if needed
- [ ] Photos are square (400x400px or similar)
- [ ] Good quality and well-lit

---

## 🖥️ LOCAL TESTING (Before Deployment)

### Basic Functionality

Open `index.html` in your browser:

**Page Load:**
- [ ] Page loads without errors
- [ ] No broken image icons visible
- [ ] Page renders completely
- [ ] Console shows no errors (Press F12 → Console)

**Visual Check:**
- [ ] Header displays correctly
- [ ] Logos appear (or gracefully hidden if not uploaded)
- [ ] University name shows "Guru Nanak University"
- [ ] Hero section displays with gradient background
- [ ] All sections are visible
- [ ] Footer displays at bottom

### Interactive Elements

**Countdown Timer:**
- [ ] Countdown timer displays
- [ ] Numbers update every second
- [ ] Shows "Days : Hours : Minutes : Seconds"
- [ ] Labels display correctly

**Buttons:**
- [ ] "REGISTER FOR QUIZ" button visible
- [ ] "START QUIZ" button visible
- [ ] Buttons show hover effects
- [ ] Clicking buttons triggers appropriate action:
  - [ ] If not configured: Shows alert message
  - [ ] If configured: Opens link in new tab

**FAQ Accordion:**
- [ ] FAQ questions visible
- [ ] Clicking a question expands answer
- [ ] Plus (+) icon rotates to (×) when expanded
- [ ] Clicking another question closes previous one
- [ ] Smooth expand/collapse animation

**Gallery:**
- [ ] Gallery photos display (or section hidden if no photos)
- [ ] Hover effect works on gallery items
- [ ] Clicking a photo opens lightbox
- [ ] Lightbox displays image correctly
- [ ] Previous/Next buttons work
- [ ] Keyboard arrows (← →) navigate images
- [ ] Escape key closes lightbox
- [ ] Close button (×) works

**Scroll Animations:**
- [ ] Elements fade in as you scroll
- [ ] Animations are smooth
- [ ] No jerky movements

**Scroll to Top:**
- [ ] Scroll down page
- [ ] Button appears in bottom-right corner
- [ ] Clicking button scrolls to top
- [ ] Button has hover effect

**Smooth Scrolling:**
- [ ] Clicking footer links scrolls to sections
- [ ] Scroll is smooth, not instant jump

---

## 📱 RESPONSIVE TESTING

Test on multiple viewport sizes using browser DevTools (F12 → Toggle Device Toolbar):

### Mobile - 320px (iPhone SE)

- [ ] No horizontal scrolling
- [ ] Header logos resize appropriately
- [ ] Hero title readable
- [ ] Buttons stack vertically
- [ ] Buttons are touch-friendly (not too small)
- [ ] Countdown fits without breaking
- [ ] Cards stack in single column
- [ ] Gallery works on mobile
- [ ] FAQ readable and functional
- [ ] Footer stacks correctly

### Mobile - 375px (iPhone 12/13)

- [ ] Layout looks good
- [ ] All text readable
- [ ] Buttons properly sized
- [ ] No elements cut off
- [ ] Spacing appropriate

### Mobile - 390px (iPhone 14)

- [ ] Similar to 375px
- [ ] Everything displays correctly

### Mobile - 414px (iPhone 14 Plus)

- [ ] Layout comfortable
- [ ] Good use of space

### Tablet - 768px (iPad)

- [ ] Two-column layouts work
- [ ] Cards arrange nicely
- [ ] Header reorganizes properly
- [ ] Good spacing between elements

### Tablet - 1024px (iPad Pro)

- [ ] Multi-column grids display
- [ ] Desktop-like experience
- [ ] No awkward gaps

### Desktop - 1440px+

- [ ] Content centered nicely
- [ ] Max-width container respected
- [ ] Not too stretched out
- [ ] Professional appearance

---

## ♿ ACCESSIBILITY TESTING

### Keyboard Navigation

**Tab through entire page:**
- [ ] All buttons focusable
- [ ] Links focusable
- [ ] Focus order makes sense
- [ ] Visible focus outline on all elements
- [ ] Can reach all interactive elements
- [ ] Tab doesn't get trapped

**Enter/Space on buttons:**
- [ ] Pressing Enter activates buttons
- [ ] FAQ expands with Enter key

**Lightbox keyboard controls:**
- [ ] Arrow keys navigate images
- [ ] Escape closes lightbox

### Screen Reader (Optional but Recommended)

**Test with NVDA (Windows) or VoiceOver (Mac):**
- [ ] Page title announced
- [ ] Headings read in order
- [ ] Images have alt text
- [ ] Buttons have clear labels
- [ ] Links clearly described
- [ ] Form fields properly labeled (if added)

### Visual Accessibility

**Color Contrast:**
- [ ] Text easily readable against backgrounds
- [ ] Links distinguishable from body text
- [ ] Button text has good contrast
- [ ] No thin or light gray text on white

**Text Sizing:**
- [ ] Zoom to 200% (Ctrl + Plus)
- [ ] Text remains readable
- [ ] Layout doesn't break
- [ ] No text overlap

**Reduced Motion:**
Open DevTools → More tools → Rendering → Emulate prefers-reduced-motion
- [ ] Animations disabled or reduced
- [ ] Page still functional
- [ ] No spinning/flashing elements

---

## 🔧 TECHNICAL VALIDATION

### HTML Validation

1. Go to [validator.w3.org](https://validator.w3.org/)
2. Upload `index.html` or paste code
3. Check results:
   - [ ] No errors
   - [ ] Warnings are acceptable/expected

### CSS Validation

1. Go to [jigsaw.w3.org/css-validator](https://jigsaw.w3.org/css-validator/)
2. Upload `style.css`
3. Check results:
   - [ ] No critical errors
   - [ ] Vendor prefix warnings are OK

### JavaScript Console

**Open browser console (F12 → Console):**
- [ ] No red errors
- [ ] Only expected messages (config loaded, etc.)
- [ ] No warnings about missing files

### Performance Check

**Open DevTools → Lighthouse → Run Audit:**

**Target Scores:**
- [ ] Performance: 80+ (green)
- [ ] Accessibility: 90+ (green)
- [ ] Best Practices: 80+ (green)
- [ ] SEO: 80+ (green)

**Common Issues to Check:**
- [ ] Images optimized
- [ ] No render-blocking resources
- [ ] Proper meta tags
- [ ] HTTPS (after deployment)

---

## 🌐 CROSS-BROWSER TESTING

Test on multiple browsers:

### Google Chrome

- [ ] Page loads correctly
- [ ] All animations work
- [ ] Buttons functional
- [ ] Lightbox works
- [ ] No console errors

### Mozilla Firefox

- [ ] Layout identical to Chrome
- [ ] Gradient effects display
- [ ] JavaScript works
- [ ] No compatibility issues

### Microsoft Edge

- [ ] Modern Edge (Chromium-based) works
- [ ] All features functional

### Safari (Mac/iOS)

- [ ] Glassmorphism effects work
- [ ] Animations smooth
- [ ] Touch gestures work on iOS

### Mobile Browsers

**Chrome Mobile (Android):**
- [ ] Page loads fast
- [ ] Touch targets large enough
- [ ] No zoom issues

**Safari Mobile (iPhone):**
- [ ] Similar to desktop Safari
- [ ] Smooth scrolling
- [ ] Buttons work with touch

---

## 🚀 POST-DEPLOYMENT TESTING

After deploying to GitHub Pages:

### Initial Checks

- [ ] GitHub Pages URL accessible
- [ ] All pages load (no 404 errors)
- [ ] Images display correctly
- [ ] CSS styles applied
- [ ] JavaScript runs without errors

### Link Verification

**External Links:**
- [ ] Registration button opens Google Form
- [ ] Quiz button opens test portal
- [ ] Links open in new tab
- [ ] Links are correct URLs

**Internal Navigation:**
- [ ] Footer links work
- [ ] Smooth scroll to sections
- [ ] No broken anchors

### Mobile Device Testing

**Real Device Test:**
- [ ] Open on actual smartphone
- [ ] QR code works (if created)
- [ ] Page loads on mobile data
- [ ] Responsive layout works
- [ ] Touch interactions smooth

### Performance on Live Site

- [ ] Page loads in < 3 seconds
- [ ] Images load progressively (lazy loading)
- [ ] No long loading times
- [ ] Smooth animations on slower connections

---

## 🔍 CONTENT VERIFICATION

### Text Accuracy

- [ ] Event name correct
- [ ] University name spelled correctly
- [ ] Date and time accurate
- [ ] Venue information correct
- [ ] Contact info accurate (if added)
- [ ] No typos or grammatical errors

### Branding

- [ ] Correct logos displayed
- [ ] University name consistent
- [ ] UICSA branding accurate
- [ ] Professional appearance maintained

### Information Completeness

- [ ] All rules listed
- [ ] FAQ answers complete
- [ ] Team information accurate
- [ ] About sections informative

---

## 📊 STRESS TESTING

### Multiple Users

Simulate multiple users:
- [ ] Share link with 5-10 people
- [ ] Ask them to test simultaneously
- [ ] Check if site remains responsive
- [ ] No crashes or slowdowns

### Different Networks

- [ ] Test on WiFi
- [ ] Test on mobile data (4G/5G)
- [ ] Test on slower connection (if possible)
- [ ] Page usable on all connections

---

## 🐛 KNOWN ISSUES TO CHECK

### Common Problems

**Images not showing:**
- [ ] File paths are relative (not absolute)
- [ ] Filenames match exactly (case-sensitive)
- [ ] Files actually uploaded to assets folder

**Buttons not working:**
- [ ] config.js loaded properly
- [ ] URLs updated in config.js
- [ ] No JavaScript errors in console

**Countdown not working:**
- [ ] Date format correct in config.js
- [ ] Future date (not past)
- [ ] Browser console shows no errors

**Layout broken:**
- [ ] CSS file loaded
- [ ] No syntax errors in CSS
- [ ] Browser cache cleared

**Animations not working:**
- [ ] JavaScript loaded
- [ ] Scroll required to trigger some animations
- [ ] Check if reduced-motion is enabled

---

## ✅ FINAL VERIFICATION

Before sharing publicly:

### Professional Quality

- [ ] Site looks polished and professional
- [ ] No placeholder text remains (except in config)
- [ ] All sections complete
- [ ] Consistent styling throughout
- [ ] No obvious bugs or glitches

### User Experience

- [ ] Easy to navigate
- [ ] Clear call-to-action (Register/Start Quiz)
- [ ] Information easy to find
- [ ] Mobile experience good
- [ ] Loading time acceptable

### Functionality

- [ ] All buttons work
- [ ] All links work
- [ ] Registration process clear
- [ ] Quiz start process clear
- [ ] Contact information provided

### Documentation

- [ ] README.md helpful
- [ ] DEPLOYMENT-GUIDE.md accurate
- [ ] CUSTOMIZATION-GUIDE.md clear
- [ ] Comments in code helpful

---

## 📝 TESTING LOG

**Use this section to track testing:**

| Date | Tester | Device/Browser | Issues Found | Status |
|------|--------|----------------|--------------|--------|
|      |        |                |              |        |
|      |        |                |              |        |
|      |        |                |              |        |

---

## 🎯 CRITICAL MUST-PASS ITEMS

**Before going live, these MUST work:**

- [x] ✅ Website loads without errors
- [ ] ✅ Register button functional
- [ ] ✅ Start Quiz button functional
- [ ] ✅ Countdown timer working
- [ ] ✅ Mobile responsive (320px+)
- [ ] ✅ No broken images in critical areas
- [ ] ✅ Event details accurate
- [ ] ✅ No console errors

**If any of the above fail, DO NOT deploy until fixed.**

---

## 📞 TROUBLESHOOTING RESOURCES

**If tests fail:**

1. Check browser console (F12) for errors
2. Verify file paths are relative
3. Clear browser cache (Ctrl + F5)
4. Check config.js for typos
5. Review DEPLOYMENT-GUIDE.md troubleshooting section
6. Test in different browser
7. Validate HTML/CSS

---

## ✨ SUCCESS CRITERIA

**Your website is ready when:**

✅ All critical items pass  
✅ Works on mobile devices  
✅ Loads fast (< 3 seconds)  
✅ Professional appearance  
✅ All buttons functional  
✅ Content accurate  
✅ No major accessibility issues  
✅ Tested by at least 3 people  

---

**Testing completed by:** _________________  
**Date:** _________________  
**Ready for deployment:** ☐ YES  ☐ NO (fix issues first)

---

**Last Updated:** October 2026  
**Version:** 1.0.0  
**Created for:** UICSA Technical Team
