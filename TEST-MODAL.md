# 🧪 MODAL TESTING GUIDE

## How to Test the Registration Modal

### Step 1: Open the Website
1. Open `index.html` in your browser
2. Or visit your deployed GitHub Pages URL

### Step 2: Test Opening Modal
1. Scroll to the hero section
2. Click the **"REGISTER FOR QUIZ"** button
3. ✅ Modal should appear with smooth slide-in animation
4. ✅ Background should darken
5. ✅ You should not be able to scroll the page

### Step 3: Test Closing Modal

**Method 1: Close Button (×)**
1. Click the **× button** in the top-right corner
2. ✅ Modal should close
3. ✅ Background scrolling should restore

**Method 2: Click Outside**
1. Open the modal again
2. Click on the **dark background** (outside the white box)
3. ✅ Modal should close

**Method 3: Escape Key**
1. Open the modal again
2. Press the **ESC key** on your keyboard
3. ✅ Modal should close

### Step 4: Test Registration Buttons

**With URLs NOT configured:**
1. Open modal
2. Click "1st Year Students" button
3. ✅ Should show alert: "Registration link not configured"
4. Try the other button
5. ✅ Should also show alert

**With URLs configured:**
1. Add actual Google Form URLs to `config.js`
2. Open modal
3. Click "1st Year Students" button
4. ✅ Should open form in new tab
5. ✅ Modal should close automatically
6. Test the other button too

---

## 🐛 Troubleshooting

### Modal Won't Close

**Check 1: JavaScript Loaded?**
- Open browser console (F12)
- Look for errors in red
- Make sure `script.js` is loaded

**Check 2: Click the Right Place**
- The × button should be visible
- Click directly on the × symbol
- Or click the dark area OUTSIDE the white box

**Check 3: Clear Cache**
- Press `Ctrl + F5` (Windows)
- Or `Cmd + Shift + R` (Mac)
- This forces reload without cache

**Check 4: Test ESC Key**
- With modal open
- Press ESC on keyboard
- Should close immediately

### Modal Doesn't Open

**Check 1: Button Working?**
- Click should trigger something
- Check console for errors

**Check 2: CSS Loaded?**
- Modal might be invisible
- Check if `style.css` loaded

### Buttons Don't Work

**Solution:**
- Update URLs in `config.js`
- Remove placeholder text
- Add actual Google Form links

---

## ✅ Everything Should Work Now!

The fixes applied:
1. ✅ Added `e.preventDefault()` to close button
2. ✅ Added `e.stopPropagation()` to prevent bubbling
3. ✅ Added click event to modal content to prevent closing
4. ✅ Increased z-index for close button
5. ✅ Added cursor pointer to overlay
6. ✅ Added focus outline for accessibility

---

## 📱 Mobile Testing

Test on your phone:
1. Open website on mobile browser
2. Tap "REGISTER FOR QUIZ"
3. Modal should appear full-width
4. Tap × to close
5. Or tap outside the modal
6. Should work smoothly

---

## 🎯 Expected Behavior

**Opening:**
- Click button → Modal slides in
- Background darkens
- Page scroll disabled

**Closing:**
- Click × → Modal closes
- Click outside → Modal closes
- Press ESC → Modal closes
- Select year option → Opens form & closes modal

**After Closing:**
- Modal disappears
- Background lightens
- Page scroll enabled
- Can open again

---

**If it still doesn't work after these fixes:**
1. Check browser console (F12) for errors
2. Verify all files saved properly
3. Try in different browser (Chrome, Firefox)
4. Clear all browser data for the site
5. Re-deploy if using GitHub Pages

---

**Last Updated:** October 2026  
**Status:** Fixes Applied ✅
